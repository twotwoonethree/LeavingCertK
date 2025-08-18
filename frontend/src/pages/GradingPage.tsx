import * as React from 'react';
import {
  Box,
  Container,
  Paper,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
  Stack,
  Chip,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Tooltip,
  Link,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SchemaIcon from '@mui/icons-material/Schema';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import GavelIcon from '@mui/icons-material/Gavel';

type ViewKey = 'simple' | 'animation' | 'accuracy';
type AccuracyViewKey = 'research' | 'flowchart';

const Node: React.FC<{
  title: string;
  subtitle?: string | React.ReactNode;
  variant?: 'start' | 'process' | 'decision' | 'end';
}> = ({ title, subtitle, variant = 'process' }) => {
  const radius =
    variant === 'start' || variant === 'end' ? '999px' : variant === 'decision' ? '8px' : '12px';

  const borderStyle = variant === 'decision' ? '2px dashed' : '2px solid';
  
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
          borderColor: '#f39c12',
          background: 'linear-gradient(135deg, rgba(243, 156, 18, 0.1), rgba(233, 69, 96, 0.05))',
          boxShadow: '0 4px 15px rgba(243, 156, 18, 0.2)',
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

  return (
    <Paper
      variant="outlined"
      sx={{
        p: 2.5,
        borderRadius: radius,
        border: borderStyle,
        height: '100%',
        position: 'relative',
        backdropFilter: 'blur(10px)',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)',
        },
        ...getVariantStyles(),
      }}
    >
      <Typography 
        variant="subtitle1" 
        fontWeight={700}
        sx={{
          background: variant === 'start' || variant === 'end' 
            ? 'linear-gradient(45deg, #e94560, #f39c12)'
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
          }}
        >
          {subtitle}
        </Typography>
      ) : null}
    </Paper>
  );
};

const ArrowDown: React.FC<{ label?: string }> = ({ label }) => (
  <Stack alignItems="center" spacing={1} sx={{ my: 1.5 }}>
    {label ? (
      <Chip
        size="small"
        label={label}
        sx={{ 
          bgcolor: 'rgba(243, 156, 18, 0.1)', 
          borderColor: 'rgba(243, 156, 18, 0.5)',
          color: '#f39c12',
          fontWeight: 600,
          fontSize: '0.75rem',
        }}
        variant="outlined"
      />
    ) : null}
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 32,
        height: 32,
        borderRadius: '50%',
        background: 'linear-gradient(135deg, rgba(233, 69, 96, 0.2), rgba(243, 156, 18, 0.2))',
        border: '1px solid rgba(243, 156, 18, 0.3)',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'scale(1.1)',
          boxShadow: '0 4px 15px rgba(243, 156, 18, 0.3)',
        },
      }}
    >
      <KeyboardArrowDownIcon 
        fontSize="small" 
        sx={{ 
          color: '#f39c12',
          filter: 'drop-shadow(0 0 5px rgba(243, 156, 18, 0.5))',
        }} 
      />
    </Box>
  </Stack>
);

const CodeBlock: React.FC<{ children: React.ReactNode; language?: string }> = ({
  children,
  language,
}) => (
  <Box
    component="pre"
    sx={{
      p: 2.5,
      borderRadius: 2,
      background: 'linear-gradient(135deg, rgba(15, 15, 35, 0.9), rgba(26, 26, 46, 0.8))',
      border: '1px solid rgba(243, 156, 18, 0.2)',
      backdropFilter: 'blur(10px)',
      fontFamily:
        'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',
      fontSize: '0.85rem',
      overflowX: 'auto',
      m: 0,
      color: 'rgba(255, 255, 255, 0.9)',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
      position: 'relative',
      '&::before': {
        content: language ? `"${language}"` : '""',
        position: 'absolute',
        top: 8,
        right: 12,
        fontSize: '0.7rem',
        color: 'rgba(243, 156, 18, 0.7)',
        textTransform: 'uppercase',
        fontWeight: 600,
        letterSpacing: '1px',
      },
    }}
    aria-label={language ? `${language} code` : 'code'}
  >
    {children}
  </Box>
);

