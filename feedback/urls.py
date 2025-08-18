# feedback/urls.py
from django.urls import path
from .views import FeedbackSubmissionCreateView

urlpatterns = [
    path('feedback/', FeedbackSubmissionCreateView.as_view(), name='feedback-submit'),
]