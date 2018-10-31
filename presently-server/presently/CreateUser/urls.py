from django.urls import path
from . import views
from rest_framework.authtoken import views as drf_views
from . import tests

urlpatterns = [
        path('token', drf_views.obtain_auth_token, name='auth'),
        path('test',  tests.test_create_auth),
        path('user-info', views.presently_user_creator),
        path('user-relationship-create',
             views.user_relationship_creator),
        path('shopping-cart-create',
             views.shopping_cart_creator),
        path('add-item-cart', views.add_item_to_cart),
        path('add-preference', views.add_preference),
        path('add-preference-user', views.add_preference_to_user),
        path('add-product-recommendation', views.add_product),
        path('add-recommendation', views.add_recommendation),
        path('get-presently-user/<str:token>', views.get_presently_user),
        path('get-recommendations/<int:user>', views.get_recommendations),
        path('get-carts/<int:user>', views.get_carts),
        path('get-user-relationships/<int:user>', views.get_user_relationships),
        path('get-all-preferences', views.get_all_available_preferences),
        path('get-user-preferences/<int:user>', views.get_user_preferences),
        ]
