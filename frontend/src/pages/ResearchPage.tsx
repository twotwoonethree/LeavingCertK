import { Container, Typography, Box, Paper, List, ListItem, ListItemText, Link, Divider, Chip, Card, CardContent, Grid, GlobalStyles } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import GroupIcon from '@mui/icons-material/Group';
import SchoolIcon from '@mui/icons-material/School';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PsychologyIcon from '@mui/icons-material/Psychology';
import TimelineIcon from '@mui/icons-material/Timeline';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import BalanceIcon from '@mui/icons-material/Balance';
import type { Theme, SxProps } from '@mui/material/styles';

const keyframes = `
  @keyframes floating {
    0% { transform: translateY(0px); }
    50% { transform: translateY(10px); }
    100% { transform: translateY(0px); }
  }
  @keyframes sweepY {
    0% { transform: translateY(-25%); opacity: .85; }
    50% { transform: translateY(25%); opacity: 1; }
    100% { transform: translateY(-25%); opacity: .85; }
  }
`;

// deterministic "random" function
const r = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

const orbVars = (seed: number): SxProps<Theme> => {
  const aSize = Math.round(80 + r(seed + 1) * 60); // 80-140px
  const bSize = Math.round(50 + r(seed + 2) * 60);  // 50-110px
  const aLeftPct = Math.round(8 + r(seed + 3) * 74); // 8%-82%
  const aTopPct = Math.round(-12 + r(seed + 4) * 32); // -12%-20%
  const bLeftPct = Math.round(4 + r(seed + 5) * 84); // 4%-88%
  const bBottomPct = Math.round(r(seed + 6) * 28); // 0%-28%
  const aDelay = Math.round(-1200 + r(seed + 7) * 2400);
  const bDelay = Math.round(-1800 + r(seed + 8) * 2400);

  // CSS vars consumed by ::before/::after in theme overrides
  return {
    ['--orbA-size' as any]: `${aSize}px`,
    ['--orbA-left' as any]: `${aLeftPct}%`,
    ['--orbA-top' as any]: `${aTopPct}%`,
    ['--orbA-delay' as any]: `${aDelay}ms`,
    ['--orbB-size' as any]: `${bSize}px`,
    ['--orbB-left' as any]: `${bLeftPct}%`,
    ['--orbB-bottom' as any]: `${bBottomPct}%`,
    ['--orbB-delay' as any]: `${bDelay}ms`,
  };
};

