# Generated by Django 4.2.7 on 2023-12-11 04:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0008_alter_account_accountnumber_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='account',
            name='accountNumber',
            field=models.CharField(default=9003258, max_length=1000),
        ),
    ]
