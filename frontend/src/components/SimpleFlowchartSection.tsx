import * as React from 'react';
import {
  Stack,
  Typography,
  Box,
  Paper,
  Chip,
  Divider,
  Tooltip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import GavelIcon from '@mui/icons-material/Gavel';
import { Node, ArrowDown } from './SharedComponents';

const CodeBlock: React.FC<{ children: React.ReactNode; language?: string }> = ({
  children,
  language,
}) => (
  <Box
    component="pre"
    sx={{
      p: { xs: 1.5, sm: 2.5 },
      borderRadius: 2,
      background: 'linear-gradient(135deg, rgba(42, 44, 54, 0.9), rgba(61, 63, 77, 0.8))',
      border: '1px solid rgba(38, 198, 218, 0.2)',
      backdropFilter: 'blur(10px)',
      fontFamily:
        'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',
      fontSize: { xs: '0.75rem', sm: '0.85rem' },
      overflowX: 'auto',
      overflowY: 'hidden',
      m: 0,
      color: 'rgba(255, 255, 255, 0.9)',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
      position: 'relative',
      whiteSpace: 'pre-wrap',
      wordBreak: 'break-word',
      '&::before': {
        content: language ? `"${language}"` : '""',
        position: 'absolute',
        top: 8,
        right: 12,
        fontSize: { xs: '0.65rem', sm: '0.7rem' },
        color: 'rgba(38, 198, 218, 0.7)',
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

const SimpleFlowchartSection: React.FC = () => {
  return (
    <Stack spacing={4}>
      <Typography 
        variant="h5" 
        sx={{
          background: 'linear-gradient(45deg, #00acc1, #26c6da)',
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
          <Node title="Start" variant="start" size="auto" centered />
          <ArrowDown />
          <Tooltip title="Note: The MVP can use typed input, bypassing OCR in early stages as mentioned in the research.">
            <Box>
              <Node title="Teacher grades first 5 papers" subtitle="Seed set for calibration" size="compact" centered />
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
            size="large"
            centered
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
              background: 'linear-gradient(45deg, #00acc1, #26c6da)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            For each question (run in parallel)
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={{ xs: 2, sm: 1 }}
              alignItems="stretch"
              sx={{ 
                maxWidth: { xs: '100%', sm: '650px' },
                width: { xs: '100%', sm: 'fit-content' }
              }}
            >
              <Node title="LLM_A: Rubric check" subtitle='Returns → {"points_A", "prob_A"}' size="compact" stepNumber={1} centered />
              <Node
                title="LLM_B: Compare to correct answer"
                subtitle='Returns → {"points_B", "prob_B"}'
                size="compact"
                stepNumber={2}
                centered
              />
              <Node
                title="LLM_C: Compare to corrected examples"
                subtitle='Returns → {"points_C", "prob_C"}'
                size="compact"
                stepNumber={3}
                centered
              />
            </Stack>
          </Box>
        </Paper>

        <ArrowDown />

        {/* Decision Making Phase */}
        <Stack spacing={2} alignItems="stretch">
          <Node
            title="Aggregate"
            subtitle={`points_final = round(mean(points_A, points_B, points_C))
prob_final   = mean(prob_A, prob_B, prob_C)`}
            size="compact"
            centered
          />

          <ArrowDown />

          <Node title="prob_final ≥ 0.95 ?" variant="decision" size="auto" centered />

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems="stretch">
            <Paper 
              variant="outlined" 
              sx={{ 
                p: 2.5, 
                flex: 1, 
                borderRadius: 2, 
                background: 'linear-gradient(135deg, rgba(244, 67, 54, 0.1), rgba(244, 67, 54, 0.05))',
                border: '2px solid rgba(244, 67, 54, 0.3)',
                transition: 'all 0.3s ease',
                position: 'relative',
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
                position: 'relative',
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
            size="large"
            centered
          />
        </Stack>
      </Stack>

      <Accordion 
        defaultExpanded
        sx={{
          background: 'linear-gradient(135deg, rgba(15, 15, 35, 0.6), rgba(26, 26, 46, 0.4))',
          border: '1px solid rgba(38, 198, 218, 0.2)',
          borderRadius: 2,
          '&:before': {
            display: 'none',
          },
        }}
      >
        <AccordionSummary 
          expandIcon={<ExpandMoreIcon sx={{ color: '#26c6da' }} />}
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
              background: 'linear-gradient(45deg, #00acc1, #26c6da)',
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
          border: '1px solid rgba(38, 198, 218, 0.2)',
          borderRadius: 2,
          '&:before': {
            display: 'none',
          },
        }}
      >
        <AccordionSummary 
          expandIcon={<ExpandMoreIcon sx={{ color: '#26c6da' }} />}
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
              background: 'linear-gradient(45deg, #00acc1, #26c6da)',
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
          border: '1px solid rgba(38, 198, 218, 0.2)',
          borderRadius: 2,
          '&:before': {
            display: 'none',
          },
        }}
      >
        <AccordionSummary 
          expandIcon={<ExpandMoreIcon sx={{ color: '#26c6da' }} />}
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
              background: 'linear-gradient(45deg, #00acc1, #26c6da)',
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
          border: '1px solid rgba(38, 198, 218, 0.2)',
          borderRadius: 2,
          '&:before': {
            display: 'none',
          },
        }}
      >
        <AccordionSummary 
          expandIcon={<ExpandMoreIcon sx={{ color: '#26c6da' }} />}
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
              background: 'linear-gradient(45deg, #00acc1, #26c6da)',
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
  );
};

export default SimpleFlowchartSection;