const ResearchPage: React.FC = () => {
  return (
    <>
      <GlobalStyles styles={keyframes} />
      <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
      {/* Hero Section */}
      <Box sx={{ 
        background: 'linear-gradient(135deg, rgba(15, 15, 35, 0.95) 0%, rgba(26, 26, 46, 0.9) 100%)',
        py: { xs: 6, md: 10 },
        textAlign: 'center'
      }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h2" 
            component="h1" 
            gutterBottom 
            sx={{ 
              fontWeight: 800,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
              background: 'linear-gradient(45deg, #ffffff, #f39c12, #e94560)',
              backgroundSize: '300% 300%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              mb: 2
            }}
          >
            AI-Enhanced Leaving Cert Grading
          </Typography>
          <Typography 
            variant="h4" 
            sx={{ 
              color: 'text.secondary', 
              mb: 3,
              fontWeight: 300,
              fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' }
            }}
          >
            Faster, Fairer, and Fully Vetted
          </Typography>
          
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: { xs: 1, md: 2 }, flexWrap: 'wrap' }}>
            <Chip 
              icon={<SpeedIcon sx={{ fontSize: { xs: 16, md: 20 } }} />} 
              label="95% Faster Results" 
              sx={{ 
                background: 'linear-gradient(45deg, #e94560, #f39c12)', 
                color: 'white',
                fontSize: { xs: '0.75rem', md: '0.875rem' }
              }} 
            />
            <Chip 
              icon={<SecurityIcon sx={{ fontSize: { xs: 16, md: 20 } }} />} 
              label="Human-Supervised" 
              sx={{ 
                background: 'linear-gradient(45deg, #f39c12, #e94560)', 
                color: 'white',
                fontSize: { xs: '0.75rem', md: '0.875rem' }
              }} 
            />
            <Chip 
              icon={<BalanceIcon sx={{ fontSize: { xs: 16, md: 20 } }} />} 
              label="Fairness Guaranteed" 
              sx={{ 
                background: 'linear-gradient(45deg, #e94560, #f39c12)', 
                color: 'white',
                fontSize: { xs: '0.75rem', md: '0.875rem' }
              }} 
            />
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 3, md: 6 } }}>
        {/* The Challenge Section */}
        <Box sx={{ mb: { xs: 6, md: 8 } }}>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 3, textAlign: 'center', fontSize: { xs: '1.8rem', md: '2.5rem' } }}>
            The Challenge
          </Typography>
          
          <Grid container spacing={3} alignItems="stretch">
            {/* Text Content */}
            <Grid size={{ xs: 12, md: 9 }}>
              <Box sx={{ 
                height: { md: '100%' }, 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between',
                py: { md: 1 }
              }}>
                <Typography variant="body1" paragraph sx={{ fontSize: { xs: '0.95rem', md: '1.1rem' }, lineHeight: 1.7, mb: 3 }}>
                  Ireland's Leaving Certificate is under immense strain. In 2024 roughly <strong>136,000 students</strong> sat the Leaving and Junior Cert exams, requiring the secure distribution and marking of about <strong>4 million exam papers</strong><Chip component="sup" label="1" size="small" sx={{ ml: 0.5, fontSize: '0.6rem' }} />.
                </Typography>
                
                <Typography variant="body1" paragraph sx={{ fontSize: { xs: '0.95rem', md: '1.1rem' }, lineHeight: 1.7, mb: 3 }}>
                  Yet the pool of examiners has not kept pace: in 2022 fewer than <strong>3,000 teachers</strong> marked the work of ~130,000 candidates<Chip component="sup" label="2" size="small" sx={{ ml: 0.5, fontSize: '0.6rem' }} /> down from 4,000 just years earlier.
                </Typography>
                
                <Typography variant="body1" paragraph sx={{ fontSize: { xs: '0.95rem', md: '1.1rem' }, lineHeight: 1.7, mb: 3 }}>
                  This examiner shortage, combined with extra quality checks, has forced the State Examinations Commission (SEC) to delay results. For three years in a row (2020-2022), LC results came out in <strong>September instead of mid-August</strong>, putting "huge strain" on students and universities<Chip component="sup" label="3" size="small" sx={{ ml: 0.5, fontSize: '0.6rem' }} /> <Chip component="sup" label="4" size="small" sx={{ ml: 0.5, fontSize: '0.6rem' }} />.
                </Typography>
                
                <Typography variant="body1" sx={{ fontSize: { xs: '0.9rem', md: '1rem' }, lineHeight: 1.6, color: 'text.secondary' }}>
                  These systemic pressures demand innovative solutions that maintain academic integrity while dramatically improving operational efficiency.
                </Typography>
              </Box>
            </Grid>
            
            {/* Stats Cards */}
            <Grid size={{ xs: 12, md: 3 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, height: { md: '100%' }, justifyContent: 'space-evenly' }}>
                <Card className="simple-card" sx={{ 
                  background: 'rgba(233, 69, 96, 0.1)', 
                  border: '1px solid rgba(233, 69, 96, 0.2)',
                  minHeight: { md: '180px' },
                  ...orbVars(501)
                }}>
                  <CardContent className="simple-content" sx={{ 
                    py: 3, 
                    px: 2,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    textAlign: 'center'
                  }}>
                    <TrendingUpIcon sx={{ fontSize: { xs: 32, md: 40 }, color: '#e94560', alignSelf: 'center', mb: 2 }} />
                    <Typography variant="h3" sx={{ fontWeight: 700, color: '#e94560', fontSize: { xs: '2rem', md: '2.5rem' }, mb: 2 }}>+12%</Typography>
                    <Box>
                      <Typography variant="body1" color="text.secondary" sx={{ fontSize: { xs: '0.9rem', md: '1rem' }, fontWeight: 500, mb: 1 }}>Student Numbers Increase</Typography>
                      <Typography variant="body2" sx={{ fontSize: { xs: '0.8rem', md: '0.85rem' }, color: 'text.secondary' }}>Over the last decade</Typography>
                    </Box>
                  </CardContent>
                </Card>
                
                <Card className="simple-card" sx={{ 
                  background: 'rgba(243, 156, 18, 0.1)', 
                  border: '1px solid rgba(243, 156, 18, 0.2)',
                  minHeight: { md: '180px' },
                  ...orbVars(502)
                }}>
                  <CardContent className="simple-content" sx={{ 
                    py: 3, 
                    px: 2,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    textAlign: 'center'
                  }}>
                    <TrendingDownIcon sx={{ fontSize: { xs: 32, md: 40 }, color: '#f39c12', alignSelf: 'center', mb: 2 }} />
                    <Typography variant="h3" sx={{ fontWeight: 700, color: '#f39c12', fontSize: { xs: '2rem', md: '2.5rem' }, mb: 2 }}>-19%</Typography>
                    <Box>
                      <Typography variant="body1" color="text.secondary" sx={{ fontSize: { xs: '0.9rem', md: '1rem' }, fontWeight: 500, mb: 1 }}>Examiner Numbers Decrease</Typography>
                      <Typography variant="body2" sx={{ fontSize: { xs: '0.8rem', md: '0.85rem' }, color: 'text.secondary' }}>Same period</Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ my: { xs: 4, md: 6 }, background: 'linear-gradient(90deg, transparent, rgba(243, 156, 18, 0.5), transparent)' }} />

        {/* Our Solution Section */}
        <Box sx={{ mb: { xs: 6, md: 8 } }}>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 3, textAlign: 'center', fontSize: { xs: '1.8rem', md: '2.5rem' } }}>
            Our Solution
          </Typography>
          
          <Grid container spacing={3} alignItems="stretch">
            {/* Text Content */}
            <Grid size={{ xs: 12, md: 7 }}>
              <Box sx={{ 
                height: { md: '100%' }, 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center',
                py: { md: 2 }
              }}>
                <Typography variant="body1" paragraph sx={{ 
                  fontSize: { xs: '0.95rem', md: '1.1rem' }, 
                  lineHeight: 1.6, 
                  mb: { xs: 3, md: 2 }
                }}>
                  We propose a hybrid <strong>AI-assisted grading system</strong> that addresses these pain points without sacrificing fairness. Recognizing these challenges, the SEC has already offered a €100,000 research contract to study how generative AI could assist in correcting papers<Chip component="sup" label="13" size="small" sx={{ ml: 0.5, fontSize: '0.6rem' }} />. Our project aligns with this goal.
                </Typography>
                
                <Typography variant="body1" sx={{ 
                  fontSize: { xs: '0.9rem', md: '1rem' }, 
                  lineHeight: 1.6, 
                  color: 'text.secondary'
                }}>
                  Our system maintains the highest standards of academic integrity while dramatically improving efficiency. Every AI decision is transparent, auditable, and subject to human oversight.
                </Typography>
              </Box>
            </Grid>
            
            {/* Key Principle Card */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Card className="simple-card" sx={{ 
                background: 'rgba(243, 156, 18, 0.1)', 
                border: '1px solid rgba(243, 156, 18, 0.2)',
                height: { md: '100%' },
                ...orbVars(503)
              }}>
                <CardContent className="simple-content" sx={{ 
                  textAlign: 'center',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}>
                  <VerifiedUserIcon sx={{ fontSize: { xs: 28, md: 36 }, color: '#f39c12', mb: 2 }} />
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, fontSize: { xs: '1rem', md: '1.2rem' } }}>
                    Key Principle: Humans Always in Control
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: { xs: '0.85rem', md: '0.95rem' }, lineHeight: 1.5 }}>
                    This is <strong>not a blind hand-off to machines</strong>. At every step, humans remain in control. Our multi-agent AI pipeline speeds up routine scoring while built-in confidence checks ensure any uncertainty is reviewed by a teacher.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* Multi-Agent AI Grading Pipeline */}
        <Box sx={{ mb: { xs: 6, md: 8 } }}>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 3, textAlign: 'center', fontSize: { xs: '1.8rem', md: '2.5rem' } }}>
            Multi-Agent AI Grading Pipeline
          </Typography>
          
          <Typography variant="body1" paragraph sx={{ fontSize: { xs: '0.95rem', md: '1.1rem' }, lineHeight: 1.6, mb: 4, textAlign: 'center' }}>
            Our approach is best explained as a step-by-step collaboration between teachers and AI "agents":
          </Typography>
          
          {/* Step 1 & 2 - Two Column Layout */}
          <Grid container spacing={3} sx={{ mb: 4 }}>
            {/* Step 1 */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                <Box sx={{ 
                  minWidth: { xs: 28, md: 36 }, 
                  height: { xs: 28, md: 36 }, 
                  borderRadius: '50%', 
                  background: 'linear-gradient(45deg, #f39c12, #e94560)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  mr: 2,
                  mt: 0.5,
                  flexShrink: 0
                }}>
                  <Typography variant="body2" sx={{ color: 'white', fontWeight: 700, fontSize: { xs: '0.8rem', md: '1rem' } }}>1</Typography>
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, display: 'flex', alignItems: 'center', fontSize: { xs: '1rem', md: '1.2rem' } }}>
                    <AssignmentTurnedInIcon sx={{ mr: 1, color: '#f39c12', fontSize: { xs: 18, md: 22 } }} />
                    Teacher Calibration
                  </Typography>
                  <Typography color="text.secondary" sx={{ fontSize: { xs: '0.85rem', md: '0.95rem' }, lineHeight: 1.5 }}>
                    A qualified examiner first grades a small number of papers (e.g., the first 5 scripts) for each question. This provides the official rubric, marking criteria, answer key, and graded examples.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            
            {/* Step 2 */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                <Box sx={{ 
                  minWidth: { xs: 28, md: 36 }, 
                  height: { xs: 28, md: 36 }, 
                  borderRadius: '50%', 
                  background: 'linear-gradient(45deg, #e94560, #f39c12)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  mr: 2,
                  mt: 0.5,
                  flexShrink: 0
                }}>
                  <Typography variant="body2" sx={{ color: 'white', fontWeight: 700, fontSize: { xs: '0.8rem', md: '1rem' } }}>2</Typography>
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, display: 'flex', alignItems: 'center', fontSize: { xs: '1rem', md: '1.2rem' } }}>
                    <VisibilityIcon sx={{ mr: 1, color: '#e94560', fontSize: { xs: 18, md: 22 } }} />
                    High-Quality OCR Processing
                  </Typography>
                  <Typography color="text.secondary" sx={{ fontSize: { xs: '0.85rem', md: '0.95rem' }, lineHeight: 1.5 }}>
                    Each paper is scanned with handwriting recognition. Any handwriting below 90-95% confidence is immediately flagged for Later Human Review (LHR).
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
          
          {/* Step 3 - AI Panel with Cards - 4 Column Layout */}
          <Grid container spacing={3} sx={{ mb: 4 }}>
            {/* Step 3 Description Column */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Box sx={{ 
                height: { md: '100%' }, 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center'
              }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: { xs: 2, md: 3 } }}>
                  <Box sx={{ 
                    minWidth: { xs: 28, md: 36 }, 
                    height: { xs: 28, md: 36 }, 
                    borderRadius: '50%', 
                    background: 'linear-gradient(45deg, #f39c12, #e94560)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    mr: 2,
                    mt: 0.5,
                    flexShrink: 0
                  }}>
                    <Typography variant="body2" sx={{ color: 'white', fontWeight: 700, fontSize: { xs: '0.8rem', md: '1rem' } }}>3</Typography>
                  </Box>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, display: 'flex', alignItems: 'center', fontSize: { xs: '1rem', md: '1.2rem' } }}>
                      <PsychologyIcon sx={{ mr: 1, color: '#f39c12', fontSize: { xs: 18, md: 22 } }} />
                      Three AI Graders Panel
                    </Typography>
                  </Box>
                </Box>
                <Typography color="text.secondary" sx={{ fontSize: { xs: '0.85rem', md: '0.95rem' }, lineHeight: 1.6, ml: { xs: 0, md: 6 } }}>
                  Three different AI agents score each answer from different angles - like a mini panel of markers working together. Each agent brings a unique perspective to ensure comprehensive evaluation.
                </Typography>
              </Box>
            </Grid>
            
            {/* AI Agent Cards - 3 Columns */}
            <Grid size={{ xs: 12, md: 8 }}>
              <Grid container spacing={2} sx={{ height: { md: '100%' } }}>
                <Grid size={{ xs: 12, sm: 4 }}>
                  <Card className="simple-card" sx={{ 
                    background: 'rgba(255, 255, 255, 0.03)', 
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    height: { md: '100%' },
                    ...orbVars(511)
                  }}>
                    <CardContent className="simple-content" sx={{ 
                      textAlign: 'center', 
                      py: 2,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center'
                    }}>
                      <Typography variant="h6" sx={{ fontWeight: 600, color: '#f39c12', mb: 1, fontSize: { xs: '0.95rem', md: '1.1rem' } }}>Agent A</Typography>
                      <Typography variant="subtitle1" sx={{ mb: 1.5, fontSize: { xs: '0.85rem', md: '0.95rem' }, fontWeight: 500 }}>Rubric Checker</Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: '0.8rem', md: '0.85rem' }, lineHeight: 1.4 }}>Evaluates if answer covers all required points according to marking scheme.</Typography>
                    </CardContent>
                  </Card>
                </Grid>
                
                <Grid size={{ xs: 12, sm: 4 }}>
                  <Card className="simple-card" sx={{ 
                    background: 'rgba(255, 255, 255, 0.03)', 
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    height: { md: '100%' },
                    ...orbVars(512)
                  }}>
                    <CardContent className="simple-content" sx={{ 
                      textAlign: 'center', 
                      py: 2,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center'
                    }}>
                      <Typography variant="h6" sx={{ fontWeight: 600, color: '#e94560', mb: 1, fontSize: { xs: '0.95rem', md: '1.1rem' } }}>Agent B</Typography>
                      <Typography variant="subtitle1" sx={{ mb: 1.5, fontSize: { xs: '0.85rem', md: '0.95rem' }, fontWeight: 500 }}>Answer-Key Comparator</Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: '0.8rem', md: '0.85rem' }, lineHeight: 1.4 }}>Compares student response to official solution and model answers.</Typography>
                    </CardContent>
                  </Card>
                </Grid>
                
                <Grid size={{ xs: 12, sm: 4 }}>
                  <Card className="simple-card" sx={{ 
                    background: 'rgba(255, 255, 255, 0.03)', 
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    height: { md: '100%' },
                    ...orbVars(513)
                  }}>
                    <CardContent className="simple-content" sx={{ 
                      textAlign: 'center', 
                      py: 2,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center'
                    }}>
                      <Typography variant="h6" sx={{ fontWeight: 600, color: '#f39c12', mb: 1, fontSize: { xs: '0.95rem', md: '1.1rem' } }}>Agent C</Typography>
                      <Typography variant="subtitle1" sx={{ mb: 1.5, fontSize: { xs: '0.85rem', md: '0.95rem' }, fontWeight: 500 }}>Example-Based Grader</Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: '0.8rem', md: '0.85rem' }, lineHeight: 1.4 }}>Learns from teacher examples and applies grading patterns.</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          
          {/* Step 4 - Confidence Check */}
          <Grid container spacing={3}>
            {/* Step 4 Description */}
            <Grid size={{ xs: 12, md: 7 }}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                <Box sx={{ 
                  minWidth: { xs: 28, md: 36 }, 
                  height: { xs: 28, md: 36 }, 
                  borderRadius: '50%', 
                  background: 'linear-gradient(45deg, #e94560, #f39c12)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  mr: 2,
                  mt: 0.5,
                  flexShrink: 0
                }}>
                  <Typography variant="body2" sx={{ color: 'white', fontWeight: 700, fontSize: { xs: '0.8rem', md: '1rem' } }}>4</Typography>
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, display: 'flex', alignItems: 'center', fontSize: { xs: '1rem', md: '1.2rem' } }}>
                    <TimelineIcon sx={{ mr: 1, color: '#e94560', fontSize: { xs: 18, md: 22 } }} />
                    Score Aggregation & Confidence Check
                  </Typography>
                  <Typography color="text.secondary" paragraph sx={{ fontSize: { xs: '0.85rem', md: '0.95rem' }, lineHeight: 1.5, mb: 2 }}>
                    We combine the three AI scores and their confidence levels:
                  </Typography>
                  <Paper sx={{ p: 1.5, fontFamily: 'monospace', background: 'rgba(0,0,0,0.3)', fontSize: { xs: '0.7rem', md: '0.8rem' } }}>
                    <code>
                      points_final = round((points_A + points_B + points_C)/3)<br/>
                      prob_final = (prob_A + prob_B + prob_C)/3
                    </code>
                  </Paper>
                </Box>
              </Box>
            </Grid>
            
            {/* Confidence Check Highlight */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Card className="simple-card" sx={{ 
                background: 'rgba(233, 69, 96, 0.1)', 
                border: '1px solid rgba(233, 69, 96, 0.2)',
                height: { md: '100%' },
                ...orbVars(514)
              }}>
                <CardContent className="simple-content" sx={{ 
                  textAlign: 'center',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Typography sx={{ fontWeight: 600, fontSize: { xs: '0.9rem', md: '1rem' }, lineHeight: 1.4 }}>
                    ⚡ Critical: We only accept the AI's grade if confidence ≥ 95%. Below this threshold = Later Human Review (LHR).
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ my: { xs: 4, md: 6 }, background: 'linear-gradient(90deg, transparent, rgba(243, 156, 18, 0.5), transparent)' }} />

        {/* Benefits Section */}
        <Box sx={{ mb: { xs: 6, md: 8 } }}>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 3, textAlign: 'center', fontSize: { xs: '1.8rem', md: '2.5rem' } }}>
            Benefits for Students and Teachers
          </Typography>
          
          <Grid container spacing={2}>
            {[
              {
                icon: <SpeedIcon sx={{ fontSize: { xs: 20, md: 28 }, color: '#e94560' }} />,
                title: "Faster Results = Less Anxiety",
                description: "AI handling thousands of answers in seconds can restore the traditional August result date."
              },
              {
                icon: <GroupIcon sx={{ fontSize: { xs: 20, md: 28 }, color: '#f39c12' }} />,
                title: "Relieved Teacher Workload", 
                description: "Teachers grade exemplar scripts and oversee AI's work. This lighter load could attract more teachers."
              },
              {
                icon: <BalanceIcon sx={{ fontSize: { xs: 20, md: 28 }, color: '#e94560' }} />,
                title: "Unwavering Consistency",
                description: "AI applies rules uniformly. A student's mark won't depend on which examiner they get."
              },
              {
                icon: <TimelineIcon sx={{ fontSize: { xs: 20, md: 28 }, color: '#f39c12' }} />,
                title: "Data-Driven Feedback",
                description: "AI provides summaries of where marks were gained or lost, plus anonymized data."
              }
            ].map((benefit, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <Card className="simple-card" sx={{ 
                  background: 'rgba(255, 255, 255, 0.03)', 
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  height: '100%',
                  ...orbVars(521 + index)
                }}>
                  <CardContent className="simple-content" sx={{ textAlign: 'center', p: 2 }}>
                    <Box sx={{ mb: 1 }}>{benefit.icon}</Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>{benefit.title}</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: '0.8rem', md: '0.85rem' }, lineHeight: 1.4 }}>{benefit.description}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Human Control Section */}
        <Box sx={{ mb: { xs: 6, md: 8 } }}>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 3, textAlign: 'center', fontSize: { xs: '1.8rem', md: '2.5rem' } }}>
            Why Humans Remain In Charge
          </Typography>
          
          <Typography variant="body1" paragraph sx={{ fontSize: { xs: '0.95rem', md: '1.1rem' }, lineHeight: 1.6, mb: 3, textAlign: 'center' }}>
            Our system's design philosophy: <strong>AI is the assistant, humans are the referees.</strong>
          </Typography>
          
          <Grid container spacing={2}>
            {[
              {
                icon: <SecurityIcon sx={{ color: '#e94560', fontSize: { xs: 20, md: 24 } }} />,
                title: "No blind reliance on AI",
                description: "95% confidence threshold ensures AI only grades when virtually certain. Uncertain answers always pass to humans."
              },
              {
                icon: <AssignmentTurnedInIcon sx={{ color: '#f39c12', fontSize: { xs: 20, md: 24 } }} />,
                title: "Maintaining marking criteria integrity",
                description: "AI follows established rubrics and teacher examples. It doesn't conjure new marking rules."
              },
              {
                icon: <VisibilityIcon sx={{ color: '#e94560', fontSize: { xs: 20, md: 24 } }} />,
                title: "Transparency and audit trail",
                description: "Clear record showing which questions were AI vs human graded, providing accountability for appeals."
              },
              {
                icon: <SchoolIcon sx={{ color: '#f39c12', fontSize: { xs: 20, md: 24 } }} />,
                title: "Teachers as central figures",
                description: "Elevates teachers to supervision and quality control, making the examiner role more appealing."
              }
            ].map((item, index) => (
              <Grid size={{ xs: 12, sm: 6 }} key={index}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', p: 2 }}>
                  <Box sx={{ mr: 2, mt: 0.5, flexShrink: 0 }}>{item.icon}</Box>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>{item.title}</Typography>
                    <Typography color="text.secondary" sx={{ fontSize: { xs: '0.8rem', md: '0.9rem' }, lineHeight: 1.4 }}>{item.description}</Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Conclusion */}
        <Box sx={{ 
          mb: { xs: 6, md: 8 }, 
          p: { xs: 2, md: 3 }, 
          background: 'linear-gradient(135deg, rgba(233, 69, 96, 0.1) 0%, rgba(243, 156, 18, 0.1) 100%)', 
          borderRadius: 2, 
          border: '1px solid rgba(243, 156, 18, 0.2)' 
        }}>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 2, textAlign: 'center', fontSize: { xs: '1.5rem', md: '2rem' } }}>
            Conclusion and Next Steps
          </Typography>
          
          <Typography variant="body1" paragraph sx={{ fontSize: { xs: '0.9rem', md: '1rem' }, lineHeight: 1.6, mb: 2 }}>
            Ireland's exam system faces a clear problem: rising student numbers and fewer graders mean slower results and stressed students. Our proposal shows that <strong>responsibly applied AI can be part of the solution</strong>. By creating a partnership where machines handle repetitive tasks and humans oversee all nuanced judgments, we can slash grading time while <strong>guaranteeing that teachers always control the outcome</strong>.
          </Typography>
          
          <Typography variant="body1" paragraph sx={{ fontSize: { xs: '0.9rem', md: '1rem' }, lineHeight: 1.6 }}>
            This project isn't about "trusting the robot" — it's about <strong>making the robot trustworthy by design</strong>, so that humans are always in the loop. We invite educators, students, and the community to share their thoughts and help us refine this system.
          </Typography>
        </Box>

        <Divider sx={{ my: { xs: 4, md: 6 }, background: 'linear-gradient(90deg, transparent, rgba(243, 156, 18, 0.5), transparent)' }} />

        {/* Sources */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 600, mb: 2, textAlign: 'center', fontSize: { xs: '1.3rem', md: '1.5rem' } }}>Sources</Typography>
          <List dense sx={{ maxWidth: '100%' }}>
            <ListItem sx={{ px: 0 }}>
              <ListItemText 
                primary="[1] Leaving and Junior Cert exams begin with record numbers of students sitting – The Irish Times" 
                secondary={
                  <Link 
                    href="https://www.irishtimes.com/ireland/education/2024/06/05/state-exams-2024-record-numbers-due-to-sit-junior-and-leaving-cert/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    sx={{ 
                      color: '#f39c12', 
                      '&:hover': { color: '#e94560' },
                      fontSize: { xs: '0.7rem', md: '0.8rem' },
                      wordBreak: 'break-all'
                    }}
                  >
                    irishtimes.com/ireland/education/2024/06/05/state-exams-2024-record-numbers...
                  </Link>
                } 
                primaryTypographyProps={{ fontSize: { xs: '0.8rem', md: '0.9rem' } }}
              />
            </ListItem>
            <ListItem sx={{ px: 0 }}>
              <ListItemText 
                primary="[2] Shortage of examiners 'exacerbated' by return to normal school exams" 
                secondary={
                  <Link 
                    href="https://www.breakingnews.ie/ireland/shortage-of-examiners-exacerbated-by-return-to-normal-school-exams-1382566.html" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    sx={{ 
                      color: '#f39c12', 
                      '&:hover': { color: '#e94560' },
                      fontSize: { xs: '0.7rem', md: '0.8rem' },
                      wordBreak: 'break-all'
                    }}
                  >
                    breakingnews.ie/ireland/shortage-of-examiners-exacerbated...
                  </Link>
                } 
                primaryTypographyProps={{ fontSize: { xs: '0.8rem', md: '0.9rem' } }}
              />
            </ListItem>
            <ListItem sx={{ px: 0 }}>
              <ListItemText 
                primary="[3] Delay in issuing Leaving Cert results 'will cause huge levels of additional stress and worry'" 
                secondary={
                  <Link 
                    href="https://www.thejournal.ie/leaving-cert-results-2022-5797843-Jun2022/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    sx={{ 
                      color: '#f39c12', 
                      '&:hover': { color: '#e94560' },
                      fontSize: { xs: '0.7rem', md: '0.8rem' },
                      wordBreak: 'break-all'
                    }}
                  >
                    thejournal.ie/leaving-cert-results-2022-5797843-Jun2022/
                  </Link>
                } 
                primaryTypographyProps={{ fontSize: { xs: '0.8rem', md: '0.9rem' } }}
              />
            </ListItem>
            <ListItem sx={{ px: 0 }}>
              <ListItemText 
                primary="[13] Leaving Cert examiners offer €100,000 contract to research how AI can be used to correct papers" 
                secondary={
                  <Link 
                    href="https://www.thejournal.ie/leaving-cert-corrected-by-ai-6671133-Apr2025/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    sx={{ 
                      color: '#f39c12', 
                      '&:hover': { color: '#e94560' },
                      fontSize: { xs: '0.7rem', md: '0.8rem' },
                      wordBreak: 'break-all'
                    }}
                  >
                    thejournal.ie/leaving-cert-corrected-by-ai-6671133-Apr2025/
                  </Link>
                } 
                primaryTypographyProps={{ fontSize: { xs: '0.8rem', md: '0.9rem' } }}
              />
            </ListItem>
          </List>
        </Box>
      </Container>
    </Box>
    </>
  );
};

export default ResearchPage;