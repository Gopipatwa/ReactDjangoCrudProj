from unicodedata import name
from django.db import models

# Create your models here.

class Task(models.Model):
  title = models.CharField(max_length=200)
  completed = models.BooleanField(default=False, blank=True, null=True)
      
  def __str__(self):
    return self.title

  class User(models.Model):
    username = models.CharField(max_length=100,unique=True)
    firstname = models.CharField(max_length=100)
    lastname = models.CharField(max_length=100)
    contact = models.CharField(max_length=10)
    email = models.EmailField()
    created_at = models.DateTimeField(auto_now=True)

