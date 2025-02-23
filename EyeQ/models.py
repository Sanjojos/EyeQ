from django.db import models
from django.contrib.auth.hashers import make_password
class patients(models.Model):
    fname = models.CharField(max_length=30)
    email = models.CharField(max_length=30, unique=True)
    password = models.CharField(max_length=128)  

    def save(self, *args, **kwargs):
        if not self.pk:  
            self.password = make_password(self.password)
        super().save(*args, **kwargs)
class booking(models.Model):
    fname=models.CharField(max_length=30)
    Symptoms=models.CharField(max_length=30)
    address=models.CharField(max_length=30)
    emails=models.CharField(max_length=30)
    mobile=models.IntegerField(default=0)
    addinfo=models.CharField(max_length=300)