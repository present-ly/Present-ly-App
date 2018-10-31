from django.db import models
from django.contrib.auth.models import User


class PresentlyUser(models.Model):

    user = models.OneToOneField(User, on_delete=models.CASCADE)

    # Misc
    birthday = models.DateField()
    sex = models.FloatField()
    name = models.CharField(max_length=50)

    # Time
    time_updated = models.DateField(auto_now=True)
    time_created = models.DateField()

    def __str__(self):
        return self.user.username


class UserRelationship(models.Model):
    user = models.ForeignKey(PresentlyUser, on_delete=models.CASCADE)

    name = models.CharField(max_length=50)
    relationship = models.CharField(max_length=30)
    sex = models.FloatField()
    birthday = models.DateField()

    time_updated = models.DateField(auto_now=True)
    time_created = models.DateField()

    def __str__(self):
        return self.name


class UserPreference(models.Model):
    # name = models.CharField(max_length=30)
    # description = models.CharField(max_length=100)
    user = models.ForeignKey(PresentlyUser, on_delete=models.CASCADE)

    def __str__(self):
        return self.user.name


class SinglePreference(models.Model):
    name = models.CharField(max_length=30)
    description=models.CharField(max_length=100)

    def __str__(self):
        return self.name


class TotalPreferences(models.Model):

    name = models.CharField(max_length=30)
    description = models.CharField(max_length=100)

    # TODO: Add ForeignKey to SinglePreference

    # user = models.ManyToManyField(UserPreference)

    user = models.ForeignKey(PresentlyUser, on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class ShoppingCart(models.Model):

    # user = models.OneToOneField(PresentlyUser, on_delete=models.CASCADE)

    user = models.ForeignKey(PresentlyUser, on_delete=models.CASCADE)
    relationship = models.OneToOneField(UserRelationship, on_delete=models.CASCADE)
    time = models.DateField(auto_now=True)

    def __str__(self):
        return self.relationship.name


class ItemInCart(models.Model):

    # cart = models.OneToOneField(ShoppingCart, on_delete=models.CASCADE)

    cart = models.ForeignKey(ShoppingCart, on_delete=models.CASCADE)
    vendor = models.CharField(max_length=50)
    time = models.DateField(auto_now=True)
    price = models.CharField(max_length=10)
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=300)

    def __str__(self):
        return self.name

class LastRecommendation(models.Model):
    user = models.ForeignKey(UserRelationship, on_delete=models.CASCADE)
    time = models.DateField(auto_now=True)


class Product(models.Model):
    recommendation = models.ForeignKey(LastRecommendation, on_delete=models.CASCADE)
    vendor = models.CharField(max_length=50)
    time = models.DateField(auto_now=True)
    price = models.CharField(max_length=10)
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=300)

    def __str__(self):
        return self.name
