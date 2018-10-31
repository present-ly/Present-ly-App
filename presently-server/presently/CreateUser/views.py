from django.test import TestCase
from rest_framework.decorators import api_view, permission_classes
from rest_framework.parsers import JSONParser
from .test_serializers import UserSerializer
from django.views.decorators.csrf import csrf_exempt
from rest_framework.permissions import AllowAny
from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework import status, generics
from rest_framework.authtoken.models import Token

from . import models
from . import serializers


# Create your views here.
@api_view(['POST'])
@permission_classes((AllowAny,))
@csrf_exempt
def create_auth(request, format=None):
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
        return Response(serialized._errors, status=status.HTTP_400_BAD_REQUEST, headers={"Access-Control-Allow-Origin": "http://localhost:6007/"})


@api_view(['POST'])
def presently_user_creator(request):

    """
    Creates Presently User
    """

    serialized = serializers.PresentlyUserCreationSerializer(data=request.data)

    if serialized.is_valid():
        creation_data = serialized.data

        user = User.objects.filter(username=creation_data['user'])
        creation_data['user'] = user[0]

        new_user = models.PresentlyUser(**creation_data)

        new_user.save()
        serialized_user = serializers.PresentlyUserCreationSerializer(new_user)

        return Response(serialized_user.data, status=status.HTTP_201_CREATED, headers={"Access-Control-Allow-Origin": "http://localhost:6007/"})

    else:
        return Response(serialized._errors, status=status.HTTP_400_BAD_REQUEST, headers={"Access-Control-Allow-Origin": "http://localhost:6007/"})


@api_view(['POST'])
def user_relationship_creator(request):

    """
    Creates User Relationship
    """

    serialized = serializers.UserRelationshipSerializer(data=request.data)

    if serialized.is_valid():
        creation_data = serialized.data

        user = models.PresentlyUser.objects.filter(id=creation_data['user'])

        creation_data['user'] = user[0]

        new_user = models.UserRelationship(**creation_data)

        try:
            new_user.save()
            serialized_user = serializers.UserRelationshipSerializer(new_user)

            return Response(serialized_user.data, status=status.HTTP_201_CREATED, headers={"Access-Control-Allow-Origin": "http://localhost:6007/"})

        # NOTE: suppose to catch django.db.utils.IntegrityError for duplicate entries

        except:
            return Response(serialized._errors, status=status.HTTP_400_BAD_REQUEST, headers={"Access-Control-Allow-Origin": "http://localhost:6007/"})

    else:
        return Response(serialized._errors, status=status.HTTP_400_BAD_REQUEST, headers={"Access-Control-Allow-Origin": "http://localhost:6007/"})


@api_view(['POST'])
def shopping_cart_creator(request):

    """
    Creates shopping cart
    """

    serialized = serializers.ShoppingCartSerializer(data=request.data)

    if serialized.is_valid():

        print("serialization is valid!")

        creation_data = serialized.data

        user = models.PresentlyUser.objects.filter(id=creation_data['user'])
        relationship = models.UserRelationship.objects.filter(id=creation_data['relationship'])

        creation_data['user'] = user[0]
        creation_data['relationship'] = relationship[0]

        new_cart = models.ShoppingCart(**creation_data)
        new_cart.save()

        serialized_user = serializers.ShoppingCartSerializer(new_cart)

        return Response(serialized_user.data, status=status.HTTP_201_CREATED, headers={"Access-Control-Allow-Origin": "http://localhost:6007/"})

    else:
        return Response(serialized._errors, status=status.HTTP_400_BAD_REQUEST, headers={"Access-Control-Allow-Origin": "http://localhost:6007/"})


@api_view(['POST'])
def add_item_to_cart(request):
    serialized = serializers.ItemInCart(data=request.data)

    if serialized.is_valid():
        creation_data = serialized.data

        cart = models.ShoppingCart.objects.filter(id=creation_data['cart'])

        creation_data['cart'] = cart[0]

        item = models.ItemInCart(**creation_data)

        item.save()

        serialized_user = serializers.ItemInCart(item)

        return Response(serialized_user.data, status=status.HTTP_201_CREATED, headers={"Access-Control-Allow-Origin": "http://localhost:6007/"})

    else:
        return Response(serialized._errors, status=status.HTTP_400_BAD_REQUEST, headers={"Access-Control-Allow-Origin": "http://localhost:6007/"})


