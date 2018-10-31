from django.urls import path
from . import views


urlpatterns = [
        path('etsy/<str:key_word>', views.KeywordListing),
        ]
