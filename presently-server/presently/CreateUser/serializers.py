from rest_framework.decorators import api_view, permission_classes
from .test_serializers import UserSerializer
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status, serializers

from . import models

class UserSerializer(serializers.Serializer):
    email = serializers.EmailField()
    username = serializers.CharField(max_length=100)
    password = serializers.CharField(max_length=100)


class PresentlyUserCreationSerializer(serializers.ModelSerializer):

    user = serializers.CharField(max_length=30)
    class Meta:
       model = models.PresentlyUser
       fields = '__all__'

class UserRelationshipSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.UserRelationship
        fields = '__all__'

class SinglePreferenceSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.SinglePreference
        fields = '__all__'


class TotalPreferencesSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.TotalPreferences
        fields = '__all__'


class UserPreferenceSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.UserPreference
        fields = '__all__'


class ProductSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Product
        fields = '__all__'


class ItemInCart(serializers.ModelSerializer):

    class Meta:
        model = models.ItemInCart
        fields = '__all__'


class ShoppingCartSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.ShoppingCart
        fields = '__all__'

class ProductSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Product
        fields = '__all__'

class LastRecommendationSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.LastRecommendation
        fields = '__all__'