const GradingPage: React.FC = () => {
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
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper 
        elevation={0}
        sx={{ 
          p: { xs: 3, sm: 4, md: 5 },
          background: 'linear-gradient(135deg, rgba(15, 15, 35, 0.95), rgba(26, 26, 46, 0.9))',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: 3,
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.4)',
        }}
      >
        <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2}>
          <Stack direction="row" spacing={2} alignItems="center">
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
              }}
            >
              How AI Grading Works
            </Typography>
          </Stack>

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
              Simple Version
            </ToggleButton>
            <ToggleButton value="animation" aria-label="animation">
              Animation
            </ToggleButton>
            <ToggleButton value="accuracy" aria-label="increasing accuracy">
              Increasing Accuracy
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>

        <Divider sx={{ my: 2 }} />

        {view === 'simple' && (
          <Stack spacing={4}>
            <Typography 
              variant="h5" 
              sx={{
                background: 'linear-gradient(45deg, #e94560, #f39c12)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: 700,
                textAlign: 'center',
                mb: 2,
              }}
            >
              AI Challenge — MVP Grading Pipeline
            </Typography>

            <Stack spacing={2} alignItems="stretch">
              {/* Initial Setup Phase */}
              <Stack spacing={1.5} alignItems="stretch">
                <Node title="Start" variant="start" />
                <ArrowDown />
                <Tooltip title="Note: The MVP can use typed input, bypassing OCR in early stages as mentioned in the research.">
                  <Box>
                    <Node title="Teacher grades first 5 papers" subtitle="Seed set for calibration" />
                  </Box>
                </Tooltip>
                <ArrowDown />
                <Node
                  title="Disassemble to JSON per question"
                  subtitle={`- student_answer
- correct_answer (official key)
- rubric (plain text)
- corrected_examples (from the 5 graded papers, same Q)
- max_points`}
                />
              </Stack>
              <ArrowDown />

              {/* Multi-Agent Grading Phase */}
              <Paper
                variant="outlined"
                sx={{
                  p: 3,
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, rgba(233, 69, 96, 0.05), rgba(243, 156, 18, 0.03))',
                  border: '2px solid rgba(243, 156, 18, 0.3)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 4px 20px rgba(243, 156, 18, 0.1)',
                }}
              >
                <Typography 
                  variant="h6" 
                  fontWeight={700} 
                  sx={{ 
                    mb: 2,
                    textAlign: 'center',
                    background: 'linear-gradient(45deg, #e94560, #f39c12)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  For each question (run in parallel)
                </Typography>
                <Stack
                  direction={{ xs: 'column', md: 'row' }}
                  spacing={2}
                  alignItems={{ xs: 'stretch', md: 'flex-start' }}
                >
                  <Node title="LLM_A: Rubric check" subtitle='Returns → {"points_A", "prob_A"}' />
                  <Node
                    title="LLM_B: Compare to correct answer"
                    subtitle='Returns → {"points_B", "prob_B"}'
                  />
                  <Node
                    title="LLM_C: Compare to corrected examples"
                    subtitle='Returns → {"points_C", "prob_C"}'
                  />
                </Stack>
              </Paper>

              <ArrowDown />

              {/* Decision Making Phase */}
              <Stack spacing={2} alignItems="stretch">
                <Node
                  title="Aggregate"
                  subtitle={`points_final = round(mean(points_A, points_B, points_C))
prob_final   = mean(prob_A, prob_B, prob_C)`}
                />

                <ArrowDown />

                <Node title="prob_final ≥ 0.95 ?" variant="decision" />

                <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} alignItems="stretch">
                  <Paper 
                    variant="outlined" 
                    sx={{ 
                      p: 2.5, 
                      flex: 1, 
                      borderRadius: 2, 
                      background: 'linear-gradient(135deg, rgba(244, 67, 54, 0.1), rgba(244, 67, 54, 0.05))',
                      border: '2px solid rgba(244, 67, 54, 0.3)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 6px 20px rgba(244, 67, 54, 0.2)',
                      },
                    }}
                  >
                    <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                      <Chip size="small" label="No" sx={{ bgcolor: 'rgba(244, 67, 54, 0.2)', color: '#f44336' }} />
                      <GavelIcon fontSize="small" sx={{ color: '#f44336' }} />
                      <Typography fontWeight={700} sx={{ color: '#f44336' }}>Mark for LHR</Typography>
                    </Stack>
                    <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                      Queue for Later Human Review (edge/low-confidence cases).
                    </Typography>
                  </Paper>

                  <Paper 
                    variant="outlined" 
                    sx={{ 
                      p: 2.5, 
                      flex: 1, 
                      borderRadius: 2, 
                      background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.1), rgba(76, 175, 80, 0.05))',
                      border: '2px solid rgba(76, 175, 80, 0.3)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 6px 20px rgba(76, 175, 80, 0.2)',
                      },
                    }}
                  >
                    <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                      <Chip size="small" label="Yes" sx={{ bgcolor: 'rgba(76, 175, 80, 0.2)', color: '#4caf50' }} />
                      <CheckCircleOutlineIcon fontSize="small" sx={{ color: '#4caf50' }} />
                      <Typography fontWeight={700} sx={{ color: '#4caf50' }}>Accept grade</Typography>
                    </Stack>
                    <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                      Persist the AI-accepted score.
                    </Typography>
                  </Paper>
                </Stack>

                <ArrowDown label="After decision" />

                <Node
                  title="Store per-Q result + the 3 subscores"
                  subtitle="Persist scores, probabilities, and decision for auditing."
                  variant="end"
                />
              </Stack>
            </Stack>

            <Accordion 
              defaultExpanded
              sx={{
                background: 'linear-gradient(135deg, rgba(15, 15, 35, 0.6), rgba(26, 26, 46, 0.4))',
                border: '1px solid rgba(243, 156, 18, 0.2)',
                borderRadius: 2,
                '&:before': {
                  display: 'none',
                },
              }}
            >
              <AccordionSummary 
                expandIcon={<ExpandMoreIcon sx={{ color: '#f39c12' }} />}
                sx={{
                  '& .MuiAccordionSummary-content': {
                    margin: '16px 0',
                  },
                }}
              >
                <Typography 
                  variant="subtitle1" 
                  fontWeight={700}
                  sx={{
                    background: 'linear-gradient(45deg, #e94560, #f39c12)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  JSON Example
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <CodeBlock language="json">{`{
  "paper_id": "P001",
  "questions": [
    {
      "q_id": "Q1.a",
      "max_points": 10,
      "rubric": "State thesis on theme T; support with two textual references.",
      "correct_answer": "Model answer text...",
      "corrected_examples": [
        {"answer": "Student A text...", "points": 8},
        {"answer": "Student B text...", "points": 6},
        {"answer": "Student C text...", "points": 9},
        {"answer": "Student D text...", "points": 7},
        {"answer": "Student E text...", "points": 10}
      ],
      "student_answer": "Student's text..."
    }
  ]
}`}</CodeBlock>
              </AccordionDetails>
            </Accordion>

            <Accordion
              sx={{
                background: 'linear-gradient(135deg, rgba(15, 15, 35, 0.6), rgba(26, 26, 46, 0.4))',
                border: '1px solid rgba(243, 156, 18, 0.2)',
                borderRadius: 2,
                '&:before': {
                  display: 'none',
                },
              }}
            >
              <AccordionSummary 
                expandIcon={<ExpandMoreIcon sx={{ color: '#f39c12' }} />}
                sx={{
                  '& .MuiAccordionSummary-content': {
                    margin: '16px 0',
                  },
                }}
              >
                <Typography 
                  variant="subtitle1" 
                  fontWeight={700}
                  sx={{
                    background: 'linear-gradient(45deg, #e94560, #f39c12)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Minimal LLM Prompts (A/B/C)
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="subtitle2" sx={{ mb: 1 }}>
                  A) Rubric Check
                </Typography>
                <CodeBlock>{`You are grading {q_id} worth {max_points} points.
Rubric: {rubric}
Student answer: «{student_answer}»
Return strict JSON: {"points_A": INT 0..max_points, "prob_A": FLOAT 0..1}. No extra text.`}</CodeBlock>

                <Divider sx={{ my: 2 }} />

                <Typography variant="subtitle2" sx={{ mb: 1 }}>
                  B) Compare to Correct Answer
                </Typography>
                <CodeBlock>{`Grade {q_id} out of {max_points} by comparing to the official key.
Official key: «{correct_answer}»
Student answer: «{student_answer}»
JSON only: {"points_B": INT 0..max_points, "prob_B": FLOAT 0..1}.`}</CodeBlock>

                <Divider sx={{ my: 2 }} />

                <Typography variant="subtitle2" sx={{ mb: 1 }}>
                  C) Compare to Corrected Examples
                </Typography>
                <CodeBlock>{`Estimate points by analogy to these teacher-graded examples (same question).
Examples (points in parentheses):
«{ex1}» ({pts1})
«{ex2}» ({pts2})
«{ex3}» ({pts3})
«{ex4}» ({pts4})
«{ex5}» ({pts5})
Student answer: «{student_answer}»
JSON only: {"points_C": INT 0..max_points, "prob_C": FLOAT 0..1}.`}</CodeBlock>
              </AccordionDetails>
            </Accordion>

            <Accordion
              sx={{
                background: 'linear-gradient(135deg, rgba(15, 15, 35, 0.6), rgba(26, 26, 46, 0.4))',
                border: '1px solid rgba(243, 156, 18, 0.2)',
                borderRadius: 2,
                '&:before': {
                  display: 'none',
                },
              }}
            >
              <AccordionSummary 
                expandIcon={<ExpandMoreIcon sx={{ color: '#f39c12' }} />}
                sx={{
                  '& .MuiAccordionSummary-content': {
                    margin: '16px 0',
                  },
                }}
              >
                <Typography 
                  variant="subtitle1" 
                  fontWeight={700}
                  sx={{
                    background: 'linear-gradient(45deg, #e94560, #f39c12)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Aggregation Logic
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <CodeBlock>{`points_final = round( (points_A + points_B + points_C) / 3 )
prob_final   = (prob_A + prob_B + prob_C) / 3

if prob_final >= 0.95:
    accept
else:
    LHR`}</CodeBlock>
              </AccordionDetails>
            </Accordion>

            <Accordion
              sx={{
                background: 'linear-gradient(135deg, rgba(15, 15, 35, 0.6), rgba(26, 26, 46, 0.4))',
                border: '1px solid rgba(243, 156, 18, 0.2)',
                borderRadius: 2,
                '&:before': {
                  display: 'none',
                },
              }}
            >
              <AccordionSummary 
                expandIcon={<ExpandMoreIcon sx={{ color: '#f39c12' }} />}
                sx={{
                  '& .MuiAccordionSummary-content': {
                    margin: '16px 0',
                  },
                }}
              >
                <Typography 
                  variant="subtitle1" 
                  fontWeight={700}
                  sx={{
                    background: 'linear-gradient(45deg, #e94560, #f39c12)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Python Tasks
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <CodeBlock>{`- Load the JSON.
- Make 3 LLM calls per question (A/B/C).
- Parse JSON safely; clamp points to [0, max_points].
- Compute points_final, prob_final, decide accept/LHR.
- Save a CSV: paper_id,q_id,points_A,B,C,points_final,prob_A,B,C,prob_final,decision.`}</CodeBlock>
              </AccordionDetails>
            </Accordion>
          </Stack>
        )}

        {view === 'animation' && (
          <Box 
            sx={{ 
              py: 8, 
              textAlign: 'center',
              background: 'linear-gradient(135deg, rgba(233, 69, 96, 0.05), rgba(243, 156, 18, 0.05))',
              borderRadius: 3,
              border: '1px solid rgba(243, 156, 18, 0.2)',
            }}
          >
            <Tooltip title="Coming soon">
              <Box
                sx={{
                  display: 'inline-flex',
                  p: 2,
                  borderRadius: '50%',
                  background: 'linear-gradient(45deg, #e94560, #f39c12)',
                  mb: 2,
                }}
              >
                <PlayCircleOutlineIcon fontSize="large" sx={{ color: 'white' }} />
              </Box>
            </Tooltip>
            <Typography 
              variant="h5" 
              sx={{ 
                mt: 2,
                background: 'linear-gradient(45deg, #e94560, #f39c12)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: 700,
              }}
            >
              Animation (placeholder)
            </Typography>
            <Typography variant="body1" sx={{ mt: 1, color: 'rgba(255, 255, 255, 0.7)' }}>
              A step-through animated flow will appear here.
            </Typography>
          </Box>
        )}

        {view === 'accuracy' && (
          <Stack sx={{ py: 2 }} spacing={2}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Typography 
                variant="h5"
                sx={{
                  background: 'linear-gradient(45deg, #e94560, #f39c12)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontWeight: 700,
                }}
              >
                Increasing Accuracy
              </Typography>
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
            </Stack>

            {accuracyView === 'research' && (
              <Box>
                <Typography variant="h5" component="h2" gutterBottom>
                  Enhancing AI-Assisted Exam Grading Accuracy
                </Typography>
                <Typography variant="body1" paragraph>
                  Our hybrid AI-human grading system can be made progressively more accurate and
                  reliable by combining advanced AI techniques with rigorous validation. Key
                  strategies include better models and training data, ensemble and multi-pass
                  grading, statistical calibration, and robust OCR handling – all backed by recent
                  research. Below we outline major improvements and incremental steps, citing
                  relevant studies and examples.
                </Typography>

                <Typography variant="h6" component="h3" sx={{ mt: 3, mb: 1 }}>
                  Expanded Data and Specialized Model Training
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>More Training Data:</strong> Acquire large corpora of past exams and
                  human-graded answers. For example, collect thousands of Leaving Certificate
                  responses along with marks. This data lets us fine-tune models or train
                  auxiliary components. Prior work shows that injecting domain examples
                  (few-shot or fine-tuning) greatly improves consistency.<sup>1, 2</sup> For
                  instance, explicitly encoding a detailed rubric into prompts (telling the AI
                  exactly what an instructor looks for) gave a “biggest jump in accuracy” in
                  grading.<sup>1</sup>
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>Fine-tuning & Custom Models:</strong> While current LLMs can work
                  zero-shot, fine-tuning on relevant content can further boost accuracy. We can
                  train a grading-specific model (or LoRA/fine-tune GPT-4/GPT-3 on exam data).
                  Research suggests hybrid models that combine LLM embeddings with traditional
                  features (readability, coherence, etc.) outperform standard AES systems.
                  <sup>2, 3</sup> For example, a recent study built a hybrid GPT-based essay
                  scorer with added linguistic features and achieved higher agreement with human
                  graders than many state-of-the-art systems.<sup>2, 3</sup> In practice, we
                  could fine-tune an open LLM (e.g. Llama, Mixtral) or train a lightweight
                  scoring model on annotated essays to capture LC-specific patterns.
                </Typography>

                <Typography variant="h6" component="h3" sx={{ mt: 3, mb: 1 }}>
                  Ensemble and Multi-Pass Grading
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>Multiple LLM Agents:</strong> As in our prototype design, using more
                  than one AI “grader” can reduce errors. Recent work on ensemble LLMs shows
                  combining several models or passes yields more accurate and balanced scoring.
                  <sup>4, 5</sup> For example, the Ensemble ToT framework had three LLMs grade an
                  answer and a fourth reconcile differences. This compensates for individual model
                  weaknesses and produces clearer reasoning.<sup>4</sup> Similarly, averaging or
                  voting among multiple LLM outputs helps avoid over-reliance on any single
                  model’s quirks.<sup>5</sup> We plan incremental steps: start with one LLM and
                  prompt it twice, then add a second model (like GPT-4 and Llama-3), and finally
                  implement a debate or voting phase.
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>Prompt Engineering and Debates:</strong> Encourage the LLM to “think
                  step-by-step” or use chain-of-thought to reduce hallucination. Techniques like
                  Tree-of-Thought or internal debate can be adapted: e.g. have one pass generate
                  a score and reasoning, then another pass critiques it, or have two LLMs debate
                  the correct score. Early research (Ensemble ToT) suggests these approaches
                  improve explainability and accuracy.<sup>6, 4</sup> We can prototype by calling
                  the AI a second time with the first answer and “verify or correct” prompt, which
                  is effectively a simple two-agent check. If their scores disagree, we lower
                  confidence and flag for human review.<sup>1</sup>
                </Typography>

                <Typography variant="h6" component="h3" sx={{ mt: 3, mb: 1 }}>
                  Uncertainty Calibration and Psychometric Methods
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>Confidence Scoring:</strong> Modern LLMs do not natively output
                  well-calibrated confidence, so we explicitly elicit uncertainty. For instance, we
                  ask the AI to output a probability or confidence for its score. Research on LLMs
                  emphasizes this step: “Uncertainty quantification is pivotal to enhance
                  trustworthiness by estimating confidence in outputs”.<sup>7</sup> Practically, we
                  treat low-confidence outputs as invites for human oversight. We can also
                  calibrate these confidences by testing on known answers: if GPT tends to over-
                  or under-estimate certainty, adjust thresholds.
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>Calibration Techniques:</strong> Translate raw confidences into reliable
                  probabilities using temperature scaling or isotonic regression, validated with
                  reliability diagrams and Expected Calibration Error (ECE). Use these diagnostics
                  to tune decision thresholds so auto-approvals remain precise even as data
                  distributions drift.
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>Item Response Theory (IRT) and Threshold Tuning:</strong> Psychometric
                  models can guide when to trust AI grades. A study by Kortemeyer (2024) applied
                  IRT to AI grading and found that setting a confidence threshold (e.g. only
                  auto-grade when AI is very certain) keeps accuracy high.<sup>8, 9</sup> In their
                  experiments, an AI with such thresholds achieved R² ≈0.96 compared to human
                  grading when reviewing just 20% of answers – a huge workload reduction.
                  <sup>9</sup> We should similarly tune our 0.95 confidence cutoff (or adaptively
                  choose it by question difficulty) so that only very sure answers are
                  auto-approved. Over time, as the AI is exposed to more examples, we can revisit
                  these thresholds.
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>Validation Studies:</strong> Continuously compare AI scores with human
                  graders. For example, periodically have teachers re-grade a random sample of
                  AI-graded answers to check consistency. If discrepancies arise, use them as new
                  training/fine-tuning data. This loop mirrors how the APS study had humans grade
                  a batch, refined prompts, and iteratively improved AI grading.<sup>10</sup>
                </Typography>

                <Typography variant="h6" component="h3" sx={{ mt: 3, mb: 1 }}>
                  OCR and Input Quality
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>State-of-the-Art Handwriting OCR:</strong> Recognizing handwritten
                  answers is a major error source. Recent benchmarks report only ~64% average
                  accuracy on varied handwriting.<sup>11</sup> To improve this, use the best OCR
                  tools (e.g. Google Vision, Amazon Textract, GPT-4 Vision) and pre-process
                  images (deskew, binarize, etc.). We may also train or fine-tune a handwriting
                  recognition model on sample scripts. Probabilistic OCR: Retain the OCR
                  confidence for each word and flag uncertain text for review. For example, if a
                  word’s OCR confidence is low, the system highlights it so either a human checks
                  it or the AI knows it’s unsure. This “confidence-based transcription” prevents
                  mis-reading critical facts. In the hackathon, we can demo this by showing an
                  image snippet with an ambiguous word and the AI deferring to human judgement.
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>Backup with Typed Input:</strong> As an MVP shortcut, our prototype can
                  allow typing answers instead of relying fully on OCR. Once the grading logic is
                  solid, we can run more OCR experiments. In production, a human could verify
                  OCR-outsourced text, or the AI itself could ask clarifying prompts about
                  illegible parts.
                </Typography>

                <Typography variant="h6" component="h3" sx={{ mt: 3, mb: 1 }}>
                  Incremental Improvement Roadmap
                </Typography>
                <Stack component="ul" spacing={1} sx={{ pl: 2, '& li': { pl: 1 } }}>
                  <Typography component="li">
                    <strong>MVP First:</strong> Build the basic pipeline (as sketched above) with
                    typed or simple OCR input and one LLM agent. Show that it can grade a couple
                    of questions with basic rubric prompts.
                  </Typography>
                  <Typography component="li">
                    <strong>Add Transparency:</strong> Modify prompts so the AI explains its
                    scoring (e.g. listing which rubric points it found). This makes grading
                    decisions auditable and helps debug mistakes.<sup>1</sup>
                  </Typography>
                  <Typography component="li">
                    <strong>Integrate Second Pass:</strong> Implement a second grading pass (same
                    or different prompt) and compare the two scores. If they match, confidence is
                    higher; if not, mark for human. Use the second pass to compute prob_B, points_B
                    as in our plan, and take the mean with the first pass.
                  </Typography>
                  <Typography component="li">
                    <strong>Pilot Ensembles:</strong> Use two different LLM models (e.g. GPT-4 and
                    an open model like Llama) in parallel on a few questions. Merge their scores
                    (averaging or majority vote) to see improvement. Early tests from research
                    (and common ML practice) suggest ensemble averaging reduces variance.
                    <sup>4, 5</sup>
                  </Typography>
                  <Typography component="li">
                    <strong>Confidence & Threshold Testing:</strong> On a test set graded by
                    teachers, measure the AI’s confidence calibration (e.g., reliability diagrams,
                    ECE) and monitor disagreement/variance. Adjust the ≥0.95 threshold as needed
                    so that false automations are rare.
                  </Typography>
                  <Typography component="li">
                    <strong>Data Collection and Fine-Tuning:</strong> As we gather teacher-graded
                    examples (even dozens of scripts), consider fine-tuning or few-shot prompt
                    refinement. We will also incorporate “corrected examples” into prompts (LLM_C
                    in our design) to give the AI analogies. Over time, adding more examples
                    should improve LLM_C’s reliability.
                  </Typography>
                  <Typography component="li">
                    <strong>Measure Accuracy:</strong> Compare AI grades vs. human grades
                    quantitatively. For instance, compute agreement or correlation (as in the APS
                    study’s R²) on sample papers. Track metrics like Exact Agreement and Adjacent
                    Agreement from AES literature to verify progress.
                  </Typography>
                  <Typography component="li">
                    <strong>Iterate with Users:</strong> Engage educators to review outputs and
                    suggest rubric clarifications. Feedback will refine prompts (e.g. clarifying
                    partial credit rules). The APS author noted that human insight into “what
                    counts as evidence” was crucial – we’ll incorporate such domain knowledge
                    into prompt instructions or model training.<sup>10</sup>
                  </Typography>
                </Stack>

                <Typography variant="h6" component="h3" sx={{ mt: 3, mb: 1 }}>
                  Conclusion and Outlook
                </Typography>
                <Typography variant="body1" paragraph>
                  By implementing these strategies, we expect the AI grader’s accuracy to approach
                  human levels while drastically cutting grading time. In the short term, we focus
                  on a working prototype (“Simple Version” with core pipeline and illustrative
                  diagrams). In parallel, we plan research extensions (the “Increasing Accuracy”
                  section) as placeholders: for example, training a custom scoring model or
                  developing an on-the-fly debate among AI agents. Ultimately, a phased approach
                  ensures early wins (demo of fast autograding) while leaving room for advanced
                  improvements.
                </Typography>
                <Typography variant="body1" paragraph>
                  In summary, the path to high-accuracy AI grading lies in grounding the AI in
                  clear rubrics, using ensembles or multiple passes for redundancy, calibrating
                  confidence with human supervision, and continually refining with real data. We
                  will implement each of these with best practices from recent literature to make
                  our system both powerful and trustworthy.
                </Typography>

                <Typography variant="h6" component="h3" sx={{ mt: 3, mb: 1 }}>
                  Sources
                </Typography>
                <Typography variant="body1" paragraph>
                  We build on emerging research in AI grading and evaluation. Recent studies show
                  GPT-4 can match or exceed inter-rater human agreement when given detailed
                  rubrics,<sup>1</sup> and that combining LLM insights with linguistic features
                  yields state-of-art essay scoring.<sup>2, 3</sup> Work on ensemble LLMs
                  demonstrates that multi-model voting and debate improve grading consistency.
                  <sup>4, 5</sup> Finally, psychometric analysis confirms that thresholding by
                  confidence (invoking human review when uncertain) retains high precision.
                  <sup>8, 9, 7</sup> We will use these findings to guide our development and tuning.
                </Typography>
                <Stack spacing={1} sx={{ mt: 2 }}>
                  <Typography variant="body2">
                    <sup>1, 10</sup>{' '}
                    <Link
                      href="https://www.aps.org/apsnews/2025/07/what-happens-ai-grading"
                      target="_blank"
                      rel="noopener"
                    >
                      What happens when AI does the grading? | American Physical Society
                    </Link>
                  </Typography>
                  <Typography variant="body2">
                    <sup>2, 3</sup>{' '}
                    <Link
                      href="https://www.nature.com/articles/s41598-025-87862-3?error=cookies_not_supported&code=4fe8f26b-2467-43ebb989-758abdc9c7e9"
                      target="_blank"
                      rel="noopener"
                    >
                      An LLM-based hybrid approach for enhanced automated essay scoring | Scientific Reports
                    </Link>
                  </Typography>
                  <Typography variant="body2">
                    <sup>4, 5, 6</sup>{' '}
                    <Link
                      href="https://arxiv.org/html/2502.16399v1"
                      target="_blank"
                      rel="noopener"
                    >
                      Ensemble ToT of LLMs and Its Application to Automatic Grading System for Supporting Self-Learning
                    </Link>
                  </Typography>
                  <Typography variant="body2">
                    <sup>7</sup>{' '}
                    <Link
                      href="https://arxiv.org/html/2503.15850v1"
                      target="_blank"
                      rel="noopener"
                    >
                      Uncertainty Quantification and Confidence Calibration in Large Language Models: A Survey
                    </Link>
                  </Typography>
                  <Typography variant="body2">
                    <sup>8, 9</sup>{' '}
                    <Link
                      href="https://arxiv.org/abs/2410.19409"
                      target="_blank"
                      rel="noopener"
                    >
                      [2410.19409] Assessing Confidence in AI-Assisted Grading of Physics Exams through Psychometrics: An Exploratory Study
                    </Link>
                  </Typography>
                  <Typography variant="body2">
                    <sup>11</sup>{' '}
                    <Link
                      href="https://research.aimultiple.com/handwriting-recognition/"
                      target="_blank"
                      rel="noopener"
                    >
                      Handwriting Recognition Benchmark: LLMs vs OCRs in 2025
                    </Link>
                  </Typography>
                </Stack>
              </Box>
            )}

            {accuracyView === 'flowchart' && (
              <Stack spacing={3} alignItems="stretch">
                <Typography 
                  variant="h5" 
                  align="center" 
                  sx={{ 
                    mb: 3,
                    background: 'linear-gradient(45deg, #e94560, #f39c12)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    fontWeight: 700,
                  }}
                >
                  AI-Human Hybrid Grading — Advanced Pipeline
                </Typography>
                
                {/* Initial Processing Phase */}
                <Stack spacing={2} alignItems="stretch">
                  <Node title="Start" variant="start" />
                  <ArrowDown />
                  <Stack direction={{ xs: 'column', lg: 'row' }} spacing={2} alignItems="stretch">
                    <Node title="Scan Script Images" />
                    <Node
                      title="Preprocess + OCR"
                      subtitle="Token-level confidence, denoise/deskew"
                    />
                    <Node
                      title="Low-confidence tokens?"
                      variant="decision"
                      subtitle="YES → Mark spans for LHR aide & show image snippets"
                    />
                  </Stack>
                  <ArrowDown label="Continue with best-guess text + flags" />

                  {/* Parallelized step to match ASCII: segmentation + classification */}
                  <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} alignItems="stretch">
                    <Node title="Segment Script → Questions" />
                    <Node title="Classify Q-Type: MCQ | Short/Math | Essay" />
                  </Stack>
                </Stack>

                <ArrowDown label="Path diverges based on question type" />

                <Stack direction={{ xs: 'column', lg: 'row' }} spacing={4} alignItems="flex-start">
                  {/* --- Path 1: MCQ --- */}
                  <Paper
                    sx={{
                      flex: 1,
                      p: 3,
                      borderRadius: 3,
                      background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.1), rgba(76, 175, 80, 0.05))',
                      border: '2px solid rgba(76, 175, 80, 0.3)',
                      backdropFilter: 'blur(10px)',
                    }}
                  >
                    <Stack spacing={2} alignItems="stretch">
                      <Chip 
                        label="MCQ Path" 
                        sx={{ 
                          alignSelf: 'center',
                          bgcolor: 'rgba(76, 175, 80, 0.2)',
                          color: '#4caf50',
                          fontWeight: 600,
                        }} 
                      />
                      <Node
                        title="Rule/Regex Match"
                        subtitle="Simple, deterministic grading for multiple-choice questions."
                      />
                      <ArrowDown />
                      <Node title="Emit Final Grade" variant="end" />
                    </Stack>
                  </Paper>

                  {/* --- Vertical Divider --- */}
                  <Divider 
                    orientation="vertical" 
                    flexItem 
                    sx={{ 
                      display: { xs: 'none', lg: 'block' },
                      borderColor: 'rgba(243, 156, 18, 0.3)',
                      borderWidth: 2,
                    }} 
                  />
                  <Divider 
                    sx={{ 
                      width: '100%', 
                      display: { xs: 'block', lg: 'none' },
                      borderColor: 'rgba(243, 156, 18, 0.3)',
                      borderWidth: 2,
                    }} 
                  />

                  {/* --- Path 2: Advanced --- */}
                  <Paper
                    sx={{
                      flex: 2,
                      p: 3,
                      borderRadius: 3,
                      background: 'linear-gradient(135deg, rgba(233, 69, 96, 0.1), rgba(243, 156, 18, 0.05))',
                      border: '2px solid rgba(243, 156, 18, 0.3)',
                      backdropFilter: 'blur(10px)',
                    }}
                  >
                    <Stack spacing={2} alignItems="stretch">
                      <Chip 
                        label="Short Answer / Essay Path" 
                        sx={{ 
                          alignSelf: 'center',
                          bgcolor: 'rgba(243, 156, 18, 0.2)',
                          color: '#f39c12',
                          fontWeight: 600,
                        }} 
                      />
                    <Tooltip title="Corresponds to Roadmap Step 6: Using teacher-graded examples for analogy.">
                      <Box>
                        <Node
                          title="Reference Pack Builder (per Question)"
                          subtitle={`- Official marking scheme & key/solution
- 'k' teacher-graded examples (+points)
- Retrieval notes (syllabus/excerpts, optional)
- Tool hooks (solver, code runner, calc, citation)`}
                        />
                      </Box>
                    </Tooltip>
                    <ArrowDown />
                    <Tooltip title="Builds on the MVP's A, B, C agents by adding self-consistency (D) and adversarial (E) checkers. Corresponds to Roadmap Steps 2, 3 & 4 (transparency, multi-pass, ensembles).">
                      <Paper
                        variant="outlined"
                        sx={{
                          p: 2,
                          borderColor: 'primary.main',
                          borderWidth: 2,
                          borderStyle: 'dashed',
                          borderRadius: 2,
                        }}
                      >
                        <Typography variant="subtitle1" fontWeight={700} align="center" gutterBottom>
                          Multi-Agent Grading
                        </Typography>
                        <Stack spacing={1}>
                          <Typography variant="body2">
                            <strong>A. Rubric Scorer</strong> → (points_A, conf_A, rationale_A)
                          </Typography>
                          <Typography variant="body2">
                            <strong>B. Key/Solver Aligner</strong> → (points_B, conf_B, rationale_B)
                          </Typography>
                          <Typography variant="body2">
                            <strong>C. Analogy on Examples</strong> → (points_C, conf_C, rationale_C)
                          </Typography>
                          <Typography variant="body2">
                            <strong>D. Self-Consistency / ToT Pass:</strong> sample N rationales,
                            vote/aggregate (diverse CoT paths) → (points_D, conf_D, rationale_D)
                          </Typography>
                          <Typography variant="body2">
                            <strong>E. Adversarial/Fact Checker</strong> → (red flags: hallucination,
                            rubric drift, off-domain, OCR-sensitive spans)
                          </Typography>
                        </Stack>
                      </Paper>
                    </Tooltip>
                    <ArrowDown />
                    <Tooltip title="Corresponds to Roadmap Step 4: Using ensembles (e.g., weighted voting) to improve accuracy.">
                      <Box>
                        <Node
                          title="Ensemble + Meta-Calibrator"
                          subtitle={`- Inputs: {points_* conf_*} from A-D; flags from E
- Weighted voting / stacking meta-model
- Fuses LLM outputs with linguistic features (e.g., coherence, readability)
- Calibration (temperature scaling / isotonic) → prob_final (well-calibrated)
- Uncertainty features: variance, disagreement, flags`}
                        />
                      </Box>
                    </Tooltip>
                    <ArrowDown />
                    <Tooltip title="Corresponds to Roadmap Step 5: Using confidence thresholds to decide between auto-grading and human review.">
                      <Box>
                        <Node
                          title="Psychometric Gate (IRT-guided thresholds)"
                          variant="decision"
                          subtitle={`Choose dynamic τ_Q per question form/difficulty
if (prob_final ≥ τ_Q) AND (variance low) AND (no critical flags)`}
                        />
                      </Box>
                    </Tooltip>
                    <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} alignItems="stretch">
                      <Stack flex={1} spacing={1.25} alignItems="stretch">
                        <ArrowDown label="YES → ACCEPT GRADE" />
                        <Tooltip title="Corresponds to Roadmap Step 2: Providing auditable scoring explanations.">
                          <Box>
                            <Node
                              title="Emit Result + Audit Log"
                              subtitle={`- JSON per Q: subscores, final points, prob_final, rationales, OCR flags
- Explainability bundle for appeals`}
                            />
                          </Box>
                        </Tooltip>
                        <ArrowDown />
                        <Node title="Results Store / Dashboard" subtitle="Analytics & monitoring" />
                      </Stack>
                      <Stack flex={1} spacing={1.25} alignItems="stretch">
                        <ArrowDown label="NO → LHR QUEUE" />
                        <Tooltip title="Corresponds to Roadmap Step 8: Iterating with user feedback to refine rubrics and prompts.">
                          <Box>
                            <Node
                              title="Later Human Review (LHR)"
                              subtitle={`- Focused UI shows flagged tokens/image snips, agent disagreements, rubric lines
- Human decision overrides/edits grade
- Captures rationale & corrections`}
                            />
                          </Box>
                        </Tooltip>
                        <ArrowDown />
                        <Node title="Feedback to Data Lake" subtitle="Human corrections create high-quality training data." />
                      </Stack>
                    </Stack>
                    <ArrowDown label="All results contribute to system monitoring & improvement" />
                    <Tooltip title="This final loop corresponds to the core principle of continuous improvement mentioned throughout the research, especially in sections on 'Validation Studies' and 'Data Collection and Fine-Tuning' (Roadmap Steps 6, 7, 8).">
                      <Box>
                        <Node
                          title="Continuous Learning Loop"
                          subtitle={`- Add human-confirmed labels to training set
- Periodic prompt tuning & few-shot refresh
- Fine-tune scoring heads / local models (LoRA)
- Retrain/improve OCR on LC handwriting
- Drift & calibration monitoring (ECE, coverage)`}
                        />
                      </Box>
                    </Tooltip>
                    <ArrowDown />
                      <Node title="End" variant="end" />
                    </Stack>
                  </Paper>
                </Stack>
              </Stack>
            )}
          </Stack>
        )}
      </Paper>
    </Container>
  );
};

export default GradingPage;
