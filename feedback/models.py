# feedback/models.py
from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator

class FeedbackSubmission(models.Model):
    rating = models.IntegerField(
        validators=[MinValueValidator(1), MaxValueValidator(5)]
    )
    contact = models.CharField(max_length=200, blank=True, null=True)
    feedback_text = models.TextField(blank=True, null=True)
    wants_to_participate = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Feedback received on {self.created_at.strftime('%Y-%m-%d')} with rating {self.rating}/5"