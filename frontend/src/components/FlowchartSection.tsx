import * as React from 'react';
import {
  Stack,
  Typography,
  Box,
  Paper,
  Chip,
  Divider,
  Tooltip,
} from '@mui/material';
import { Node, ArrowDown } from './SharedComponents';

const FlowchartSection: React.FC = () => {
  return (
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
        <Node title="Start" variant="start" size="auto" centered />
        <ArrowDown />
        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <Stack 
            direction={{ xs: 'column', lg: 'row' }} 
            spacing={{ xs: 2, lg: 1 }}
            alignItems="stretch"
            sx={{ 
              maxWidth: { xs: '100%', lg: '700px' },
              width: { xs: '100%', lg: 'fit-content' }
            }}
          >
            <Node title="Scan Script Images" subtitle="Capture handwritten exam scripts" size="large" stepNumber={1} centered />
            <Node
              title="Preprocess + OCR"
              subtitle="Token-level confidence, denoise/deskew"
              size="large"
              stepNumber={2}
              centered
            />
            <Node
              title="Low-confidence tokens?"
              variant="decision"
              subtitle="YES → Mark spans for LHR aide & show image snippets"
              size="large"
              stepNumber={3}
              centered
            />
          </Stack>
        </Box>
        <ArrowDown label="Continue with best-guess text + flags" />

        {/* Parallelized step to match ASCII: segmentation + classification */}
        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <Stack 
            direction={{ xs: 'column', md: 'row' }} 
            spacing={{ xs: 2, md: 1 }}
            alignItems="stretch"
            sx={{ 
              maxWidth: { xs: '100%', md: '500px' },
              width: { xs: '100%', md: 'fit-content' }
            }}
          >
            <Node title="Segment Script → Questions" size="compact" stepNumber={4} centered />
            <Node title="Classify Q-Type: MCQ | Short/Math | Essay" size="compact" stepNumber={5} centered />
          </Stack>
        </Box>
        <ArrowDown label="Path diverges based on question type" />
      </Stack>

      <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 2, sm: 3, md: 4 }} alignItems="stretch">
        {/* --- Path 1: MCQ --- */}
        <Paper
          sx={{
            flex: 1,
            p: { xs: 1.5, sm: 2, md: 3 },
            borderRadius: 3,
            background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.1), rgba(76, 175, 80, 0.05))',
            border: '2px solid rgba(76, 175, 80, 0.3)',
            backdropFilter: 'blur(10px)',
            minWidth: 0,
            maxWidth: '100%',
            overflow: 'hidden',
            wordBreak: 'break-word',
            overflowWrap: 'break-word',
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
              size="large"
            />
            <ArrowDown variant="success" />
            <Node title="Emit Final Grade" variant="end" size="auto" centered />
          </Stack>
        </Paper>

        {/* --- Vertical Divider --- */}
        <Divider 
          orientation="vertical" 
          flexItem 
          sx={{ 
            display: { xs: 'none', md: 'block' },
            borderColor: 'rgba(243, 156, 18, 0.3)',
            borderWidth: 2,
          }} 
        />
        <Divider 
          sx={{ 
            width: '100%', 
            display: { xs: 'block', md: 'none' },
            borderColor: 'rgba(243, 156, 18, 0.3)',
            borderWidth: 2,
          }} 
        />

        {/* --- Path 2: Reference Pack Builder --- */}
        <Paper
          sx={{
            flex: 1,
            p: { xs: 1.5, sm: 2, md: 3 },
            borderRadius: 3,
            background: 'linear-gradient(135deg, rgba(233, 69, 96, 0.1), rgba(243, 156, 18, 0.05))',
            border: '2px solid rgba(243, 156, 18, 0.3)',
            backdropFilter: 'blur(10px)',
            minWidth: 0,
            maxWidth: '100%',
            overflow: 'hidden',
            wordBreak: 'break-word',
            overflowWrap: 'break-word',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Stack spacing={2} alignItems="stretch" sx={{ height: '100%', justifyContent: 'space-between' }}>
            <Box>
              <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                <Chip 
                  label="Short Answer / Essay Path" 
                  sx={{ 
                    bgcolor: 'rgba(243, 156, 18, 0.2)',
                    color: '#f39c12',
                    fontWeight: 600,
                  }} 
                />
              </Box>
              <Tooltip title="Corresponds to Roadmap Step 6: Using teacher-graded examples for analogy.">
                <Box>
                  <Node
                    title="Reference Pack Builder (per Question)"
                    subtitle={`- Official marking scheme & key/solution
- 'k' teacher-graded examples (+points)
- Retrieval notes (syllabus/excerpts, optional)
- Tool hooks (solver, code runner, calc, citation)`}
                    size="large"
                  />
                </Box>
              </Tooltip>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 'auto' }}>
              <ArrowDown />
              <Node title="Continue to Multi-Agent" subtitle="Proceeds to ensemble grading" size="auto" centered />
            </Box>
          </Stack>
        </Paper>
      </Stack>

      <ArrowDown />

      {/* Multi-Agent Grading and Ensemble */}
      <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <Paper
          sx={{
            maxWidth: '800px',
            width: '100%',
            p: { xs: 2, sm: 3 },
            borderRadius: 3,
            background: 'linear-gradient(135deg, rgba(233, 69, 96, 0.08), rgba(243, 156, 18, 0.04))',
            border: '2px solid rgba(243, 156, 18, 0.3)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 4px 20px rgba(243, 156, 18, 0.1)',
          }}
        >
          <Stack spacing={2} alignItems="stretch">
            <Tooltip title="Builds on the MVP's A, B, C agents by adding self-consistency (D) and adversarial (E) checkers. Corresponds to Roadmap Steps 2, 3 & 4 (transparency, multi-pass, ensembles).">
              <Paper
                variant="outlined"
                sx={{
                  p: { xs: 1.5, sm: 2 },
                  borderColor: 'primary.main',
                  borderWidth: 2,
                  borderStyle: 'dashed',
                  borderRadius: 2,
                  overflow: 'hidden',
                  wordBreak: 'break-word',
                  overflowWrap: 'break-word',
                  maxWidth: '100%',
                }}
              >
                <Typography variant="subtitle1" fontWeight={700} align="center" gutterBottom>
                  Multi-Agent Grading
                </Typography>
                <Stack spacing={1}>
                  <Typography variant="body2" sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem' }, wordBreak: 'break-word', overflowWrap: 'break-word' }}>
                    <strong>A. Rubric Scorer</strong><br />
                    → (points_A, conf_A, rationale_A)
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem' }, wordBreak: 'break-word', overflowWrap: 'break-word' }}>
                    <strong>B. Key/Solver Aligner</strong><br />
                    → (points_B, conf_B, rationale_B)
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem' }, wordBreak: 'break-word', overflowWrap: 'break-word' }}>
                    <strong>C. Analogy on Examples</strong><br />
                    → (points_C, conf_C, rationale_C)
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem' }, wordBreak: 'break-word', overflowWrap: 'break-word' }}>
                    <strong>D. Self-Consistency / ToT Pass:</strong><br />
                    sample N rationales, vote/aggregate<br />
                    → (points_D, conf_D, rationale_D)
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem' }, wordBreak: 'break-word', overflowWrap: 'break-word' }}>
                    <strong>E. Adversarial/Fact Checker</strong><br />
                    → red flags: hallucination, rubric drift,<br />
                    off-domain, OCR-sensitive spans
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
- Fuses LLM outputs with linguistic features
- Calibration (temperature scaling / isotonic)
  → prob_final (well-calibrated)  
