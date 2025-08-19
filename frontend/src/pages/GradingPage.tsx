import * as React from 'react';
import {
  Box,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
  Stack,
  Divider,
  FormControl,
  Select,
  MenuItem,
  useMediaQuery,
  useTheme
} from '@mui/material';
import SchemaIcon from '@mui/icons-material/Schema';
import ResearchSection from '../components/ResearchSection';
import FlowchartSection from '../components/FlowchartSection';
import SimpleFlowchartSection from '../components/SimpleFlowchartSection';
import AnimationSection from '../components/AnimationSection';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

type ViewKey = 'simple' | 'animation' | 'accuracy';
type AccuracyViewKey = 'research' | 'flowchart';



const GradingPage: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [view, setView] = React.useState<ViewKey>('simple');
  const [accuracyView, setAccuracyView] = React.useState<AccuracyViewKey>('research');

  const handleViewChange = (_: React.MouseEvent<HTMLElement>, next: ViewKey | null) => {
    if (next) setView(next);
  };

  const handleAccuracyViewChange = (
    _: React.MouseEvent<HTMLElement>,
    next: AccuracyViewKey | null
  ) => {
    if (next) setAccuracyView(next);
  };

  return (
    <Box sx={{ 
      maxWidth: '1200px', 
      mx: 'auto',
      px: { xs: 2, sm: 3, md: 4 },
      py: { xs: 2, sm: 3 }
    }}>
        <Stack 
          direction={{ xs: 'column', md: 'row' }} 
          alignItems={{ xs: 'stretch', md: 'center' }} 
          justifyContent="space-between" 
          spacing={2}
        >
          <Stack direction="row" spacing={2} alignItems="center" sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}>
            <Box
              sx={{
                p: 1.5,
                borderRadius: 2,
                background: 'linear-gradient(45deg, #e94560, #f39c12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <SchemaIcon sx={{ fontSize: 32, color: 'white' }} />
            </Box>
            <Typography 
              variant="h4"
              component="h1"
              sx={{
                background: 'linear-gradient(45deg, #ffffff, #f39c12)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: 700,
                fontSize: { xs: '1.5rem', md: '2rem' },
                textAlign: { xs: 'center', md: 'left' }
              }}
            >
              How AI Grading Works
            </Typography>
          </Stack>

          {isMobile ? (
            <FormControl size="small" sx={{ minWidth: 200 }}>
              <Select
                value={view}
                onChange={(e) => setView(e.target.value as ViewKey)}
                IconComponent={ArrowDropDownIcon}
                sx={{
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgba(243, 156, 18, 0.3)',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgba(243, 156, 18, 0.5)',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#f39c12',
                  },
                  '& .MuiSelect-select': {
                    color: '#f39c12',
                    fontWeight: 600,
                  },
                  '& .MuiSelect-icon': {
                    color: '#f39c12',
                  },
                }}
                MenuProps={{
                  PaperProps: {
                    sx: {
                      background: 'linear-gradient(135deg, rgba(15, 15, 35, 0.95), rgba(26, 26, 46, 0.9))',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(243, 156, 18, 0.3)',
                      '& .MuiMenuItem-root': {
                        color: 'rgba(255, 255, 255, 0.8)',
                        '&:hover': {
                          backgroundColor: 'rgba(243, 156, 18, 0.1)',
                        },
                        '&.Mui-selected': {
                          backgroundColor: 'rgba(243, 156, 18, 0.2)',
                          color: '#f39c12',
                          '&:hover': {
                            backgroundColor: 'rgba(243, 156, 18, 0.3)',
                          },
                        },
                      },
                    },
                  },
                }}
              >
                <MenuItem value="simple">Simple Version</MenuItem>
                <MenuItem value="animation">Animation</MenuItem>
                <MenuItem value="accuracy">Increasing Accuracy</MenuItem>
              </Select>
            </FormControl>
          ) : (
            <ToggleButtonGroup
            exclusive
            size="small"
            value={view}
            onChange={handleViewChange}
            aria-label="grading view selector"
            sx={{
              '& .MuiToggleButton-root': {
                border: '1px solid rgba(243, 156, 18, 0.3)',
                color: 'rgba(255, 255, 255, 0.7)',
                fontWeight: 600,
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: 'rgba(243, 156, 18, 0.1)',
                  borderColor: 'rgba(243, 156, 18, 0.5)',
                },
                '&.Mui-selected': {
                  backgroundColor: 'rgba(243, 156, 18, 0.2)',
                  borderColor: '#f39c12',
                  color: '#f39c12',
                  '&:hover': {
                    backgroundColor: 'rgba(243, 156, 18, 0.3)',
                  },
                },
              },
            }}
          >
            <ToggleButton value="simple" aria-label="simple version">
              Simple version
            </ToggleButton>
            <ToggleButton value="animation" aria-label="animation">
              Animation
            </ToggleButton>
            <ToggleButton value="accuracy" aria-label="increasing accuracy">
              Increasing accuracy
            </ToggleButton>
            </ToggleButtonGroup>
          )}
        </Stack>

        <Divider sx={{ my: 2 }} />

        {view === 'simple' && <SimpleFlowchartSection />}

        {view === 'animation' && <AnimationSection />}

        {view === 'accuracy' && (
          <Stack sx={{ py: 2 }} spacing={2}>
            <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems={{ xs: 'stretch', sm: 'center' }} spacing={2}>
              <Typography 
                variant="h5"
                sx={{
                  background: 'linear-gradient(45deg, #e94560, #f39c12)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontWeight: 700,
                  textAlign: { xs: 'center', sm: 'left' },
                }}
              >
                Increasing Accuracy
              </Typography>
              
              {isMobile ? (
                <FormControl size="small" sx={{ minWidth: 150 }}>
                  <Select
                    value={accuracyView}
                    onChange={(e) => setAccuracyView(e.target.value as AccuracyViewKey)}
                    IconComponent={ArrowDropDownIcon}
                    sx={{
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'rgba(243, 156, 18, 0.3)',
                      },
                      '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'rgba(243, 156, 18, 0.5)',
                      },
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#f39c12',
                      },
                      '& .MuiSelect-select': {
                        color: '#f39c12',
                        fontWeight: 600,
                      },
                      '& .MuiSelect-icon': {
                        color: '#f39c12',
                      },
                    }}
                    MenuProps={{
                      PaperProps: {
                        sx: {
                          background: 'linear-gradient(135deg, rgba(15, 15, 35, 0.95), rgba(26, 26, 46, 0.9))',
                          backdropFilter: 'blur(20px)',
                          border: '1px solid rgba(243, 156, 18, 0.3)',
                          '& .MuiMenuItem-root': {
                            color: 'rgba(255, 255, 255, 0.8)',
                            '&:hover': {
                              backgroundColor: 'rgba(243, 156, 18, 0.1)',
                            },
                            '&.Mui-selected': {
                              backgroundColor: 'rgba(243, 156, 18, 0.2)',
                              color: '#f39c12',
                              '&:hover': {
                                backgroundColor: 'rgba(243, 156, 18, 0.3)',
                              },
                            },
                          },
                        },
                      },
                    }}
                  >
                    <MenuItem value="research">Research</MenuItem>
                    <MenuItem value="flowchart">Flowchart</MenuItem>
                  </Select>
                </FormControl>
              ) : (
                <ToggleButtonGroup
                  exclusive
                  size="small"
                  value={accuracyView}
                  onChange={handleAccuracyViewChange}
                  aria-label="accuracy view selector"
                  sx={{
                    '& .MuiToggleButton-root': {
                      border: '1px solid rgba(243, 156, 18, 0.3)',
                      color: 'rgba(255, 255, 255, 0.7)',
                      fontWeight: 600,
                      textTransform: 'none',
                      '&:hover': {
                        backgroundColor: 'rgba(243, 156, 18, 0.1)',
                        borderColor: 'rgba(243, 156, 18, 0.5)',
                      },
                      '&.Mui-selected': {
                        backgroundColor: 'rgba(243, 156, 18, 0.2)',
                        borderColor: '#f39c12',
                        color: '#f39c12',
                        '&:hover': {
                          backgroundColor: 'rgba(243, 156, 18, 0.3)',
                        },
                      },
                    },
                  }}
                >
                  <ToggleButton value="research" aria-label="research">
                    Research
                  </ToggleButton>
                  <ToggleButton value="flowchart" aria-label="flowchart">
                    Flowchart
                  </ToggleButton>
                </ToggleButtonGroup>
              )}
            </Stack>

            {accuracyView === 'research' && <ResearchSection />}

            {accuracyView === 'flowchart' && <FlowchartSection />}
          </Stack>
        )}
    </Box>
  );
};

export default GradingPage;