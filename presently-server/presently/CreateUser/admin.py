from django.contrib import admin
from . import models

# Register your models here.
admin.site.register(models.PresentlyUser)
admin.site.register(models.UserPreference)
admin.site.register(models.Product)
admin.site.register(models.ItemInCart)
admin.site.register(models.ShoppingCart)
admin.site.register(models.LastRecommendation)
admin.site.register(models.UserRelationship)
admin.site.register(models.TotalPreferences)
admin.site.register(models.SinglePreference)
