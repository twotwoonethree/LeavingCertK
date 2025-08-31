import React from 'react';
import { Box, Typography, Paper, Stack, Link } from '@mui/material';

const ResearchSection: React.FC = () => {
  return (
    <Box sx={{ 
      maxWidth: '1000px', 
      mx: 'auto',
      px: { xs: 0.5, sm: 2 },
      py: { xs: 2, sm: 3 }
    }}>
        <Paper
          elevation={0}
          sx={{
            textAlign: 'center',
            mb: 4,
            p: { xs: 2, sm: 4 },
            background: 'linear-gradient(135deg, rgba(233, 69, 96, 0.05), rgba(243, 156, 18, 0.03))',
            border: '1px solid rgba(243, 156, 18, 0.2)',
            borderRadius: 3,
            backdropFilter: 'blur(10px)',
            boxShadow: '0 4px 20px rgba(233, 69, 96, 0.1)',
          }}
        >
          <Typography 
            variant="h4"
            component="h2" 
            sx={{
              background: 'linear-gradient(45deg, #00acc1, #26c6da)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontWeight: 700,
              fontSize: { xs: '1.5rem', sm: '2rem' },
              mb: 2,
              letterSpacing: '-0.02em',
            }}
          >
            Enhancing AI-Assisted Exam Grading Accuracy
          </Typography>
          <Box sx={{ width: 80, height: 4, background: 'linear-gradient(45deg, #00acc1, #26c6da)', mx: 'auto', borderRadius: 2, mb: 3 }} />
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
            Our hybrid AI-human grading system can be made progressively more accurate and
            reliable by combining advanced AI techniques with rigorous validation. Key
            strategies include better models and training data, ensemble and multi-pass
            grading, statistical calibration, and robust OCR handling – all backed by recent
            research.
          </Typography>
        </Paper>

        <Typography 
          variant="h5" 
          component="h3" 
          sx={{ 
            color: '#26c6da',
            fontWeight: 600,
            mb: 3,
            display: 'flex',
            alignItems: 'center',
            fontSize: { xs: '1.2rem', sm: '1.5rem' },
            '&:before': {
              content: '""',
              width: 6,
              height: 28,
              background: 'linear-gradient(45deg, #00acc1, #26c6da)',
              borderRadius: 3,
              mr: 2,
            }
          }}
        >
          Expanded Data and Specialized Model Training
        </Typography>
        <Stack spacing={3} sx={{ mb: 4 }}>
          <Paper sx={{ 
            p: { xs: 2, sm: 3 }, 
            background: 'linear-gradient(135deg, rgba(243, 156, 18, 0.1), rgba(243, 156, 18, 0.05))', 
            border: '1px solid rgba(243, 156, 18, 0.3)',
            borderRadius: 2,
            borderLeft: '4px solid #26c6da',
            transition: 'all 0.3s ease',
            '&:hover': {
              borderColor: 'rgba(243, 156, 18, 0.5)',
              boxShadow: '0 4px 15px rgba(243, 156, 18, 0.2)',
            }
          }}>
            <Typography variant="body1" sx={{ lineHeight: 1.7, color: 'rgba(255, 255, 255, 0.9)', fontSize: { xs: '0.9rem', sm: '1rem' } }}>
              <Box component="span" sx={{ fontWeight: 700, color: '#26c6da', fontSize: '1.1em' }}>More Training Data:</Box> Acquire large corpora of past exams and
              human-graded answers. For example, collect thousands of Leaving Certificate
              responses along with marks. This data lets us fine-tune models or train
              auxiliary components. Prior work shows that injecting domain examples
              (few-shot or fine-tuning) greatly improves consistency.<sup>1, 2</sup> For
              instance, explicitly encoding a detailed rubric into prompts (telling the AI
              exactly what an instructor looks for) gave a "biggest jump in accuracy" in
              grading.<sup>1</sup>
            </Typography>
          </Paper>
          <Paper sx={{ 
            p: { xs: 2, sm: 3 }, 
            background: 'linear-gradient(135deg, rgba(233, 69, 96, 0.1), rgba(233, 69, 96, 0.05))', 
            border: '1px solid rgba(233, 69, 96, 0.3)',
            borderRadius: 2,
            borderLeft: '4px solid #00acc1',
            transition: 'all 0.3s ease',
            '&:hover': {
              borderColor: 'rgba(233, 69, 96, 0.5)',
              boxShadow: '0 4px 15px rgba(233, 69, 96, 0.2)',
            }
          }}>
            <Typography variant="body1" sx={{ lineHeight: 1.7, color: 'rgba(255, 255, 255, 0.9)', fontSize: { xs: '0.9rem', sm: '1rem' } }}>
              <Box component="span" sx={{ fontWeight: 700, color: '#00acc1', fontSize: '1.1em' }}>Fine-tuning & Custom Models:</Box> While current LLMs can work
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
          </Paper>
        </Stack>

        <Typography 
          variant="h5" 
          component="h3" 
          sx={{ 
            color: '#26c6da',
            fontWeight: 600,
            mb: 3,
            display: 'flex',
            alignItems: 'center',
            fontSize: { xs: '1.2rem', sm: '1.5rem' },
            '&:before': {
              content: '""',
              width: 6,
              height: 28,
              background: 'linear-gradient(45deg, #00acc1, #26c6da)',
              borderRadius: 3,
              mr: 2,
            }
          }}
        >
          Ensemble and Multi-Pass Grading
        </Typography>
          <Stack spacing={3}>
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
                <Box component="span" sx={{ fontWeight: 700, color: '#4caf50', fontSize: '1.1em' }}>Multiple LLM Agents:</Box> As in our prototype design, using more
                than one AI "grader" can reduce errors. Recent work on ensemble LLMs shows
                combining several models or passes yields more accurate and balanced scoring.
                <sup>4, 5</sup> For example, the Ensemble ToT framework had three LLMs grade an
                answer and a fourth reconcile differences. This compensates for individual model
                weaknesses and produces clearer reasoning.<sup>4</sup> Similarly, averaging or
                voting among multiple LLM outputs helps avoid over-reliance on any single
                model's quirks.<sup>5</sup> We plan incremental steps: start with one LLM and
                prompt it twice, then add a second model (like GPT-4 and Llama-3), and finally
                implement a debate or voting phase.
              </Typography>
            </Paper>
            <Paper sx={{
              p: { xs: 2, sm: 3 },
              background: 'linear-gradient(135deg, rgba(156, 39, 176, 0.1), rgba(156, 39, 176, 0.05))',
              border: '1px solid rgba(156, 39, 176, 0.3)',
              borderRadius: 2,
              borderLeft: '4px solid #9c27b0',
              transition: 'all 0.3s ease',
              '&:hover': {
                borderColor: 'rgba(156, 39, 176, 0.5)',
                boxShadow: '0 4px 15px rgba(156, 39, 176, 0.2)',
              }
            }}>
              <Typography variant="body1" sx={{ lineHeight: 1.7, color: 'rgba(255, 255, 255, 0.9)', fontSize: { xs: '0.9rem', sm: '1rem' } }}>
                <Box component="span" sx={{ fontWeight: 700, color: '#9c27b0', fontSize: '1.1em' }}>Prompt Engineering and Debates:</Box> Encourage the LLM to "think
                step-by-step" or use chain-of-thought to reduce hallucination. Techniques like
                Tree-of-Thought or internal debate can be adapted: e.g. have one pass generate
                a score and reasoning, then another pass critiques it, or have two LLMs debate
                the correct score. Early research (Ensemble ToT) suggests these approaches
                improve explainability and accuracy.<sup>6, 4</sup> We can prototype by calling
                the AI a second time with the first answer and "verify or correct" prompt, which
                is effectively a simple two-agent check. If their scores disagree, we lower
                confidence and flag for human review.<sup>1</sup>
              </Typography>
            </Paper>
          </Stack>

          <Typography 
            variant="h6" 
            component="h4" 
            sx={{ 
              mt: 4, 
              mb: 3,
              color: '#4fc3f7',
              fontWeight: 600,
              fontSize: { xs: '1rem', sm: '1.25rem' },
              display: 'flex',
              alignItems: 'center',
              '&:before': {
                content: '""',
                width: 4,
                height: 20,
                background: 'linear-gradient(45deg, #4fc3f7, #29b6f6)',
                borderRadius: 2,
                mr: 2,
              }
            }}
          >
            Uncertainty Calibration and Psychometric Methods
          </Typography>
          <Stack spacing={2}>
            <Typography variant="body1" sx={{ lineHeight: 1.7, color: 'rgba(255, 255, 255, 0.9)', fontSize: { xs: '0.9rem', sm: '1rem' } }}>
              <Box component="span" sx={{ fontWeight: 700, color: '#4fc3f7' }}>Confidence Scoring:</Box> Modern LLMs do not natively output
              well-calibrated confidence, so we explicitly elicit uncertainty. For instance, we
              ask the AI to output a probability or confidence for its score. Research on LLMs
              emphasizes this step: "Uncertainty quantification is pivotal to enhance
              trustworthiness by estimating confidence in outputs".<sup>7</sup> Practically, we
              treat low-confidence outputs as invites for human oversight. We can also
              calibrate these confidences by testing on known answers: if GPT tends to over-
              or under-estimate certainty, adjust thresholds.
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.7, color: 'rgba(255, 255, 255, 0.9)', fontSize: { xs: '0.9rem', sm: '1rem' } }}>
              <Box component="span" sx={{ fontWeight: 700, color: '#29b6f6' }}>Calibration Techniques:</Box> Translate raw confidences into reliable
              probabilities using temperature scaling or isotonic regression, validated with
              reliability diagrams and Expected Calibration Error (ECE). Use these diagnostics
              to tune decision thresholds so auto-approvals remain precise even as data
              distributions drift.
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.7, color: 'rgba(255, 255, 255, 0.9)', fontSize: { xs: '0.9rem', sm: '1rem' } }}>
              <Box component="span" sx={{ fontWeight: 700, color: '#039be5' }}>Item Response Theory (IRT) and Threshold Tuning:</Box> Psychometric
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
            <Typography variant="body1" sx={{ lineHeight: 1.7, color: 'rgba(255, 255, 255, 0.9)', fontSize: { xs: '0.9rem', sm: '1rem' } }}>
              <Box component="span" sx={{ fontWeight: 700, color: '#0288d1' }}>Validation Studies:</Box> Continuously compare AI scores with human
              graders. For example, periodically have teachers re-grade a random sample of
              AI-graded answers to check consistency. If discrepancies arise, use them as new
              training/fine-tuning data. This loop mirrors how the APS study had humans grade
              a batch, refined prompts, and iteratively improved AI grading.<sup>10</sup>
            </Typography>
          </Stack>

          <Typography 
            variant="h6" 
            component="h4" 
            sx={{ 
              mt: 4, 
              mb: 3,
              color: '#66bb6a',
              fontWeight: 600,
              fontSize: { xs: '1rem', sm: '1.25rem' },
              display: 'flex',
              alignItems: 'center',
              '&:before': {
                content: '""',
                width: 4,
                height: 20,
                background: 'linear-gradient(45deg, #66bb6a, #4caf50)',
                borderRadius: 2,
                mr: 2,
              }
            }}
          >
            OCR and Input Quality
          </Typography>
          <Stack spacing={2}>
            <Typography variant="body1" sx={{ lineHeight: 1.7, color: 'rgba(255, 255, 255, 0.9)', fontSize: { xs: '0.9rem', sm: '1rem' } }}>
              <Box component="span" sx={{ fontWeight: 700, color: '#66bb6a' }}>State-of-the-Art Handwriting OCR:</Box> Recognizing handwritten
              answers is a major error source. Recent benchmarks report only ~64% average
              accuracy on varied handwriting.<sup>11</sup> To improve this, use the best OCR
              tools (e.g. Google Vision, Amazon Textract, GPT-4 Vision) and pre-process
              images (deskew, binarize, etc.). We may also train or fine-tune a handwriting
              recognition model on sample scripts. Probabilistic OCR: Retain the OCR
              confidence for each word and flag uncertain text for review. For example, if a
              word's OCR confidence is low, the system highlights it so either a human checks
              it or the AI knows it's unsure. This "confidence-based transcription" prevents
              mis-reading critical facts. In the hackathon, we can demo this by showing an
              image snippet with an ambiguous word and the AI deferring to human judgement.
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.7, color: 'rgba(255, 255, 255, 0.9)', fontSize: { xs: '0.9rem', sm: '1rem' } }}>
              <Box component="span" sx={{ fontWeight: 700, color: '#4caf50' }}>Backup with Typed Input:</Box> As an MVP shortcut, our prototype can
              allow typing answers instead of relying fully on OCR. Once the grading logic is
              solid, we can run more OCR experiments. In production, a human could verify
              OCR-outsourced text, or the AI itself could ask clarifying prompts about
              illegible parts.
            </Typography>
          </Stack>

          <Typography 
            variant="h6" 
            component="h4" 
            sx={{ 
              mt: 4, 
              mb: 3,
              color: '#ab47bc',
              fontWeight: 600,
              fontSize: { xs: '1rem', sm: '1.25rem' },
              display: 'flex',
              alignItems: 'center',
              '&:before': {
                content: '""',
                width: 4,
                height: 20,
                background: 'linear-gradient(45deg, #ab47bc, #9c27b0)',
                borderRadius: 2,
                mr: 2,
              }
            }}
          >
            Incremental Improvement Roadmap
          </Typography>
          <Stack spacing={2} sx={{ '& > *': { pl: 0 } }}>
            <Paper sx={{
              p: { xs: 1.5, sm: 2.5 },
              background: 'linear-gradient(135deg, rgba(171, 71, 188, 0.08), rgba(156, 39, 176, 0.04))',
              border: '1px solid rgba(171, 71, 188, 0.2)',
              borderRadius: 2,
              borderLeft: '4px solid #ab47bc',
            }}>
              <Typography sx={{ lineHeight: 1.6, color: 'rgba(255, 255, 255, 0.9)', fontSize: { xs: '0.85rem', sm: '0.95rem' } }}>
                <Box component="span" sx={{ fontWeight: 700, color: '#ab47bc', fontSize: '1em' }}>MVP First:</Box> Build the basic pipeline (as sketched above) with
                typed or simple OCR input and one LLM agent. Show that it can grade a couple
                of questions with basic rubric prompts.
              </Typography>
            </Paper>
            <Paper sx={{
              p: { xs: 1.5, sm: 2.5 },
              background: 'linear-gradient(135deg, rgba(156, 39, 176, 0.08), rgba(142, 36, 170, 0.04))',
              border: '1px solid rgba(156, 39, 176, 0.2)',
              borderRadius: 2,
              borderLeft: '4px solid #9c27b0',
            }}>
              <Typography sx={{ lineHeight: 1.6, color: 'rgba(255, 255, 255, 0.9)', fontSize: { xs: '0.85rem', sm: '0.95rem' } }}>
                <Box component="span" sx={{ fontWeight: 700, color: '#9c27b0', fontSize: '1em' }}>Add Transparency:</Box> Modify prompts so the AI explains its
                scoring (e.g. listing which rubric points it found). This makes grading
                decisions auditable and helps debug mistakes.<sup>1</sup>
              </Typography>
            </Paper>
            <Paper sx={{
              p: { xs: 1.5, sm: 2.5 },
              background: 'linear-gradient(135deg, rgba(142, 36, 170, 0.08), rgba(123, 31, 162, 0.04))',
              border: '1px solid rgba(142, 36, 170, 0.2)',
              borderRadius: 2,
              borderLeft: '4px solid #8e24aa',
            }}>
              <Typography sx={{ lineHeight: 1.6, color: 'rgba(255, 255, 255, 0.9)', fontSize: { xs: '0.85rem', sm: '0.95rem' } }}>
                <Box component="span" sx={{ fontWeight: 700, color: '#8e24aa', fontSize: '1em' }}>Integrate Second Pass:</Box> Implement a second grading pass (same
                or different prompt) and compare the two scores. If they match, confidence is
                higher; if not, mark for human. Use the second pass to compute prob_B, points_B
                as in our plan, and take the mean with the first pass.
              </Typography>
            </Paper>
            <Paper sx={{
              p: { xs: 1.5, sm: 2.5 },
              background: 'linear-gradient(135deg, rgba(123, 31, 162, 0.08), rgba(106, 27, 154, 0.04))',
              border: '1px solid rgba(123, 31, 162, 0.2)',
              borderRadius: 2,
              borderLeft: '4px solid #7b1fa2',
            }}>
              <Typography sx={{ lineHeight: 1.6, color: 'rgba(255, 255, 255, 0.9)', fontSize: { xs: '0.85rem', sm: '0.95rem' } }}>
                <Box component="span" sx={{ fontWeight: 700, color: '#7b1fa2', fontSize: '1em' }}>Pilot Ensembles:</Box> Use two different LLM models (e.g. GPT-4 and
                an open model like Llama) in parallel on a few questions. Merge their scores
                (averaging or majority vote) to see improvement. Early tests from research
                (and common ML practice) suggest ensemble averaging reduces variance.
                <sup>4, 5</sup>
              </Typography>
            </Paper>
            <Paper sx={{
              p: { xs: 1.5, sm: 2.5 },
              background: 'linear-gradient(135deg, rgba(106, 27, 154, 0.08), rgba(91, 24, 143, 0.04))',
              border: '1px solid rgba(106, 27, 154, 0.2)',
              borderRadius: 2,
              borderLeft: '4px solid #6a1b9a',
            }}>
              <Typography sx={{ lineHeight: 1.6, color: 'rgba(255, 255, 255, 0.9)', fontSize: { xs: '0.85rem', sm: '0.95rem' } }}>
                <Box component="span" sx={{ fontWeight: 700, color: '#6a1b9a', fontSize: '1em' }}>Confidence & Threshold Testing:</Box> On a test set graded by
                teachers, measure the AI's confidence calibration (e.g., reliability diagrams,
                ECE) and monitor disagreement/variance. Adjust the ≥0.95 threshold as needed
                so that false automations are rare.
              </Typography>
            </Paper>
            <Paper sx={{
              p: { xs: 1.5, sm: 2.5 },
              background: 'linear-gradient(135deg, rgba(91, 24, 143, 0.08), rgba(74, 20, 140, 0.04))',
              border: '1px solid rgba(91, 24, 143, 0.2)',
              borderRadius: 2,
              borderLeft: '4px solid #5b188f',
            }}>
              <Typography sx={{ lineHeight: 1.6, color: 'rgba(255, 255, 255, 0.9)', fontSize: { xs: '0.85rem', sm: '0.95rem' } }}>
                <Box component="span" sx={{ fontWeight: 700, color: '#5b188f', fontSize: '1em' }}>Data Collection and Fine-Tuning:</Box> As we gather teacher-graded
                examples (even dozens of scripts), consider fine-tuning or few-shot prompt
                refinement. We will also incorporate "corrected examples" into prompts (LLM_C
                in our design) to give the AI analogies. Over time, adding more examples
                should improve LLM_C's reliability.
              </Typography>
            </Paper>
            <Paper sx={{
              p: { xs: 1.5, sm: 2.5 },
              background: 'linear-gradient(135deg, rgba(74, 20, 140, 0.08), rgba(63, 18, 132, 0.04))',
              border: '1px solid rgba(74, 20, 140, 0.2)',
              borderRadius: 2,
              borderLeft: '4px solid #4a148c',
            }}>
              <Typography sx={{ lineHeight: 1.6, color: 'rgba(255, 255, 255, 0.9)', fontSize: { xs: '0.85rem', sm: '0.95rem' } }}>
                <Box component="span" sx={{ fontWeight: 700, color: '#4a148c', fontSize: '1em' }}>Measure Accuracy:</Box> Compare AI grades vs. human grades
                quantitatively. For instance, compute agreement or correlation (as in the APS
                study's R²) on sample papers. Track metrics like Exact Agreement and Adjacent
                Agreement from AES literature to verify progress.
              </Typography>
            </Paper>
            <Paper sx={{
              p: { xs: 1.5, sm: 2.5 },
              background: 'linear-gradient(135deg, rgba(63, 18, 132, 0.08), rgba(49, 27, 146, 0.04))',
              border: '1px solid rgba(63, 18, 132, 0.2)',
              borderRadius: 2,
              borderLeft: '4px solid #3f1284',
            }}>
              <Typography sx={{ lineHeight: 1.6, color: 'rgba(255, 255, 255, 0.9)', fontSize: { xs: '0.85rem', sm: '0.95rem' } }}>
                <Box component="span" sx={{ fontWeight: 700, color: '#3f1284', fontSize: '1em' }}>Iterate with Users:</Box> Engage educators to review outputs and
                suggest rubric clarifications. Feedback will refine prompts (e.g. clarifying
                partial credit rules). The APS author noted that human insight into "what
                counts as evidence" was crucial – we'll incorporate such domain knowledge
                into prompt instructions or model training.<sup>10</sup>
              </Typography>
            </Paper>
          </Stack>

          <Typography 
            variant="h6" 
            component="h4" 
            sx={{ 
              mt: 4, 
              mb: 3,
              color: '#ff7043',
              fontWeight: 600,
              fontSize: { xs: '1rem', sm: '1.25rem' },
              display: 'flex',
              alignItems: 'center',
              '&:before': {
                content: '""',
                width: 4,
                height: 20,
                background: 'linear-gradient(45deg, #ff7043, #ff5722)',
                borderRadius: 2,
                mr: 2,
              }
            }}
          >
            Conclusion and Outlook
          </Typography>
          <Stack spacing={2}>
            <Typography variant="body1" sx={{ lineHeight: 1.7, color: 'rgba(255, 255, 255, 0.9)', fontSize: { xs: '0.9rem', sm: '1rem' } }}>
              By implementing these strategies, we expect the AI grader's accuracy to approach
              human levels while drastically cutting grading time. In the short term, we focus
              on a working prototype ("Simple Version" with core pipeline and illustrative
              diagrams). In parallel, we plan research extensions (the "Increasing Accuracy"
              section) as placeholders: for example, training a custom scoring model or
              developing an on-the-fly debate among AI agents. Ultimately, a phased approach
              ensures early wins (demo of fast autograding) while leaving room for advanced
              improvements.
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.7, color: 'rgba(255, 255, 255, 0.9)', fontSize: { xs: '0.9rem', sm: '1rem' } }}>
              In summary, the path to high-accuracy AI grading lies in grounding the AI in
              clear rubrics, using ensembles or multiple passes for redundancy, calibrating
              confidence with human supervision, and continually refining with real data. We
              will implement each of these with best practices from recent literature to make
              our system both powerful and trustworthy.
            </Typography>
          </Stack>

        <Typography 
          variant="h5" 
          component="h3" 
          sx={{ 
            color: '#26c6da',
            fontWeight: 600,
            mb: 3,
            mt: 4,
            display: 'flex',
            alignItems: 'center',
            fontSize: { xs: '1.2rem', sm: '1.5rem' },
            '&:before': {
              content: '""',
              width: 6,
              height: 28,
              background: 'linear-gradient(45deg, #00acc1, #26c6da)',
              borderRadius: 3,
              mr: 2,
            }
          }}
        >
          Research Sources
        </Typography>
          
          <Typography variant="body1" paragraph sx={{ color: 'rgba(255, 255, 255, 0.8)', mb: 4, lineHeight: 1.7 }}>
            We build on emerging research in AI grading and evaluation. Recent studies show
            GPT-4 can match or exceed inter-rater human agreement when given detailed
            rubrics,<sup>1</sup> and that combining LLM insights with linguistic features
            yields state-of-art essay scoring.<sup>2, 3</sup> Work on ensemble LLMs
            demonstrates that multi-model voting and debate improve grading consistency.
            <sup>4, 5</sup> Finally, psychometric analysis confirms that thresholding by
            confidence (invoking human review when uncertain) retains high precision.
            <sup>8, 9, 7</sup> We will use these findings to guide our development and tuning.
          </Typography>
          
          <Paper sx={{ 
            p: 3, 
            background: 'linear-gradient(135deg, rgba(15, 15, 35, 0.6), rgba(26, 26, 46, 0.4))', 
            border: '1px solid rgba(243, 156, 18, 0.2)',
            borderRadius: 2,
            borderLeft: '4px solid #26c6da',
          }}>
            <Stack spacing={2}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                <Typography variant="body2" sx={{ color: '#26c6da', fontWeight: 600, minWidth: '60px' }}>
                  1, 10
                </Typography>
                <Link
                  href="https://www.aps.org/apsnews/2025/07/what-happens-ai-grading"
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
                  What happens when AI does the grading? | American Physical Society
                </Link>
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                <Typography variant="body2" sx={{ color: '#26c6da', fontWeight: 600, minWidth: '60px' }}>
                  2, 3
                </Typography>
                <Link
                  href="https://www.nature.com/articles/s41598-025-87862-3?error=cookies_not_supported&code=4fe8f26b-2467-43ebb989-758abdc9c7e9"
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
                  An LLM-based hybrid approach for enhanced automated essay scoring | Scientific Reports
                </Link>
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                <Typography variant="body2" sx={{ color: '#26c6da', fontWeight: 600, minWidth: '60px' }}>
                  4, 5, 6
                </Typography>
                <Link
                  href="https://arxiv.org/html/2502.16399v1"
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
                  Ensemble ToT of LLMs and Its Application to Automatic Grading System for Supporting Self-Learning
                </Link>
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                <Typography variant="body2" sx={{ color: '#26c6da', fontWeight: 600, minWidth: '60px' }}>
                  7
                </Typography>
                <Link
                  href="https://arxiv.org/html/2503.15850v1"
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
                  Uncertainty Quantification and Confidence Calibration in Large Language Models: A Survey
                </Link>
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                <Typography variant="body2" sx={{ color: '#26c6da', fontWeight: 600, minWidth: '60px' }}>
                  8, 9
                </Typography>
                <Link
                  href="https://arxiv.org/abs/2410.19409"
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
                  [2410.19409] Assessing Confidence in AI-Assisted Grading of Physics Exams through Psychometrics: An Exploratory Study
                </Link>
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                <Typography variant="body2" sx={{ color: '#26c6da', fontWeight: 600, minWidth: '60px' }}>
                  11
                </Typography>
                <Link
                  href="https://research.aimultiple.com/handwriting-recognition/"
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
                  Handwriting Recognition Benchmark: LLMs vs OCRs in 2025
                </Link>
              </Box>
            </Stack>
          </Paper>
    </Box>
  );
};

export default ResearchSection;