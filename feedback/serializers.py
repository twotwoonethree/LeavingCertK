# feedback/serializers.py
from rest_framework import serializers
from .models import FeedbackSubmission

class FeedbackSubmissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = FeedbackSubmission
        fields = ['id', 'rating', 'contact', 'feedback_text', 'wants_to_participate', 'created_at']