- Uncertainty features: variance, disagreement, flags`}
                  size="large"
                  centered
                />
              </Box>
            </Tooltip>
          </Stack>
        </Paper>
      </Box>

      <ArrowDown />

      {/* Decision Making and Final Processing */}
      <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <Paper
          sx={{
            maxWidth: '900px',
            width: '100%',
            p: { xs: 2, sm: 3 },
            borderRadius: 3,
            background: 'linear-gradient(135deg, rgba(233, 69, 96, 0.08), rgba(243, 156, 18, 0.04))',
            border: '2px solid rgba(243, 156, 18, 0.3)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 4px 20px rgba(243, 156, 18, 0.1)',
          }}
        >
          <Stack spacing={2} alignItems="stretch">
            <Tooltip title="Corresponds to Roadmap Step 5: Using confidence thresholds to decide between auto-grading and human review.">
              <Box>
                <Node
                  title="Psychometric Gate"
                  variant="decision"
                  subtitle={`IRT-guided thresholds
Choose dynamic τ_Q per question form/difficulty
if (prob_final ≥ τ_Q) AND (variance low) 
AND (no critical flags)`}
                  size="large"
                  centered
                />
              </Box>
            </Tooltip>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems="stretch">
              <Stack flex={1} spacing={1.25} alignItems="stretch">
                <ArrowDown label="YES → ACCEPT GRADE" variant="success" />
                <Tooltip title="Corresponds to Roadmap Step 2: Providing auditable scoring explanations.">
                  <Box>
                    <Node
                      title="Emit Result + Audit Log"
                      subtitle={`- JSON per Q: subscores, final points, 
  prob_final, rationales, OCR flags
- Explainability bundle for appeals`}
                      size="large"
                    />
                  </Box>
                </Tooltip>
                <ArrowDown variant="success" />
                <Node title="Results Store / Dashboard" subtitle="Analytics & monitoring" size="compact" centered />
              </Stack>
              <Stack flex={1} spacing={1.25} alignItems="stretch">
                <ArrowDown label="NO → LHR QUEUE" />
                <Tooltip title="Corresponds to Roadmap Step 8: Iterating with user feedback to refine rubrics and prompts.">
                  <Box>
                    <Node
                      title="Later Human Review (LHR)"
                      subtitle={`- Focused UI shows flagged tokens/image snips, 
  agent disagreements, rubric lines
- Human decision overrides/edits grade
- Captures rationale & corrections`}
                      size="large"
                    />
                  </Box>
                </Tooltip>
                <ArrowDown />
                <Node title="Feedback to Data Lake" subtitle="Human corrections create high-quality training data." size="compact" centered />
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
                  size="large"
                  centered
                />
              </Box>
            </Tooltip>
            <ArrowDown variant="success" />
            <Node title="End" variant="end" size="auto" centered />
          </Stack>
        </Paper>
      </Box>
    </Stack>
  );
};

export default FlowchartSection;