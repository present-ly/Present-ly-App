from django.shortcuts import render
from django.conf import settings
import requests
import json
import ast
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from . import models
from . import serializers

# Create your views here.

@api_view(['GET'])
def KeywordListing(request, key_word="food"):

    """
    Given the keywords search etsy
    """

    url = 'https://openapi.etsy.com/v2/listings/active.js?keywords={key_word}&limit=3&includes=Images:1&api_key={key}'.format(key=settings.ETSY_KEY, key_word=key_word)

    response = requests.get(url)

    fixed_response = response.text[5:-2]

    res = json.loads(fixed_response)

    data = res['results']
    snippet_view = data[:5]

    total_objs = []
    for each_item in snippet_view:
        title = each_item['title']
        description = each_item['description']
        price = each_item['price']
        currency = each_item['currency_code']
        image = each_item['Images'][0]['url_fullxfull']

        etsy_prod = models.EtsyListing(title=title, description=description,
                                        price=price, currency=currency,
                                        image=image)

        prod = {'title': title,
                'description': description,
                'price': price,
                'currency': currency,
                'image': image
                 }

        # NOTE: Enable to saved models created
        # etsy_prod.save()

        total_objs.append(prod)

    # serializer = serializers.TotalEtsyShowcaseSerializer(total_objs)

    print("response.text: ", response.text)
    return Response({'data': total_objs}, status.HTTP_200_OK)

