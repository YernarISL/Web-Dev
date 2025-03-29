from django.urls import path
from .views import list_products, list_categories, detail_product, detail_category, product_by_category

urlpatterns = [
    path('products', list_products),
    path('categories', list_categories),
    path('products/<int:product_id>/', detail_product),
    path('categories/<int:category_id>/', detail_category),
    path('categories/<int:category_id>/products/', product_by_category)
]