@api_view(['POST'])
def add_preference_to_user(request):
    serialized = serializers.TotalPreferencesSerializer(data=request.data)

    if serialized.is_valid():
        creation_data = serialized.data
        user = models.PresentlyUser.objects.filter(id=creation_data['user'])
        creation_data['user'] = user[0]
        preference = models.TotalPreferences(**creation_data)

        preference.save()

        serialized_user = serializers.TotalPreferencesSerializer(preference)

        return Response(serialized_user.data, status=status.HTTP_201_CREATED, headers={"Access-Control-Allow-Origin": "http://localhost:6007/"})

    else:
        return Response(serialized._errors, status=status.HTTP_400_BAD_REQUEST, headers={"Access-Control-Allow-Origin": "http://localhost:6007/"})


@api_view(['POST'])
def add_preference(request):
    print("request: ", request)
    print("request.data: ", request.data)
    serialized = serializers.SinglePreferenceSerializer(data=request.data)

    if serialized.is_valid():
        creation_data = serialized.data

        preference = models.SinglePreference(**creation_data)

        preference.save()

        serialized_user = serializers.SinglePreferenceSerializer(preference)

        return Response(serialized_user.data, status=status.HTTP_201_CREATED, headers={"Access-Control-Allow-Origin": "http://localhost:6007/"})

    else:
        return Response(serialized._errors, status=status.HTTP_400_BAD_REQUEST, headers={"Access-Control-Allow-Origin": "http://localhost:6007/"})


@api_view(['POST'])
def add_recommendation(request):
    serialized = serializers.LastRecommendationSerializer(data=request.data)

    if serialized.is_valid():
        creation_data = serialized.data
        user = models.PresentlyUser.objects.get(id=serialized['user'])
        
        creation_data['user'] = user

        recommendation = models.LastRecommendation(**creation_data)

        recommendation.save()

        serialized_user = serializers.LastRecommendationSerializer(recommendation)

        return Response(serialized_user.data, status=status.HTTP_201_CREATED, headers={"Access-Control-Allow-Origin": "http://localhost:6007/"})

    else:
        return Response(serialized._errors, status=status.HTTP_400_BAD_REQUEST, headers={"Access-Control-Allow-Origin": "http://localhost:6007/"})


@api_view(['POST'])
def add_product(request):

    """
    Adds product to recommendation
    """

    serialized = serializers.ProductSerializer(data=request.data)

    if serialized.is_valid():
        creation_data = serialized.data

        user = models.PresentlyUser.objects.get(id=serialized['user'])

        creation_data['user'] = user

        product = models.Product(**creation_data)

        product.save()

        serialized_user = serializers.ProductSerializer(product)

        return Response(serialized_user.data, status=status.HTTP_201_CREATED, headers={"Access-Control-Allow-Origin": "http://localhost:6007/"})

    else:
        return Response(serialized._errors, status=status.HTTP_400_BAD_REQUEST, headers={"Access-Control-Allow-Origin": "http://localhost:6007/"})

@api_view(['GET'])
def get_presently_user(request, token):

    """
    Gets the presently user based on the auth token
    """

    # token = request.GET['token']
    token_obj = Token.objects.get(key=token)

    user = token_obj.user

    presently_user = models.PresentlyUser.objects.get(user=user)

    serializer = serializers.PresentlyUserCreationSerializer(presently_user)

    return Response(serializer.data, status.HTTP_200_OK)


@api_view(['GET'])
def get_recommendations(request, user_id):

    """
    Retrieves all the user's recommendations
    """

    # user_id = request.GET['user']
    recommendations = models.LastRecommendation.objects.get(id=user_id)

    serializer = serializers.LastRecommendationSerializer(recommendations)

    return Response(serializer.data, status.status.HTTP_200_OK)


@api_view(['GET'])
def get_carts(request, user_id):

    """
    user parameter is presently user id
    """

    #user_id = request.GET['user']
    cart = models.ShoppingCart.objects.filter(id=user_id)

    serializer = serializers.ShoppingCartSerializer(cart, many=True)

    return Response(serializer.data, status.status.HTTP_200_OK)


@api_view(['GET'])
def get_user_relationships(request, user_id):

    """
    user parameter is presently user id
    """

    # user_id = request.GET['user']
    user_relationships = models.UserRelationship.objects.get(id=user_id)

    serializer = serializers.UserRelationshipSerializer(user_relationships, many=True)

    return Response(serializer.data, status.status.HTTP_200_OK)


@api_view(['GET'])
def get_all_available_preferences(requests):
    total_prefs = models.SinglePreference.objects.all()
    serializer = serializers.SinglePreferenceSerializer(total_prefs, many=True)
    return Response(serializer.data, status.status.HTTP_200_OK)


@api_view(['GET'])
def get_user_preferences(requests, user_id):

    """
    user parameter is presently user id
    """

    # user_id = request.GET['user']
    user_pref = models.TotalPreference.objects.filter(id=user_id)

    serializer = serializers.TotalPreferencesSerializer(use_pref, many=True)

    return Response(serializer.data, status.status.HTTP_200_OK)

