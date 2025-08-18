// pages/HomePage.tsx
import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Typography,
  Modal,
  Fade,
  Backdrop,
  Card,
  CardContent,
  GlobalStyles,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import SpeedIcon from '@mui/icons-material/Speed';
import GavelIcon from '@mui/icons-material/Gavel';
import HubIcon from '@mui/icons-material/Hub';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import PsychologyIcon from '@mui/icons-material/Psychology';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import ScheduleIcon from '@mui/icons-material/Schedule';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FeedbackForm from '../components/FeedbackForm';
import MeetTheMakers, { defaultMakers } from '../components/MeetTheMakers';
import type { Theme, SxProps } from '@mui/material/styles';

const modalStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '90%', sm: '70%', md: 600 },
  p: 0,
  borderRadius: 2,
  overflow: 'hidden',
};

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

// deterministic "random"
const r = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};
const orbVars = (seed: number): SxProps<Theme> => {
  const aSize = Math.round(110 + r(seed + 1) * 70); // 110-180px
  const bSize = Math.round(70 + r(seed + 2) * 80);  // 70-150px
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

const HomePage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  const badgeBoxSx = (theme: Theme) => ({
    px: 2,
    py: 1.5,
    width: '100%',
    minHeight: '60px',
    borderRadius: 2,
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    border: '1px solid rgba(255, 255, 255, 0.12)',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
    color: theme.palette.text.primary,
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: '-100%',
      width: '100%',
      height: '100%',
      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
      animation: 'shimmer 2s infinite',
    },
    '@keyframes shimmer': {
      '0%': { left: '-100%' },
      '100%': { left: '100%' },
    },
  });

  const descBoxSx = (theme: Theme) => ({
    mt: 2,
    p: 2.5,
    minHeight: '80px',
    borderRadius: 2,
    backdropFilter: 'blur(15px)',
    WebkitBackdropFilter: 'blur(15px)',
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
    color: theme.palette.text.secondary,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '1px',
      background: 'linear-gradient(90deg, transparent, rgba(243, 156, 18, 0.5), transparent)',
    },
  });

  return (
    <>
      <GlobalStyles styles={keyframes} />
      <Box sx={{ 
        background: 'linear-gradient(135deg, rgba(15, 15, 35, 0.9) 0%, rgba(26, 26, 46, 0.8) 100%)',
        pt: 12, 
        pb: 8,
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(ellipse at center, rgba(233, 69, 96, 0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        },
      }}>
        <Container maxWidth="md">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
            sx={{ 
              fontWeight: 800,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              position: 'relative',
              zIndex: 1,
              mb: 3,
            }}
          >
            Faster, Fairer Leaving Cert Grading
          </Typography>
          <Typography 
            variant="h5" 
            align="center" 
            color="text.secondary" 
            paragraph
            sx={{
              fontSize: { xs: '1.2rem', md: '1.4rem' },
              lineHeight: 1.6,
              maxWidth: '800px',
              mx: 'auto',
              position: 'relative',
              zIndex: 1,
              mb: 4,
            }}
          >
            AI-assisted. Teacher-supervised. High-confidence only. Our hybrid system speeds up marking,
            keeps standards consistent, and routes any uncertainty for Later Human Review.
          </Typography>
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            mt: 6, 
            gap: 3,
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center',
            position: 'relative',
            zIndex: 1,
          }}>
            <Button variant="contained" size="large" onClick={handleOpen}>
              Share Your Feedback
            </Button>
            <Button variant="outlined" size="large" onClick={handleOpen}>
              Join Early Pilot Interest
            </Button>
          </Box>
        </Container>
      </Box>

      <Container sx={{ py: 8 }} maxWidth="lg">
        {/* Problem framing */}
        <Box sx={{ mb: 10, textAlign: 'center' }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
            The Annual Grading Bottleneck
          </Typography>
          <Typography variant="body1" color="text.secondary" maxWidth="md" sx={{ mx: 'auto' }}>
            Rising candidate numbers and examiner shortages slow results, increase stress, and strain teachers.
            We believe there's a smarter, safer way: let AI handle the routine checks under strict guardrails,
            and keep teachers in charge of the edge cases.
          </Typography>
        </Box>

        {/* Stats strip */}
        <Box sx={{ mb: 8 }}>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, sm: 4 }}>
              <Card className="simple-card" sx={{ 
                minHeight: '200px',
                '&:hover': {
                  border: '1px solid rgba(243, 156, 18, 0.4)',
                  boxShadow: '0 12px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(243, 156, 18, 0.3)'
                }
              }}>
                <CardContent className="simple-content" sx={{ display: 'flex', flexDirection: 'column', height: '100%', p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                    <TrendingUpIcon className="stats-icon" sx={{ fontSize: 32, color: '#e94560', mr: 1 }} />
                    <Typography variant="h5" sx={{ fontWeight: 700, color: '#e94560' }}>Record Volume</Typography>
                  </Box>
                  <Box sx={{ textAlign: 'center', mb: 2 }}>
                    <Typography variant="h4" sx={{ fontWeight: 700, mb: 0.5 }} className="stats-number">136,000</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>students sat State exams in 2024</Typography>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>~4,000,000</Typography>
                    <Typography variant="body2" color="text.secondary">papers distributed</Typography>
                  </Box>
                  <Box sx={{ mt: 'auto', p: 2, backgroundColor: 'rgba(233, 69, 96, 0.1)', borderRadius: 1, border: '1px solid rgba(233, 69, 96, 0.2)' }}>
                    <Typography variant="body2" sx={{ fontWeight: 500, fontSize: '0.85rem' }}>
                      <strong>Why it matters:</strong> Volume keeps rising; logistics are maxed.
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, sm: 4 }}>
              <Card className="simple-card" sx={{ 
                minHeight: '200px',
                '&:hover': {
                  border: '1px solid rgba(233, 69, 96, 0.4)',
                  boxShadow: '0 12px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(233, 69, 96, 0.3)'
                }
              }}>
                <CardContent className="simple-content" sx={{ display: 'flex', flexDirection: 'column', height: '100%', p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                    <TrendingDownIcon className="stats-icon" sx={{ fontSize: 32, color: '#f39c12', mr: 1 }} />
                    <Typography variant="h5" sx={{ fontWeight: 700, color: '#f39c12' }}>Capacity Gap</Typography>
                  </Box>
                  <Box sx={{ textAlign: 'center', mb: 2 }}>
                    <Typography variant="h4" sx={{ fontWeight: 700, mb: 0.5 }} className="stats-number">36.7 → 53.5</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>candidates per examiner (+46%)</Typography>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>&lt;3,000 vs ~4,000</Typography>
                    <Typography variant="body2" color="text.secondary">examiners needed vs available</Typography>
                  </Box>
                  <Box sx={{ mt: 'auto', p: 2, backgroundColor: 'rgba(243, 156, 18, 0.1)', borderRadius: 1, border: '1px solid rgba(243, 156, 18, 0.2)' }}>
                    <Typography variant="body2" sx={{ fontWeight: 500, fontSize: '0.85rem' }}>
                      <strong>Why it matters:</strong> Fewer markers, more scripts → AI triages routine answers.
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, sm: 4 }}>
              <Card className="simple-card" sx={{ 
                minHeight: '200px',
                '&:hover': {
                  border: '1px solid rgba(243, 156, 18, 0.4)',
                  boxShadow: '0 12px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(243, 156, 18, 0.3)'
                }
              }}>
                <CardContent className="simple-content" sx={{ display: 'flex', flexDirection: 'column', height: '100%', p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                    <ScheduleIcon className="stats-icon" sx={{ fontSize: 32, color: '#e94560', mr: 1 }} />
                    <Typography variant="h5" sx={{ fontWeight: 700, color: '#e94560' }}>Results Drift</Typography>
                  </Box>
                  <Box sx={{ textAlign: 'center', mb: 2 }}>
                    <Typography variant="h4" sx={{ fontWeight: 700, mb: 0.5 }} className="stats-number">3 Years</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>slipped into September (2020-22)</Typography>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>2024: Aug 23</Typography>
                    <Typography variant="body2" color="text.secondary">vs 2019: Aug 13</Typography>
                  </Box>
                  <Box sx={{ mt: 'auto', p: 2, backgroundColor: 'rgba(233, 69, 96, 0.1)', borderRadius: 1, border: '1px solid rgba(233, 69, 96, 0.2)' }}>
                    <Typography variant="body2" sx={{ fontWeight: 500, fontSize: '0.85rem' }}>
                      <strong>Why it matters:</strong> AI speeds marking so results land reliably in mid-August.
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* Section divider */}
        <Box className="section-divider" />
        
        {/* Process */}
        <Box sx={{ mb: 10 }}>
          <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ fontWeight: 600 }}>
            Our Innovative Approach: A Panel of AI Experts
          </Typography>
          <Typography variant="body1" color="text.secondary" maxWidth="md" sx={{ mx: 'auto', textAlign: 'center', mb: 4 }}>
            Three specialized AI graders review each answer from different angles, then we apply a strict
            confidence threshold. Anything below the bar goes straight to a teacher for Later Human Review.
          </Typography>
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center', 
            justifyContent: 'center', 
            gap: { xs: 2, md: 2 } 
          }}>
            {/* Step 1 */}
            <Box sx={{ flex: { xs: '1 1 auto', md: '0 1 260px' }, maxWidth: { xs: '100%', md: '260px' }, width: { xs: '100%', md: 'auto' } }}>
              <Card className="green-border-card" sx={{ height: { md: '250px' }, ...orbVars(201) }}>
                <CardContent className="green-border-content" sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <HowToRegIcon sx={{ color: '#4caf50', fontSize: 32, mb: 2 }} />
                  <Box sx={{
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    mb: 2,
                    width: '100%',
                    textAlign: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: '-100%',
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
                      animation: 'shimmer 2s infinite',
                    },
                    '@keyframes shimmer': {
                      '0%': { left: '-100%' },
                      '100%': { left: '100%' },
                    },
                  }}>
                    <Typography variant="h6" component="h3" sx={{ fontSize: '0.85rem', fontWeight: 600, lineHeight: 1.2 }}>
                      Teacher Standard
                    </Typography>
                  </Box>
                  <Box sx={{
                    flex: 1,
                    p: 2,
                    borderRadius: 2,
                    backgroundColor: 'rgba(0, 0, 0, 0.25)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <Typography sx={{ fontSize: '0.85rem', lineHeight: 1.4, textAlign: 'center' }}>
                      Examiners define rubrics, keys, and sample answers. AI learns the standard—never invents one.
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Box>
            
            {/* Arrow 1 - Horizontal on desktop, vertical on mobile */}
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              mx: { xs: 0, md: 1 },
              my: { xs: 1, md: 0 }
            }}>
              <ArrowForwardIcon sx={{ 
                fontSize: 28, 
                color: '#4caf50',
                transform: { xs: 'rotate(90deg)', md: 'rotate(0deg)' },
                transition: 'transform 0.3s ease'
              }} />
            </Box>
            
            {/* Step 2 */}
            <Box sx={{ flex: { xs: '1 1 auto', md: '0 1 260px' }, maxWidth: { xs: '100%', md: '260px' }, width: { xs: '100%', md: 'auto' } }}>
              <Card className="blue-border-card" sx={{ height: { md: '250px' }, ...orbVars(202) }}>
                <CardContent className="blue-border-content" sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <PsychologyIcon sx={{ color: '#2196f3', fontSize: 32, mb: 2 }} />
                  <Box sx={{
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    mb: 2,
                    width: '100%',
                    textAlign: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: '-100%',
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
                      animation: 'shimmer 2s infinite',
                    },
                    '@keyframes shimmer': {
                      '0%': { left: '-100%' },
                      '100%': { left: '100%' },
                    },
                  }}>
                    <Typography variant="h6" component="h3" sx={{ fontSize: '0.85rem', fontWeight: 600, lineHeight: 1.2 }}>
                      AI Panel Review
                    </Typography>
                  </Box>
                  <Box sx={{
                    flex: 1,
                    p: 2,
                    borderRadius: 2,
                    backgroundColor: 'rgba(0, 0, 0, 0.25)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <Typography sx={{ fontSize: '0.85rem', lineHeight: 1.4, textAlign: 'center' }}>
                      Three agents analyze each answer: rubric coverage, official comparison, and benchmark scoring.
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Box>
            
            {/* Arrow 2 - Horizontal on desktop, vertical on mobile */}
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              mx: { xs: 0, md: 1 },
              my: { xs: 1, md: 0 }
            }}>
              <ArrowForwardIcon sx={{ 
                fontSize: 28, 
                color: '#2196f3',
                transform: { xs: 'rotate(90deg)', md: 'rotate(0deg)' },
                transition: 'transform 0.3s ease'
              }} />
            </Box>
            
            {/* Step 3 */}
            <Box sx={{ flex: { xs: '1 1 auto', md: '0 1 260px' }, maxWidth: { xs: '100%', md: '260px' }, width: { xs: '100%', md: 'auto' } }}>
              <Card className="green-border-card" sx={{ height: { md: '250px' }, ...orbVars(203) }}>
                <CardContent className="green-border-content" sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <CheckCircleOutlineIcon sx={{ color: '#4caf50', fontSize: 32, mb: 2 }} />
                  <Box sx={{
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    mb: 2,
                    width: '100%',
                    textAlign: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: '-100%',
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
                      animation: 'shimmer 2s infinite',
                    },
                    '@keyframes shimmer': {
                      '0%': { left: '-100%' },
                      '100%': { left: '100%' },
                    },
                  }}>
                    <Typography variant="h6" component="h3" sx={{ fontSize: '0.85rem', fontWeight: 600, lineHeight: 1.2 }}>
                      Confidence Check
                    </Typography>
                  </Box>
                  <Box sx={{
                    flex: 1,
                    p: 2,
                    borderRadius: 2,
                    backgroundColor: 'rgba(0, 0, 0, 0.25)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <Typography sx={{ fontSize: '0.85rem', lineHeight: 1.4, textAlign: 'center' }}>
                      Combined confidence ≥ 95%? Accept. Below threshold? Auto-flag for teacher review.
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Box>
        </Box>

        {/* Why different */}
        <Box sx={{ mb: 10 }}>
          <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ fontWeight: 600 }}>
            Why Our System is Different
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            {[
              {
                icon: <HubIcon fontSize="large" sx={{ color: '#4caf50' }} />,
                title: 'Superior Accuracy',
                description: 'Triple-check ensemble plus human oversight minimizes errors and catches edge cases.',
              },
              {
                icon: <GavelIcon fontSize="large" sx={{ color: '#2196f3' }} />,
                title: 'Perfect Consistency',
                description: 'Uniform rubric application across scripts—no fatigue, drift, or random leniency.',
              },
              {
                icon: <SpeedIcon fontSize="large" sx={{ color: '#4caf50' }} />,
                title: 'Massive Efficiency',
                description: 'Triage routine answers at scale so teachers focus on cases needing judgment.',
              },
              {
                icon: <HowToRegIcon fontSize="large" sx={{ color: '#2196f3' }} />,
                title: 'Full Transparency',
                description: 'Every AI decision is logged; uncertain cases escalated. Teachers maintain control.',
              },
            ].map((item, i) => {
              const isGreenIcon = item.icon.props.sx.color === '#4caf50';
              const isBlueIcon = item.icon.props.sx.color === '#2196f3';
              const cardClass = isGreenIcon ? 'green-border-card' : isBlueIcon ? 'blue-border-card' : '';
              const contentClass = isGreenIcon ? 'green-border-content' : isBlueIcon ? 'blue-border-content' : '';
              return (
              <Grid key={item.title} size={{ xs: 12, sm: 6, md: 3 }}>
                <Card className={cardClass} sx={{ height: '100%', ...orbVars(301 + i) }}>
                  <CardContent className={contentClass} sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Box sx={{ mb: 2, fontSize: 32 }}>{React.cloneElement(item.icon, { sx: { ...item.icon.props.sx, fontSize: 32 } })}</Box>
                    <Box sx={{
                      px: 2,
                      py: 1,
                      borderRadius: 2,
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      mb: 2,
                      width: '100%',
                      textAlign: 'center',
                      position: 'relative',
                      overflow: 'hidden',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: '-100%',
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
                        animation: 'shimmer 2s infinite',
                      },
                      '@keyframes shimmer': {
                        '0%': { left: '-100%' },
                        '100%': { left: '100%' },
                      },
                    }}>
                      <Typography variant="h6" component="h3" sx={{ fontSize: '0.85rem', fontWeight: 600, lineHeight: 1.2 }}>
                        {item.title}
                      </Typography>
                    </Box>
                    <Box sx={{
                      flex: 1,
                      p: 2,
                      borderRadius: 2,
                      backgroundColor: 'rgba(0, 0, 0, 0.25)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                      <Typography color="text.secondary" sx={{ fontSize: '0.85rem', lineHeight: 1.4, textAlign: 'center' }}>
                        {item.description}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            )})}
          </Grid>
        </Box>

        {/* Guardrails */}
        <Box sx={{ mb: 10, maxWidth: 'md', mx: 'auto', textAlign: 'center' }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
            Built-In Guardrails (Trust by Design)
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 2 }}>
            Safety isn’t a feature—it’s the architecture.
          </Typography>
          <Box sx={{ textAlign: 'left' }}>
            <Typography sx={{ mb: 1.5 }}>
              • <strong>High-confidence only:</strong> AI grades are accepted only at ≥95% confidence; everything else goes to Later Human Review.
            </Typography>
            <Typography sx={{ mb: 1.5 }}>
              • <strong>OCR sanity checks:</strong> Low-confidence handwriting recognition is corrected by humans before any AI grading.
            </Typography>
            <Typography sx={{ mb: 1.5 }}>
              • <strong>Teacher-defined rules:</strong> Rubrics, keys, and examples come from examiners. AI applies—never invents—criteria.
            </Typography>
            <Typography sx={{ mb: 1.5 }}>
              • <strong>Auditability:</strong> Per-question JSON trail (sub-scores + confidence) enables spot checks and appeals.
            </Typography>
            <Typography>
              • <strong>Human in the loop:</strong> Teachers moderate uncertainty, adjudicate edge cases, and audit the system.
            </Typography>
          </Box>
        </Box>

        {/* Skeptics’ Q&A */}
        <Box sx={{ mb: 10 }}>
          <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ fontWeight: 600 }}>
            Skeptics’ Questions — Straight Answers
          </Typography>
          <Grid container spacing={4} sx={{ mt: 1 }}>
            {[
              {
                title: '“Will AI cost me marks?”',
                body:
                  'No. The AI never guesses; low-confidence answers auto-escalate to teachers. Consistent rubric checks also reduce missed partial credit.',
              },
              {
                title: '“Can AI judge creativity?”',
                body:
                  'For subjective work, we use rubric + example comparison—and keep humans in charge. Novel answers tend to lower AI confidence and route to a teacher.',
              },
              {
                title: '“Are teachers being replaced?”',
                body:
                  'No. Teachers define standards, handle edge cases, and audit outcomes. AI removes drudgery so educators focus on judgement.',
              },
            ].map((q) => (
              <Grid key={q.title} size={{ xs: 12, md: 4 }}>
                <Card className="simple-card" sx={{ height: '100%' }}>
                  <CardContent className="simple-content" sx={{ p: 3, display: 'flex', flexDirection: 'column' }}>
                    <Box sx={badgeBoxSx}>
                      <Typography variant="h6">{q.title}</Typography>
                    </Box>
                    <Box sx={descBoxSx}>
                      <Typography color="text.secondary">{q.body}</Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Social Proof */}
        <Box sx={{ mb: 10 }}>
          <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ fontWeight: 600 }}>
            What People Are Saying
          </Typography>
          <Grid container spacing={4} sx={{ mt: 1 }}>
            {[
              { quote: '“If this gets results back on time, I’m all for it.”', role: 'Leaving Cert student' },
              { quote: '“Marking hundreds of scripts is brutal—this could be a lifesaver for teachers.”', role: 'Secondary school teacher' },
              { quote: '“As long as teachers have final say, speeding up the process makes sense.”', role: 'Parent representative' },
            ].map((s, i) => (
              <Grid key={i} size={{ xs: 12, md: 4 }}>
                <Card className="simple-card" sx={{ height: '100%', textAlign: 'center' }}>
                  <CardContent className="simple-content" sx={{ p: 3 }}>
                    <Typography sx={{ fontStyle: 'italic', mb: 1 }}>{s.quote}</Typography>
                    <Typography color="text.secondary">— {s.role}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Makers / Team */}
        <Box sx={{ mb: 10, py: 8 }}>
          <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ fontWeight: 600 }}>
            Meet the Makers
          </Typography>
          <Typography variant="body1" color="text.secondary" maxWidth="md" sx={{ mx: 'auto', mb: 6, textAlign: 'center' }}>
            The passionate team behind our innovative AI grading system.
          </Typography>
          <Box sx={{ px: { xs: 2, md: 0 }, overflow: 'hidden' }}>
            <MeetTheMakers members={defaultMakers} cardWidth={280} cardHeight={320} speedSec={15} reverse={true} />
          </Box>
        </Box>

        {/* Final CTA */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
            Help Shape the Future of Education
          </Typography>
          <Typography variant="body1" color="text.secondary" maxWidth="md" sx={{ mx: 'auto', mb: 3 }}>
            We’re building this with students, teachers, and parents. Tell us what to keep, fix, or change.
          </Typography>
          <Button variant="contained" size="large" onClick={handleOpen}>
            Share Your Feedback
          </Button>
        </Box>
      </Container>

      <Modal
        aria-labelledby="feedback-modal-title"
        aria-describedby="feedback-modal-description"
        open={modalOpen}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={modalOpen}>
          <Box sx={{
            ...modalStyle,
            background: 'linear-gradient(135deg, rgba(15, 15, 35, 0.95), rgba(26, 26, 46, 0.9))',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.4)',
            borderRadius: 3,
            p: 0,
          }}>
            <FeedbackForm onClose={handleClose} />
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default HomePage;