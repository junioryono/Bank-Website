# Generated by Django 4.2.7 on 2023-12-11 07:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0013_alter_account_accountnumber_alter_account_acounttype'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='account',
            name='acountType',
        ),
        migrations.AddField(
            model_name='account',
            name='accountType',
            field=models.CharField(choices=[('Checkings', 'Checkings'), ('Savings', 'Savings'), ('Credit Card', 'Credit Card'), ('Loan', 'Loan')], default='Savings'),
        ),
        migrations.AlterField(
            model_name='account',
            name='accountNumber',
            field=models.CharField(default=8283738, max_length=1000),
        ),
    ]
