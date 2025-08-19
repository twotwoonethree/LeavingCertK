import * as React from 'react';
import {
  Box,
  Paper,
  Typography,
  Stack,
  Chip,
} from '@mui/material';
import AnimatedArrowButton from './AnimatedArrowButton';

export const Node: React.FC<{
  title: string;
  subtitle?: string | React.ReactNode;
  variant?: 'start' | 'process' | 'decision' | 'end';
  size?: 'small' | 'medium' | 'large' | 'auto' | 'compact';
  centered?: boolean;
  stepNumber?: number;
}> = ({ title, subtitle, variant = 'process', size = 'medium', centered = false, stepNumber }) => {
  const radius =
    variant === 'start' ? '999px' : variant === 'end' ? '16px' : variant === 'decision' ? '8px' : '12px';

  const borderStyle = variant === 'decision' ? '2px dashed' : '2px solid';
  
  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return {
          minHeight: '80px',
          p: 1.5,
        };
      case 'large':
        return {
          minHeight: '140px',
          p: { xs: 2, sm: 3 },
          maxWidth: { xs: '98%', sm: '600px', md: '700px' },
        };
      case 'auto':
        return {
          minHeight: 'auto',
          p: { xs: 1.5, sm: 2 },
          width: 'fit-content',
          maxWidth: { xs: '90%', sm: '400px', md: '500px' },
          minWidth: '120px',
        };
      case 'compact':
        return {
          minHeight: 'auto',
          p: { xs: 1.5, sm: 2 },
          width: 'fit-content',
          maxWidth: { xs: '85%', sm: '300px', md: '350px' },
          minWidth: '100px',
        };
      default:
        return {
          minHeight: '120px',
          p: { xs: 2, sm: 2.5 },
          maxWidth: { xs: '95%', sm: 'none' },
        };
    }
  };
  
  const getVariantStyles = () => {
    switch (variant) {
      case 'start':
        return {
          borderColor: '#e94560',
          background: 'linear-gradient(135deg, rgba(233, 69, 96, 0.1), rgba(243, 156, 18, 0.05))',
          boxShadow: '0 4px 15px rgba(233, 69, 96, 0.2)',
        };
      case 'end':
        return {
          borderColor: '#4caf50',
          background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.1), rgba(76, 175, 80, 0.05))',
          boxShadow: '0 4px 15px rgba(76, 175, 80, 0.2)',
        };
      case 'decision':
        return {
          borderColor: 'rgba(243, 156, 18, 0.7)',
          background: 'linear-gradient(135deg, rgba(243, 156, 18, 0.05), rgba(233, 69, 96, 0.02))',
          boxShadow: '0 2px 10px rgba(243, 156, 18, 0.15)',
        };
      default:
        return {
          borderColor: 'rgba(255, 255, 255, 0.2)',
          background: 'linear-gradient(135deg, rgba(15, 15, 35, 0.8), rgba(26, 26, 46, 0.6))',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
        };
    }
  };

  const WrapperComponent = centered ? Box : React.Fragment;
  const wrapperProps = centered ? {
    sx: {
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
    }
  } : {};

  return (
    <WrapperComponent {...wrapperProps}>
      <Paper
        variant="outlined"
        sx={{
          borderRadius: radius,
          border: borderStyle,
          height: size === 'auto' ? 'auto' : '100%',
          position: 'relative',
          backdropFilter: 'blur(10px)',
          transition: 'all 0.3s ease',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)',
          },
          ...getVariantStyles(),
          ...getSizeStyles(),
        }}
      >
      {stepNumber && (
        <Box
          sx={{
            position: 'absolute',
            top: -8,
            right: -8,
            width: 28,
            height: 28,
            borderRadius: '50%',
            background: 'linear-gradient(45deg, #f39c12, #e94560)',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.8rem',
            fontWeight: 700,
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
            border: '2px solid rgba(255, 255, 255, 0.2)',
            zIndex: 10,
          }}
        >
          {stepNumber}
        </Box>
      )}
      <Typography 
        variant="subtitle1" 
        fontWeight={700}
        sx={{
          background: variant === 'start' 
            ? 'linear-gradient(45deg, #e94560, #f39c12)'
            : variant === 'end' 
              ? 'linear-gradient(45deg, #4caf50, #66bb6a)'
              : 'linear-gradient(45deg, #ffffff, #f39c12)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          mb: subtitle ? 1 : 0,
        }}
      >
        {title}
      </Typography>
      {subtitle ? (
        <Typography 
          variant="body2" 
          sx={{ 
            mt: 0.5, 
            whiteSpace: 'pre-line',
            color: 'rgba(255, 255, 255, 0.8)',
            lineHeight: 1.4,
            fontSize: { xs: '0.75rem', sm: '0.875rem' },
            wordBreak: 'break-word',
          }}
        >
          {subtitle}
        </Typography>
      ) : null}
      </Paper>
    </WrapperComponent>
  );
};

export const ArrowDown: React.FC<{ label?: string; variant?: 'default' | 'success' }> = ({ label, variant = 'default' }) => (
  <Stack alignItems="center" spacing={1} sx={{ my: 1.5 }}>
    {label ? (
      <Chip
        size="small"
        label={label}
        sx={{ 
          bgcolor: variant === 'success' ? 'rgba(76, 175, 80, 0.1)' : 'rgba(243, 156, 18, 0.1)', 
          borderColor: variant === 'success' ? 'rgba(76, 175, 80, 0.5)' : 'rgba(243, 156, 18, 0.5)',
          color: variant === 'success' ? '#4caf50' : '#f39c12',
          fontWeight: 600,
          fontSize: '0.75rem',
        }}
        variant="outlined"
      />
    ) : null}
    <AnimatedArrowButton
      size={48}
      direction="down"
      fill={variant === 'success' ? '#4caf50' : '#f39c12'}
      ringBase={variant === 'success' ? '#4caf50' : '#f39c12'}
      ringAccent={variant === 'success' ? '#66bb6a' : '#ffb74d'}
      ariaLabel={label || "Next step"}
    />
  </Stack>
);