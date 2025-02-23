from django.shortcuts import render
from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.contrib.auth.hashers import check_password
from .models import patients 
from .serializers import PatientSerializer
from .serializers import BookSerializer

@api_view(['POST'])
def reg(request):
   
    serializer = PatientSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({'msg': 'Saved successfully'}, status=status.HTTP_201_CREATED)  
    return Response({'msg': 'Data not valid', 'errors': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
@api_view(['POST'])
def login(request):
    email = request.data.get('email')
    password = request.data.get('password')

    try:
        user = patients.objects.get(email=email)
        if check_password(password, user.password):  # For password hashing
            return Response({'msg': 'Login successful'}, status=status.HTTP_200_OK)
        else:
            return Response({'msg': 'Invalid password'}, status=status.HTTP_401_UNAUTHORIZED)
    except patients.DoesNotExist:
        return Response({'msg': 'User not found'}, status=status.HTTP_404_NOT_FOUND)

@api_view(['POST'])
def book(request):
   
    serializer = BookSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({'msg': 'Saved successfully'}, status=status.HTTP_201_CREATED)  
    return Response({'msg': 'Data not valid', 'errors': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)