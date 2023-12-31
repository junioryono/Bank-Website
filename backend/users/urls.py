from django.urls import path
from . import views

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

urlpatterns = [
    path('token/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', views.RegisterView.as_view(), name='auth_register'),
    path('accounts/', views.AccountsView.as_view(), name='accounts'),
    path('account/create/', views.AccountCreateView.as_view(), name='account-create'),
    # path('acounts/<int:pk>', views.AccountView.as_view(), name='accounts'),
    path('test/', views.testEndPoint, name='test'),
    path('', views.getRoutes),
]
