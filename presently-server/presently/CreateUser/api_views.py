from rest_framework import viewsets
from . import models
from . import test_serializers


class PresentlyUserViewSet(viewsets.ModelViewSet):
    queryset = PresentlyUser.objects.all()
    serializer_class = test_serializeres.PresentlyUserSerializer
