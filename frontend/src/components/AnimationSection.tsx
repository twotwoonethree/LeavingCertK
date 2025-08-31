import * as React from 'react';
import {
  Box,
  Typography,
  Paper,
  Stack,
  Button,
  Chip,
} from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import ReplayIcon from '@mui/icons-material/Replay';

const AnimationSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [currentStep, setCurrentStep] = React.useState(0);

  const animationSteps = [
    'Start: Teacher grades first 5 papers',
    'Disassemble to JSON per question',
    'Multi-Agent Grading (LLM_A, B, C)',
    'Aggregate scores and confidence',
    'Decision: Auto-approve or LHR?',
    'Store results and audit log',
  ];

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    // TODO: Implement animation logic
  };

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentStep(0);
    // TODO: Reset animation
  };

  return (
    <Stack spacing={4} sx={{ py: 2 }}>
      {/* Header */}
      <Paper
        elevation={0}
        sx={{
          textAlign: 'center',
          p: { xs: 3, sm: 4 },
          background: 'linear-gradient(135deg, rgba(233, 69, 96, 0.05), rgba(243, 156, 18, 0.03))',
          border: '1px solid rgba(243, 156, 18, 0.2)',
          borderRadius: 3,
          backdropFilter: 'blur(10px)',
          boxShadow: '0 4px 20px rgba(233, 69, 96, 0.1)',
        }}
      >
        <Typography 
          variant="h5" 
          sx={{
            background: 'linear-gradient(45deg, #00acc1, #26c6da)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontWeight: 700,
            mb: 2,
          }}
        >
          AI Grading Pipeline Animation
        </Typography>
        <Typography 
          variant="h6" 
          sx={{ 
            color: 'rgba(255, 255, 255, 0.8)', 
            fontWeight: 400,
            mb: 3,
          }}
        >
          Interactive step-by-step walkthrough of the grading process
        </Typography>

        {/* Animation Controls */}
        <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
          <Button
            variant="outlined"
            startIcon={isPlaying ? <PauseCircleOutlineIcon /> : <PlayCircleOutlineIcon />}
            onClick={handlePlayPause}
            sx={{
              borderColor: '#26c6da',
              color: '#26c6da',
              '&:hover': {
                borderColor: '#00acc1',
                backgroundColor: 'rgba(243, 156, 18, 0.1)',
              },
            }}
          >
            {isPlaying ? 'Pause' : 'Play'} Animation
          </Button>
          <Button
            variant="outlined"
            startIcon={<ReplayIcon />}
            onClick={handleReset}
            sx={{
              borderColor: 'rgba(255, 255, 255, 0.3)',
              color: 'rgba(255, 255, 255, 0.8)',
              '&:hover': {
                borderColor: 'rgba(255, 255, 255, 0.5)',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
              },
            }}
          >
            Reset
          </Button>
        </Stack>
      </Paper>

      {/* Animation Canvas */}
      <Paper
        elevation={0}
        sx={{
          p: { xs: 3, sm: 4 },
          background: 'linear-gradient(135deg, rgba(15, 15, 35, 0.8), rgba(26, 26, 46, 0.6))',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: 3,
          backdropFilter: 'blur(10px)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
          minHeight: '400px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Placeholder Animation Area */}
        <Box
          sx={{
            width: '100%',
            maxWidth: '800px',
            height: '300px',
            border: '2px dashed rgba(243, 156, 18, 0.3)',
            borderRadius: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(243, 156, 18, 0.05)',
            mb: 3,
          }}
        >
          <PlayCircleOutlineIcon
            sx={{
              fontSize: 80,
              color: 'rgba(243, 156, 18, 0.5)',
              mb: 2,
            }}
          />
          <Typography
            variant="h6"
            sx={{
              color: 'rgba(255, 255, 255, 0.6)',
              textAlign: 'center',
              mb: 1,
            }}
          >
            Animation Canvas
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: 'rgba(255, 255, 255, 0.4)',
              textAlign: 'center',
            }}
          >
            Interactive flowchart animation will appear here
          </Typography>
        </Box>

        {/* Progress Indicator */}
        <Stack direction="row" spacing={1} flexWrap="wrap" justifyContent="center">
          {animationSteps.map((step, index) => (
            <Chip
              key={index}
              label={`${index + 1}. ${step}`}
              size="small"
              sx={{
                bgcolor: index === currentStep 
                  ? 'rgba(243, 156, 18, 0.2)' 
                  : index < currentStep 
                    ? 'rgba(76, 175, 80, 0.2)'
                    : 'rgba(255, 255, 255, 0.1)',
                borderColor: index === currentStep 
                  ? 'rgba(243, 156, 18, 0.5)' 
                  : index < currentStep 
                    ? 'rgba(76, 175, 80, 0.5)'
                    : 'rgba(255, 255, 255, 0.2)',
                color: index === currentStep 
                  ? '#26c6da' 
                  : index < currentStep 
                    ? '#4caf50'
                    : 'rgba(255, 255, 255, 0.6)',
                fontSize: '0.7rem',
                margin: '2px',
              }}
              variant="outlined"
            />
          ))}
        </Stack>
      </Paper>

      {/* Animation Details */}
      <Paper
        elevation={0}
        sx={{
          p: { xs: 3, sm: 4 },
          background: 'linear-gradient(135deg, rgba(15, 15, 35, 0.8), rgba(26, 26, 46, 0.6))',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: 3,
          backdropFilter: 'blur(10px)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: '#26c6da',
            fontWeight: 600,
            mb: 2,
            display: 'flex',
            alignItems: 'center',
            '&:before': {
              content: '""',
              width: 4,
              height: 20,
              background: 'linear-gradient(45deg, #00acc1, #26c6da)',
              borderRadius: 2,
              mr: 2,
            }
          }}
        >
          Coming Soon: Interactive Features
        </Typography>
        <Stack spacing={2}>
          <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
            🎬 <strong>Animated Flowchart:</strong> Watch the grading process unfold step by step with smooth transitions and visual effects
          </Typography>
          <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
            ⏯️ <strong>Playback Controls:</strong> Play, pause, and scrub through the animation at your own pace
          </Typography>
          <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
            📊 <strong>Real-time Data:</strong> See sample scores, confidence levels, and decision-making in action
          </Typography>
          <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
            🎯 <strong>Interactive Nodes:</strong> Click on components to see detailed explanations and examples
          </Typography>
          <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
            📝 <strong>Sample Papers:</strong> Follow actual exam responses through the entire grading pipeline
          </Typography>
        </Stack>
      </Paper>
    </Stack>
  );
};

export default AnimationSection;