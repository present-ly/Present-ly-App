from django.contrib.auth.models import User
from rest_framework import serializers
from . import models


class OldUserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('password', 'first_name', 'last_name', 'email')
        extra_kawrgs = {'password': {'write_only': True}, }

    def create(self, validated_data):
        user = User(email=validated_data['email'], username=validated_data['username'])
        user.set_password(validated_data['password'])
        user.save()
        return user


class UserSerializer(serializers.Serializer):
    email = serializers.EmailField()
    username = serializers.CharField(max_length=100)
    password = serializers.CharField(max_length=100)


class PresentlyUserSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.PresentlyUser
        fields = ('birthday', 'sex', 'name', 'time_updated',
                    'time_created')
