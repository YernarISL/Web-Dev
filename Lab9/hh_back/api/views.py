from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view

from api.models import Company, Vacancy
from api.serializers import CompanySerializer, VacancySerializer


@api_view(['GET'])
def view_companies(request):
    companies = Company.objects.all()
    serializer = CompanySerializer(companies, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def detail_company(request, company_id):
    try:
        company = Company.objects.get(id=company_id)
        serializer = CompanySerializer(company)
        return Response(serializer.data)
    except Company.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

@api_view(['GET'])
def vacancies_by_company(request, company_id):
    try:
        vacancies = Vacancy.objects.filter(company_id=company_id)
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)
    except Vacancy.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

@api_view(['GET'])
def view_vacancies(request):
    vacancies = Vacancy.objects.all()
    serializer = VacancySerializer(vacancies, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def detail_vacancies(request, vacancy_id):
    try:
        vacancy = Vacancy.objects.get(id=vacancy_id)
        serializer = VacancySerializer(vacancy)
        return Response(serializer.data)
    except Vacancy.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

@api_view(['GET'])
def view_top_ten_vacancies(request):
    top_ten_vacancies = Vacancy.objects.order_by('salary')
    serializer = VacancySerializer(top_ten_vacancies, many=True)
    return Response(serializer.data)

