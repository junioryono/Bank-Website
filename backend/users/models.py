from django.db import models
from django.db.models.signals import post_save
from django.contrib.auth.models import AbstractUser
import random


class User(AbstractUser):
    username = models.CharField(max_length=100, default='default')
    email = models.EmailField(unique=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def profile(self):
        profile = Profile.objects.get(user=self)


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    firstName = models.CharField(max_length=1000)
    lastName = models.CharField(max_length=1000)
    address = models.CharField(max_length=255)
    salary = models.CharField(max_length=255, default='none')
    image_path = models.CharField(max_length=255, default="default.jpg")


accountTypes = (('Checkings', 'Checkings'),
                ('Savings', 'Savings'), ('Credit Card', 'Credit Card'), ('Loan', 'Loan'))


class account(models.Model):

    def random_string():
        return str(random.randint(1000000, 9999999))

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    accountNumber = models.CharField(
        max_length=1000, default=random_string)
    balance = models.CharField(max_length=1000, default='0')
    overdraftLimit = models.CharField(max_length=1000, default=1000)
    accountType = models.CharField(choices=accountTypes, default='Savings')
    interestRate = models.CharField(max_length=1000, default=0.05)
    creditLimit = models.CharField(max_length=1000, default=1000)
    minimumPayment = models.CharField(max_length=1000, default=0)
    paymentDueDate = models.CharField(max_length=1000, default=0)


def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)


def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()


post_save.connect(create_user_profile, sender=User)
post_save.connect(save_user_profile, sender=User)
