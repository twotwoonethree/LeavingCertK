# feedback/views.py
from rest_framework import generics
from .models import FeedbackSubmission
from .serializers import FeedbackSubmissionSerializer

class FeedbackSubmissionCreateView(generics.CreateAPIView):
    queryset = FeedbackSubmission.objects.all()
    serializer_class = FeedbackSubmissionSerializer