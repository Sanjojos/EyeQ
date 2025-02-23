from rest_framework import serializers
from .models import patients
from .models import booking
class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model=patients
        fields='__all__'

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model=booking
        fields=['fname', 'Symptoms', 'address', 'emails', 'mobile', 'addinfo']
