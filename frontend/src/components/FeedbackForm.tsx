// src/components/FeedbackForm.tsx
import React, { useState } from 'react';
import type { FormEvent, FC } from 'react';
import axios from 'axios';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Rating,
  TextField,
  Typography,
  Alert,
  IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// Define a type for the submission status for better type safety
type SubmitStatus = 'success' | 'error' | null;

// Define the shape of our form data for the API call
interface IFormData {
    rating: number;
    contact: string;
    feedback_text: string;
    wants_to_participate: boolean;
}

interface FeedbackFormProps {
  onClose?: () => void;
}

const FeedbackForm: FC<FeedbackFormProps> = ({ onClose }) => {
  // State with explicit types
  const [rating, setRating] = useState<number | null>(null);
  const [contact, setContact] = useState<string>('');
  const [feedbackText, setFeedbackText] = useState<string>('');
  const [wantsToParticipate, setWantsToParticipate] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!rating) { // Rating is required
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData: IFormData = {
      rating: rating,
      contact: contact,
      feedback_text: feedbackText,
      wants_to_participate: wantsToParticipate,
    };

    try {
      // The URL for our Django API endpoint
      await axios.post('http://127.0.0.1:8000/api/feedback/', formData);
      setSubmitStatus('success');
      // Reset form
      setRating(null);
      setContact('');
      setFeedbackText('');
      setWantsToParticipate(false);
    } catch (error) {
      console.error('There was an error submitting the form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // A simple component to show after successful submission
  if (submitStatus === 'success') {
      return (
        <Box sx={{ p: 4, textAlign: 'center', position: 'relative' }}>
          {onClose && (
            <IconButton 
              onClick={onClose} 
              sx={{ 
                position: 'absolute',
                top: 8,
                right: 8,
                color: 'rgba(255, 255, 255, 0.7)' 
              }}
            >
              <CloseIcon />
            </IconButton>
          )}
          <Box
            sx={{
              mb: 3,
              p: 2,
              borderRadius: '50%',
              background: 'linear-gradient(45deg, #4caf50, #66bb6a)',
              width: 60,
              height: 60,
              mx: 'auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <CheckCircleIcon sx={{ fontSize: 32, color: 'white' }} />
          </Box>
          <Typography 
            variant="h5" 
            gutterBottom
            sx={{
              background: 'linear-gradient(45deg, #4caf50, #66bb6a)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontWeight: 700,
            }}
          >
            Thank You!
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 3 }}>
            Your feedback has been received and helps us improve.
          </Typography>
          {onClose && (
            <Button 
              variant="outlined" 
              onClick={onClose}
              sx={{
                borderColor: 'rgba(76, 175, 80, 0.5)',
                color: '#4caf50',
                '&:hover': {
                  borderColor: '#4caf50',
                  backgroundColor: 'rgba(76, 175, 80, 0.1)',
                }
              }}
            >
              Close
            </Button>
          )}
        </Box>
      );
  }

  return (
    <Box sx={{ p: 4, position: 'relative' }}>
      {onClose && (
        <IconButton 
          onClick={onClose} 
          sx={{ 
            position: 'absolute',
            top: 16,
            right: 16,
            color: 'rgba(255, 255, 255, 0.7)',
            zIndex: 1
          }}
        >
          <CloseIcon />
        </IconButton>
      )}
      
      <Box sx={{ mb: 3, textAlign: 'center' }}>
        <Typography 
          variant="h5" 
          component="h1" 
          gutterBottom
          sx={{
            background: 'linear-gradient(45deg, #00acc1, #26c6da)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontWeight: 700,
          }}
        >
          Share Your Feedback
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Help us improve AI grading for the Leaving Cert
        </Typography>
      </Box>

        <Box component="form" onSubmit={handleSubmit} noValidate>
          <Box sx={{ mb: 3 }}>
            <Typography component="legend" sx={{ mb: 1, fontWeight: 600 }}>
              How do you rate this idea? <span style={{ color: '#f44336' }}>*</span>
            </Typography>
            <Rating
              name="rating"
              value={rating}
              onChange={(_event, newValue) => {
                setRating(newValue);
              }}
              size="large"
              sx={{ 
                mb: 2,
                '& .MuiRating-iconFilled': {
                  color: '#26c6da',
                },
                '& .MuiRating-iconHover': {
                  color: '#26c6da',
                }
              }}
            />
          </Box>

          <TextField
            label="Contact Info (Email, Phone, LinkedIn)"
            fullWidth
            margin="normal"
            value={contact}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setContact(e.target.value)}
            sx={{
              '& .MuiOutlinedInput-root': {
                '&:hover fieldset': {
                  borderColor: 'rgba(243, 156, 18, 0.5)',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#26c6da',
                },
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#26c6da',
              },
            }}
          />

          <TextField
            label="Any other feedback or suggestions?"
            fullWidth
            multiline
            rows={4}
            margin="normal"
            value={feedbackText}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFeedbackText(e.target.value)}
            sx={{
              '& .MuiOutlinedInput-root': {
                '&:hover fieldset': {
                  borderColor: 'rgba(243, 156, 18, 0.5)',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#26c6da',
                },
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#26c6da',
              },
            }}
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={wantsToParticipate}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setWantsToParticipate(e.target.checked)}
                name="wantsToParticipate"
                sx={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  '&.Mui-checked': {
                    color: '#26c6da',
                  },
                }}
              />
            }
            label="Would you be interested in participating in user testing?"
            sx={{ mt: 2 }}
          />

          <Box sx={{ mt: 4, position: 'relative' }}>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              disabled={isSubmitting || !rating}
              size="large"
              sx={{
                background: 'linear-gradient(45deg, #00acc1, #26c6da)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #f16a8c, #f7dc6f)',
                },
                '&:disabled': {
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: 'rgba(255, 255, 255, 0.3)',
                },
                py: 1.5,
                fontWeight: 600,
              }}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
            </Button>
            {submitStatus === 'error' && (
              <Alert 
                severity="error" 
                sx={{ 
                  mt: 2,
                  backgroundColor: 'rgba(244, 67, 54, 0.1)',
                  border: '1px solid rgba(244, 67, 54, 0.3)',
                  color: '#f44336'
                }}
              >
                Please provide a rating and try again.
              </Alert>
            )}
          </Box>
        </Box>
    </Box>
  );
};

export default FeedbackForm;