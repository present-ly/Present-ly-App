from django.db import models

# Create your models here.
class EtsyListing(models.Model):
    title = models.TextField()
    description = models.TextField()
    price = models.CharField(max_length=10)
    currency = models.CharField(max_length=10)
    image = models.CharField(max_length=200)
