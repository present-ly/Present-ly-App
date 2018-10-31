from rest_framework import status, serializers
from . import models


class EtsyListingSerializer(serializers.ModelSerializer):

    # keyword = serializer.CharField(max_length='50')

    class Meta:
        model = models.EtsyListing
        fields = '__all__'


class TotalEtsyShowcaseSerializer(serializers.ListField):

    child = EtsyListingSerializer()

#     data = serializers.ListField(
#             child=EtsyListingSerializer()
#             )

