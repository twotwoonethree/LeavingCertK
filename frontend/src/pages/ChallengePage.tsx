import { Typography, Box, Paper, Link, Divider, Chip, Grid, Stack } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import SchoolIcon from '@mui/icons-material/School';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ScienceIcon from '@mui/icons-material/Science';

const ChallengePage: React.FC = () => {
  return (
    <Box sx={{ 
      maxWidth: '1000px', 
      mx: 'auto',
      px: { xs: 2, sm: 3, md: 4 },
      py: { xs: 2, sm: 3 }
    }}>
      {/* Hero Section */}
      <Paper
        elevation={0}
        sx={{
          textAlign: 'center',
          mb: 4,
          p: { xs: 2, sm: 4 },
          background: 'linear-gradient(135deg, rgba(38, 198, 218, 0.05), rgba(77, 208, 225, 0.03))',
          border: '1px solid rgba(38, 198, 218, 0.2)',
          borderRadius: 3,
          backdropFilter: 'blur(10px)',
          boxShadow: '0 4px 20px rgba(38, 198, 218, 0.1)',
        }}
      >
        <Typography 
          variant="h4"
          component="h1" 
          sx={{
            background: 'linear-gradient(45deg, #26c6da, #4dd0e1, #00bcd4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontWeight: 700,
            fontSize: { xs: '1.5rem', sm: '2rem' },
            mb: 2,
            letterSpacing: '-0.02em',
          }}
        >
          The Challenge: Transforming Ireland's Examination System
        </Typography>
        <Box sx={{ width: 80, height: 4, background: 'linear-gradient(45deg, #26c6da, #4dd0e1, #00bcd4)', mx: 'auto', borderRadius: 2, mb: 3 }} />
        <Typography 
          variant="h6" 
          sx={{ 
            color: 'rgba(255, 255, 255, 0.9)', 
            fontWeight: 400, 
            maxWidth: '800px', 
            mx: 'auto',
            lineHeight: 1.6,
          }}
        >
          Our National AI Challenge 2025 project tackles Ireland's most pressing educational bottleneck: 
          the annual Leaving Certificate grading crisis
        </Typography>
        
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: { xs: 1, md: 2 }, flexWrap: 'wrap', mt: 3 }}>
          <Chip 
            icon={<EmojiEventsIcon sx={{ fontSize: { xs: 16, md: 20 } }} />} 
            label="National AI Challenge 2025" 
            sx={{ 
              background: 'linear-gradient(45deg, #26c6da, #4dd0e1, #00bcd4)', 
              color: 'white',
              fontSize: { xs: '0.75rem', md: '0.875rem' }
            }} 
          />
          <Chip 
            icon={<MonetizationOnIcon sx={{ fontSize: { xs: 16, md: 20 } }} />} 
            label="€100k SEC Research Grant" 
            sx={{ 
              background: 'linear-gradient(45deg, #f39c12, #e94560)', 
              color: 'white',
              fontSize: { xs: '0.75rem', md: '0.875rem' }
            }} 
          />
          <Chip 
            icon={<ScienceIcon sx={{ fontSize: { xs: 16, md: 20 } }} />} 
            label="Evidence-Based Solution" 
            sx={{ 
              background: 'linear-gradient(45deg, #26c6da, #4dd0e1, #00bcd4)', 
              color: 'white',
              fontSize: { xs: '0.75rem', md: '0.875rem' }
            }} 
          />
        </Box>
      </Paper>

      {/* The Crisis Section */}
      <Typography 
        variant="h5" 
        component="h2" 
        sx={{ 
          color: '#f39c12',
          fontWeight: 600,
          mb: 3,
          display: 'flex',
          alignItems: 'center',
          fontSize: { xs: '1.2rem', sm: '1.5rem' },
          '&:before': {
            content: '""',
            width: 6,
            height: 28,
            background: 'linear-gradient(45deg, #26c6da, #4dd0e1, #00bcd4)',
            borderRadius: 3,
            mr: 2,
          }
        }}
      >
        The Annual Grading Crisis
      </Typography>
      
      <Typography variant="body1" paragraph sx={{ fontSize: { xs: '0.95rem', md: '1.1rem' }, lineHeight: 1.7, mb: 4 }}>
        Ireland's examination system faces an unprecedented crisis. Every year, the State Examinations Commission struggles 
        to deliver results on time due to a perfect storm of increasing student numbers, declining examiner availability, 
        and post-pandemic disruptions to normal grading processes.
      </Typography>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Paper sx={{ 
            background: 'linear-gradient(135deg, rgba(233, 69, 96, 0.1), rgba(233, 69, 96, 0.05))', 
            border: '1px solid rgba(233, 69, 96, 0.3)',
            borderRadius: 2,
            borderLeft: '4px solid #e94560',
            transition: 'all 0.3s ease',
            '&:hover': {
              borderColor: 'rgba(233, 69, 96, 0.5)',
              boxShadow: '0 4px 15px rgba(233, 69, 96, 0.2)',
            },
            p: 3,
            textAlign: 'center',
            height: '100%'
          }}>
            <TrendingUpIcon sx={{ fontSize: 40, color: '#e94560', mb: 2 }} />
            <Typography variant="h4" sx={{ fontWeight: 700, color: '#e94560', mb: 1 }}>136,000+</Typography>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, fontSize: '1rem' }}>Students in 2024</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.9rem' }}>
              Record numbers sitting Leaving & Junior Certificate exams
            </Typography>
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Paper sx={{ 
            background: 'linear-gradient(135deg, rgba(243, 156, 18, 0.1), rgba(243, 156, 18, 0.05))', 
            border: '1px solid rgba(243, 156, 18, 0.3)',
            borderRadius: 2,
            borderLeft: '4px solid #f39c12',
            transition: 'all 0.3s ease',
            '&:hover': {
              borderColor: 'rgba(243, 156, 18, 0.5)',
              boxShadow: '0 4px 15px rgba(243, 156, 18, 0.2)',
            },
            p: 3,
            textAlign: 'center',
            height: '100%'
          }}>
            <TrendingDownIcon sx={{ fontSize: 40, color: '#f39c12', mb: 2 }} />
            <Typography variant="h4" sx={{ fontWeight: 700, color: '#f39c12', mb: 1 }}>&lt;3,000</Typography>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, fontSize: '1rem' }}>Available Examiners</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.9rem' }}>
              Down from 4,000+ in previous years - a critical shortage
            </Typography>
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Paper sx={{ 
            background: 'linear-gradient(135deg, rgba(156, 39, 176, 0.1), rgba(156, 39, 176, 0.05))', 
            border: '1px solid rgba(156, 39, 176, 0.3)',
            borderRadius: 2,
            borderLeft: '4px solid #9c27b0',
            transition: 'all 0.3s ease',
            '&:hover': {
              borderColor: 'rgba(156, 39, 176, 0.5)',
              boxShadow: '0 4px 15px rgba(156, 39, 176, 0.2)',
            },
            p: 3,
            textAlign: 'center',
            height: '100%'
          }}>
            <AccessTimeIcon sx={{ fontSize: 40, color: '#9c27b0', mb: 2 }} />
            <Typography variant="h4" sx={{ fontWeight: 700, color: '#9c27b0', mb: 1 }}>3+ Weeks</Typography>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, fontSize: '1rem' }}>Delayed Results</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.9rem' }}>
              Results pushed from mid-August to September (2020-2022)
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Divider sx={{ my: { xs: 4, md: 6 }, background: 'linear-gradient(90deg, transparent, rgba(243, 156, 18, 0.5), transparent)' }} />

      {/* The Opportunity Section */}
      <Typography 
        variant="h5" 
        component="h2" 
        sx={{ 
          color: '#f39c12',
          fontWeight: 600,
          mb: 3,
          display: 'flex',
          alignItems: 'center',
          fontSize: { xs: '1.2rem', sm: '1.5rem' },
          '&:before': {
            content: '""',
            width: 6,
            height: 28,
            background: 'linear-gradient(45deg, #26c6da, #4dd0e1, #00bcd4)',
            borderRadius: 3,
            mr: 2,
          }
        }}
      >
        A Perfect Storm Creates Opportunity
      </Typography>

      <Stack spacing={3} sx={{ mb: 4 }}>
        <Paper sx={{
          p: { xs: 2, sm: 3 },
          background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.1), rgba(76, 175, 80, 0.05))',
          border: '1px solid rgba(76, 175, 80, 0.3)',
          borderRadius: 2,
          borderLeft: '4px solid #4caf50',
          transition: 'all 0.3s ease',
          '&:hover': {
            borderColor: 'rgba(76, 175, 80, 0.5)',
            boxShadow: '0 4px 15px rgba(76, 175, 80, 0.2)',
          }
        }}>
          <Typography variant="body1" sx={{ lineHeight: 1.7, color: 'rgba(255, 255, 255, 0.9)', fontSize: { xs: '0.9rem', sm: '1rem' } }}>
            <Box component="span" sx={{ fontWeight: 700, color: '#4caf50', fontSize: '1.1em' }}>SEC Research Initiative:</Box> The State Examinations Commission has issued a €100,000 contract to explore how generative AI can assist in exam correction. Our project directly addresses this call, investigating AI's potential to support both assessment creation and marking processes while maintaining human oversight and academic integrity.
          </Typography>
        </Paper>

        <Paper sx={{
          p: { xs: 2, sm: 3 },
          background: 'linear-gradient(135deg, rgba(33, 150, 243, 0.1), rgba(33, 150, 243, 0.05))',
          border: '1px solid rgba(33, 150, 243, 0.3)',
          borderRadius: 2,
          borderLeft: '4px solid #2196f3',
          transition: 'all 0.3s ease',
          '&:hover': {
            borderColor: 'rgba(33, 150, 243, 0.5)',
            boxShadow: '0 4px 15px rgba(33, 150, 243, 0.2)',
          }
        }}>
          <Typography variant="body1" sx={{ lineHeight: 1.7, color: 'rgba(255, 255, 255, 0.9)', fontSize: { xs: '0.9rem', sm: '1rem' } }}>
            <Box component="span" sx={{ fontWeight: 700, color: '#2196f3', fontSize: '1.1em' }}>National AI Challenge 2025:</Box> As part of Ireland's National AI Challenge 2025 - a prestigious hackathon supported by Enterprise Ireland, Google, and OpenAI - we're developing innovative solutions to tackle pressing industry challenges. Our AI grading system represents the intersection of cutting-edge technology and urgent national need.
          </Typography>
        </Paper>

        <Paper sx={{
          p: { xs: 2, sm: 3 },
          background: 'linear-gradient(135deg, rgba(233, 69, 96, 0.1), rgba(233, 69, 96, 0.05))',
          border: '1px solid rgba(233, 69, 96, 0.3)',
          borderRadius: 2,
          borderLeft: '4px solid #e94560',
          transition: 'all 0.3s ease',
          '&:hover': {
            borderColor: 'rgba(233, 69, 96, 0.5)',
            boxShadow: '0 4px 15px rgba(233, 69, 96, 0.2)',
          }
        }}>
          <Typography variant="body1" sx={{ lineHeight: 1.7, color: 'rgba(255, 255, 255, 0.9)', fontSize: { xs: '0.9rem', sm: '1rem' } }}>
            <Box component="span" sx={{ fontWeight: 700, color: '#e94560', fontSize: '1.1em' }}>Real-World Impact:</Box> Teachers are already experimenting with AI grading tools like Pulc, with about 500 educators currently using AI assistance for Leaving Cert work. However, these tools lack the rigorous confidence thresholds, multi-agent validation, and human oversight that our system provides - making our solution both timely and necessary.
          </Typography>
        </Paper>
      </Stack>

      <Divider sx={{ my: { xs: 4, md: 6 }, background: 'linear-gradient(90deg, transparent, rgba(243, 156, 18, 0.5), transparent)' }} />

      {/* Our Approach Section */}
      <Typography 
        variant="h5" 
        component="h2" 
        sx={{ 
          color: '#f39c12',
          fontWeight: 600,
          mb: 3,
          display: 'flex',
          alignItems: 'center',
          fontSize: { xs: '1.2rem', sm: '1.5rem' },
          '&:before': {
            content: '""',
            width: 6,
            height: 28,
            background: 'linear-gradient(45deg, #26c6da, #4dd0e1, #00bcd4)',
            borderRadius: 3,
            mr: 2,
          }
        }}
      >
        Our Evidence-Based Approach
      </Typography>

      <Typography variant="body1" paragraph sx={{ fontSize: { xs: '0.95rem', md: '1.1rem' }, lineHeight: 1.6, mb: 3, textAlign: 'center' }}>
        Unlike existing AI tools that grade in isolation, our system addresses the specific concerns raised by 
        educators and policymakers through a multi-layered, human-supervised approach.
      </Typography>

      <Grid container spacing={2} sx={{ mb: 4 }}>
        {[
          {
            icon: <SecurityIcon sx={{ fontSize: { xs: 20, md: 24 }, color: '#4caf50' }} />,
            title: "Human-First Design",
            description: "95% confidence threshold ensures uncertain cases always go to teachers, addressing concerns about AI reliability in high-stakes assessment."
          },
          {
            icon: <SpeedIcon sx={{ fontSize: { xs: 20, md: 24 }, color: '#2196f3' }} />,
            title: "Crisis-Responsive",
            description: "Directly tackles the examiner shortage by automating routine marking while preserving teacher judgment for complex cases."
          },
          {
            icon: <SchoolIcon sx={{ fontSize: { xs: 20, md: 24 }, color: '#e94560' }} />,
            title: "Regulatory Aligned",
            description: "Meets SEC research requirements for transparent, auditable AI systems that support rather than replace human expertise."
          },
          {
            icon: <EmojiEventsIcon sx={{ fontSize: { xs: 20, md: 24 }, color: '#f39c12' }} />,
            title: "Competition Ready",
            description: "Developed for National AI Challenge 2025, showcasing Ireland's potential to lead in educational AI innovation globally."
          }
        ].map((item, index) => (
          <Grid size={{ xs: 12, sm: 6 }} key={index}>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', p: 2, height: '100%' }}>
              <Box sx={{ mr: 2, mt: 0.5, flexShrink: 0 }}>{item.icon}</Box>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>{item.title}</Typography>
                <Typography color="text.secondary" sx={{ fontSize: { xs: '0.8rem', md: '0.9rem' }, lineHeight: 1.4 }}>{item.description}</Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Impact Projection */}
      <Paper sx={{ 
        mb: { xs: 6, md: 8 }, 
        p: { xs: 2, md: 3 }, 
        background: 'linear-gradient(135deg, rgba(233, 69, 96, 0.1) 0%, rgba(243, 156, 18, 0.1) 100%)', 
        borderRadius: 2, 
        border: '1px solid rgba(243, 156, 18, 0.2)' 
      }}>
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, textAlign: 'center', fontSize: { xs: '1.2rem', md: '1.5rem' } }}>
          Projected Impact
        </Typography>
        
        <Typography variant="body1" paragraph sx={{ fontSize: { xs: '0.9rem', md: '1rem' }, lineHeight: 1.6, mb: 2 }}>
          Our solution could process routine answers in <strong>minutes rather than weeks</strong>, potentially handling 
          60-70% of straightforward responses automatically while flagging complex cases for human review. This would 
          restore the traditional mid-August results timeline, reduce teacher burnout, and provide consistent, 
          transparent grading that students and parents can trust.
        </Typography>
        
        <Typography variant="body1" sx={{ fontSize: { xs: '0.9rem', md: '1rem' }, lineHeight: 1.6, fontStyle: 'italic', textAlign: 'center' }}>
          <strong>For Ireland. By Ireland.</strong> Developed as part of the National AI Challenge 2025, 
          positioning Ireland as a global leader in responsible educational AI.
        </Typography>
      </Paper>

      <Divider sx={{ my: { xs: 4, md: 6 }, background: 'linear-gradient(90deg, transparent, rgba(243, 156, 18, 0.5), transparent)' }} />

      {/* Sources */}
      <Typography 
        variant="h5" 
        component="h2" 
        sx={{ 
          color: '#f39c12',
          fontWeight: 600,
          mb: 3,
          display: 'flex',
          alignItems: 'center',
          fontSize: { xs: '1.2rem', sm: '1.5rem' },
          '&:before': {
            content: '""',
            width: 6,
            height: 28,
            background: 'linear-gradient(45deg, #26c6da, #4dd0e1, #00bcd4)',
            borderRadius: 3,
            mr: 2,
          }
        }}
      >
        Sources
      </Typography>
      
      <Paper sx={{ 
        p: 3, 
        background: 'linear-gradient(135deg, rgba(15, 15, 35, 0.6), rgba(26, 26, 46, 0.4))', 
        border: '1px solid rgba(38, 198, 218, 0.2)',
        borderRadius: 2,
        borderLeft: '4px solid #f39c12',
      }}>
        <Stack spacing={2}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
            <Typography variant="body2" sx={{ color: '#f39c12', fontWeight: 600, minWidth: '30px' }}>
              [1]
            </Typography>
            <Link
              href="https://www.thejournal.ie/leaving-cert-corrected-by-ai-6671133-Apr2025/"
              target="_blank"
              rel="noopener"
              sx={{ 
                color: '#4fc3f7',
                textDecoration: 'none',
                '&:hover': { 
                  textDecoration: 'underline',
                  color: '#29b6f6'
                },
                lineHeight: 1.6
              }}
            >
              "Leaving Cert examiners offer €100,000 contract to research how AI can be used to correct papers" - The Journal, April 2025
            </Link>
          </Box>
          
          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
            <Typography variant="body2" sx={{ color: '#f39c12', fontWeight: 600, minWidth: '30px' }}>
              [2]
            </Typography>
            <Link
              href="https://irishtechnews.ie/techireland-launches-national-ai-challenge-2025/"
              target="_blank"
              rel="noopener"
              sx={{ 
                color: '#4fc3f7',
                textDecoration: 'none',
                '&:hover': { 
                  textDecoration: 'underline',
                  color: '#29b6f6'
                },
                lineHeight: 1.6
              }}
            >
              "TechIreland Launches National AI Challenge 2025 to Drive AI Innovation" - Irish Tech News, 2025
            </Link>
          </Box>
          
          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
            <Typography variant="body2" sx={{ color: '#f39c12', fontWeight: 600, minWidth: '30px' }}>
              [3]
            </Typography>
            <Link
              href="https://www.irishtimes.com/ireland/education/2025/04/07/state-examinations-commission-explores-use-of-ai-to-mark-leaving-cert/"
              target="_blank"
              rel="noopener"
              sx={{ 
                color: '#4fc3f7',
                textDecoration: 'none',
                '&:hover': { 
                  textDecoration: 'underline',
                  color: '#29b6f6'
                },
                lineHeight: 1.6
              }}
            >
              "Examinations Commission explores use of AI to mark Leaving Cert" - The Irish Times, April 7, 2025
            </Link>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
            <Typography variant="body2" sx={{ color: '#f39c12', fontWeight: 600, minWidth: '30px' }}>
              [4]
            </Typography>
            <Link
              href="https://www.irishtimes.com/ireland/education/2025/05/06/irish-teachers-are-using-ai-tools-to-grade-students-work-is-that-really-fair/"
              target="_blank"
              rel="noopener"
              sx={{ 
                color: '#4fc3f7',
                textDecoration: 'none',
                '&:hover': { 
                  textDecoration: 'underline',
                  color: '#29b6f6'
                },
                lineHeight: 1.6
              }}
            >
              "Teachers are using a 'viral' AI tool to grade students' Leaving Cert work. It's convenient - but is it ethical?" - The Irish Times, May 6, 2025
            </Link>
          </Box>
        </Stack>
      </Paper>
    </Box>
  );
};

export default ChallengePage;