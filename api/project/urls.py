from django.contrib import admin
from django.urls import path
from ..accounts import views
from .views import index

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', index),
    path('api/register/', views.UserRegistrationView.as_view(), name='user-registration'),
    path('api/login/', views.login_view, name='user-login')
]
