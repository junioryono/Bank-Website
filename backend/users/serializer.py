from users.models import User, account
from users.models import Profile
from django.contrib.auth.password_validation import validate_password
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # These are claims, you can add custom claims
        token['firstName'] = user.profile.firstName
        token['lastName'] = user.profile.lastName
        token['address'] = user.profile.address
        token['username'] = user.username
        token['email'] = user.email
        token['salary'] = user.profile.salary
        token['image_path'] = str(user.profile.image_path)
        # ...
        return token


class accountsSerializer(serializers.ModelSerializer):

    class Meta:
        model = account
        # fields = ('__all__')
        fields = ('user', 'accountNumber', 'balance', 'overdraftLimit', 'acountType',
                  'interestRate', 'creditLimit', 'minimumPayment', 'paymentDueDate')


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)
    firstName = serializers.CharField(write_only=True, required=True)
    lastName = serializers.CharField(write_only=True, required=True)
    address = serializers.CharField(write_only=True, required=True)
    salary = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ('email', 'username', 'password',
                  'password2', 'firstName', 'lastName', 'address', 'salary')

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError(
                {"password": "Password fields didn't match."})

        return attrs

    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data['username'],
            email=validated_data['email'],

        )
        user.profile.firstName = validated_data['firstName']
        user.profile.lastName = validated_data['lastName']
        user.profile.address = validated_data['address']
        user.profile.salary = validated_data['salary']

        user.set_password(validated_data['password'])
        user.save()

        return user
