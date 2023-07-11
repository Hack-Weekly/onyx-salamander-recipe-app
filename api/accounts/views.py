from django.shortcuts import render
from django.contrib.auth import authenticate, login
from django.http import JsonResponse
from rest_framework import generics
from django.contrib.auth.models import User
from .serializers import UserRegistrationSerializer
from django.views.decorators.csrf import csrf_exempt

class UserRegistrationView(generics.CreateAPIView):
    serializer_class = UserRegistrationSerializer

def index(request):
    return render(request, "accounts/index.html")

def login_view(request):

    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            return JsonResponse({'success': True})
        else:
            return JsonResponse({'success': False})
    return JsonResponse({'success': False, 'error': 'Invalid request method'})
    

@csrf_exempt
def register_view(request):
    
    print('this is registration')
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        email = request.POST.get('email')

        if not username or not password or not email:
            return JsonResponse({'success': False, 'error': 'Missing required fields'})

        # Check if the username is already taken
        if User.objects.filter(username=username).exists():
            return JsonResponse({'success': False, 'error': 'Username is already taken'})

        # Create a new user
        user = User.objects.create_user(username=username, password=password, email=email)

        login(request, user)

        return JsonResponse({'success': True})
    
    return JsonResponse({'success': False, 'error': 'Invalid request method'})