"""
URL configuration for SERWebsite project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from SERApp import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('SERApp.urls')),
    #----------------Pages----------------
    path('',views.index, name='home'),
    path('home/',views.index, name='home'),
    path('team/',views.team, name='team'),
    path('sponsors/',views.sponsor, name='sponsor'),
    path('contact/',views.contact, name='contact'),
    path('join/',views.join, name='join'),
    path('privacy/',views.privacy, name='privacy'),
    path('terms/',views.terms, name='terms'),

]
