from django.urls import path
from .views import *

urlpatterns = [
    path('companies', view_companies),
    path('companies/<int:company_id>/', detail_company),
    path('vacancies', view_vacancies),
    path('vacancies/<int:vacancy_id>/', detail_vacancies),
    path('companies/<int:company_id>/vacancies/', vacancies_by_company),
    path('vacancies/top_ten/', view_top_ten_vacancies)
]