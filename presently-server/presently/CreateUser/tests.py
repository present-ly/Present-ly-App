from django.test import TestCase
from rest_framework.decorators import api_view, permission_classes
from rest_framework.parsers import JSONParser
from .test_serializers import UserSerializer
from django.views.decorators.csrf import csrf_exempt
from rest_framework.permissions import AllowAny
from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework import status


# Create your tests here.
@api_view(['POST'])
@permission_classes((AllowAny,))
@csrf_exempt
def test_create_auth(request, format=None):
    serialized = UserSerializer(data=request.data)

    if serialized.is_valid():
        user = User.objects.create_user(
                serialized.data['email'],
                serialized.data['username'],
                serialized.data['password']
                )

        user.save()

        serialized_user = UserSerializer(user)

        return Response(serialized_user.data, status=status.HTTP_201_CREATED, headers={"Access-Control-Allow-Origin": "http://localhost:6007/"})

    else:
        return Response(serialized._errors, status=status.HTTP_400_BAD_REQUEST, headers={"Access-Contrl-Allow-Origin": "http://localhost:6007/"})
