from django.db import models

# Create your models here.
class joinModel(models.Model):
    FirstName = models.CharField(max_length=75)
    LastName = models.CharField(max_length=75)
    Email = models.EmailField(max_length=150)
    PhoneNumber = models.CharField(max_length=12)
    Major = models.CharField(max_length=75)
    Birthday = models.CharField(max_length=8)
    City = models.CharField(max_length=100)
    ShirtSize = models.CharField(max_length=2)

