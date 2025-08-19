// src/pages/FuturePage.tsx
import { Typography, Paper, Box, Link, Stack } from '@mui/material';

const FuturePage = () => {
  return (
    <Box sx={{ 
      maxWidth: '1000px', 
      mx: 'auto',
      px: { xs: 2, sm: 3, md: 4 },
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
          component="h1" 
          sx={{
            background: 'linear-gradient(45deg, #e94560, #f39c12)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontWeight: 700,
            fontSize: { xs: '1.5rem', sm: '2rem' },
            mb: 2,
            letterSpacing: '-0.02em',
          }}
        >
          Beyond the Challenge: The Future
        </Typography>
        <Box sx={{ width: 80, height: 4, background: 'linear-gradient(45deg, #e94560, #f39c12)', mx: 'auto', borderRadius: 2, mb: 3 }} />
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
          Our AI grading platform can grow far beyond Ireland's Leaving Cert. In principle it can handle any
          exam or assignment – from Irish Junior Cert papers to international standardized tests (GCSE, SAT, IB,
          etc.). These systems are inherently customizable and scalable: AI graders can be tailored to different
          curricula and class sizes, making them suitable for all levels of education.<sup><Link href="#source-1" underline="hover">[1]</Link></sup>
        </Typography>
      </Paper>

      <Typography 
        variant="h5" 
        component="h3" 
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
            background: 'linear-gradient(45deg, #e94560, #f39c12)',
            borderRadius: 3,
            mr: 2,
          }
        }}
      >
        Universal Applications
      </Typography>
      <Typography variant="body1" sx={{ lineHeight: 1.7, color: 'rgba(255, 255, 255, 0.9)', fontSize: { xs: '0.9rem', sm: '1rem' }, mb: 4 }}>
        Imagine students in any subject submitting drafts or homework answers to the AI and getting instant, detailed feedback
        before they even hand in the work. In practice, AI-based tools already "provide instant results, enabling
        students to quickly identify areas for improvement".<sup><Link href="#source-2" underline="hover">[2]</Link></sup> This immediacy acts like a sophisticated spellcheck or tutor: it highlights gaps in understanding (missing concepts, weak arguments, grammar, etc.),
        so learners can iteratively refine their answers. Over time, routinely using AI feedback would help
        students learn from mistakes and develop confidence before the final exam.
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
              <Box component="span" sx={{ fontWeight: 700, color: '#4caf50', fontSize: '1.1em' }}>Universal applicability:</Box> Any written response—essays, math problems, science explanations,
              foreign‑language compositions, etc.—could be processed by the same underlying AI
              architecture.
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
              <Box component="span" sx={{ fontWeight: 700, color: '#9c27b0', fontSize: '1.1em' }}>Everyday learning:</Box> Students could use the system for routine exercises, projects or practice
              quizzes. Rather than waiting weeks, they'd get feedback in minutes, reinforcing lessons as they
              go.<sup><Link href="#source-5" underline="hover">[5]</Link></sup>
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
              <Box component="span" sx={{ fontWeight: 700, color: '#2196f3', fontSize: '1.1em' }}>Specialized domains:</Box> The approach can extend to vocational and professional education –
              language tests, coding assignments, lab write-ups or even corporate training courses. Any place
              that uses rubrics or answer keys, the AI can learn and assist.
            </Typography>
          </Paper>
          <Paper sx={{
            p: { xs: 2, sm: 3 },
            background: 'linear-gradient(135deg, rgba(243, 156, 18, 0.1), rgba(243, 156, 18, 0.05))',
            border: '1px solid rgba(243, 156, 18, 0.3)',
            borderRadius: 2,
            borderLeft: '4px solid #f39c12',
            transition: 'all 0.3s ease',
            '&:hover': {
              borderColor: 'rgba(243, 156, 18, 0.5)',
              boxShadow: '0 4px 15px rgba(243, 156, 18, 0.2)',
            }
          }}>
            <Typography variant="body1" sx={{ lineHeight: 1.7, color: 'rgba(255, 255, 255, 0.9)', fontSize: { xs: '0.9rem', sm: '1rem' } }}>
              <Box component="span" sx={{ fontWeight: 700, color: '#f39c12', fontSize: '1.1em' }}>Global reach:</Box> Although designed for Irish exams, the platform's design is universal. UNESCO
              calls for a human‑centered AI vision in education worldwide,<sup><Link href="#source-3" underline="hover">[3]</Link></sup> and our system meets that by
              keeping teachers in the loop. Indeed, Irish education technology is already earning a global
              reputation – Enterprise Ireland notes that "Irish companies… have been recognised worldwide
              for their innovative EdTech solutions".<sup><Link href="#source-4" underline="hover">[4]</Link></sup> Our grading AI could similarly travel abroad, helping
              teachers and students from Dublin to Delhi.
            </Typography>
          </Paper>
        </Stack>

      <Typography 
        variant="h5" 
        component="h3" 
        sx={{ 
          color: '#f39c12',
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
            background: 'linear-gradient(45deg, #e94560, #f39c12)',
            borderRadius: 3,
            mr: 2,
          }
        }}
      >
        Human-Centered AI Partnership
      </Typography>
      <Typography variant="body1" sx={{ lineHeight: 1.7, color: 'rgba(255, 255, 255, 0.9)', fontSize: { xs: '0.9rem', sm: '1rem' }, mb: 4 }}>
        Importantly, teachers remain central in this future. AI here is a partner, not a replacement.<sup><Link href="#source-6" underline="hover">[6]</Link></sup> It
        handles the routine bulk work – grading clear-cut answers at lightning speed – which studies show can
        shrink turnaround from weeks to minutes.<sup><Link href="#source-5" underline="hover">[5]</Link></sup> Teachers then have more time to focus on the human
        side: inspiring students, crafting lessons, and guiding those harder cases. As one researcher notes,
        when teachers use automated scoring they "have more time to focus on more meaningful work instead
        of some labor-intensive work".<sup><Link href="#source-7" underline="hover">[7]</Link></sup> This aligns perfectly with best practices (and UNESCO's guidance)
        that AI in education must be human‑supervised.<sup><Link href="#source-3" underline="hover">[3]</Link></sup> In practice, uncertain or creative answers still go to a
        teacher for review, ensuring no student is unfairly penalized. The system logs every AI decision in detail,
        so instructors can audit and understand each grade. In this way the human element remains
        essential,<sup><Link href="#source-6" underline="hover">[6, 7]</Link></sup> safeguarding trust and leveraging teachers' expertise.
      </Typography>

      <Stack spacing={3} sx={{ mt: 2 }}>
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
            <Box component="span" sx={{ fontWeight: 700, color: '#e94560', fontSize: '1.1em' }}>Supporting teachers:</Box> Routine grading is automated so teachers aren't buried in paperwork.
            Freed from drudgery, educators can mentor students, refine curriculum, and address individual
            needs.<sup><Link href="#source-6" underline="hover">[6, 7]</Link></sup>
          </Typography>
        </Paper>
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
            <Box component="span" sx={{ fontWeight: 700, color: '#4caf50', fontSize: '1.1em' }}>Consistent & fair:</Box> AI applies uniform criteria to every answer, eliminating fatigue or bias. In fact,
            research shows AI feedback can be fairer than human grading, since it uses the same rubric
            consistently.<sup><Link href="#source-1" underline="hover">[1]</Link></sup>
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
            <Box component="span" sx={{ fontWeight: 700, color: '#2196f3', fontSize: '1.1em' }}>Personalized learning:</Box> With AI feedback, students get guidance tuned to them (e.g. help on
            writing structure vs. conceptual errors), which boosts engagement and outcomes.<sup><Link href="#source-2" underline="hover">[2, 6]</Link></sup>
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
            <Box component="span" sx={{ fontWeight: 700, color: '#9c27b0', fontSize: '1.1em' }}>Transparent oversight:</Box> Every decision is logged. Teachers can review why the AI gave a
            particular score, which makes the process auditable and keeps educators in control.<sup><Link href="#source-6" underline="hover">[6]</Link></sup>
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
        The Future Vision
      </Typography>
      <Typography variant="body1" sx={{ lineHeight: 1.7, color: 'rgba(255, 255, 255, 0.9)', fontSize: { xs: '0.9rem', sm: '1rem' }, mb: 4 }}>
        In the long run, a human-first AI tutor could become as ubiquitous as spell-check. Students would
        arrive to class already armed with detailed feedback on their homework, allowing teachers to spend
        more class time on critical thinking and discussion. Educators worldwide are already piloting such tools:
        for example, an AI assistant initially tested in one class at the University of Toronto "has now been
        adopted by nearly 100 institutions and business schools".<sup><Link href="#source-8" underline="hover">[8]</Link></sup> Likewise, Ireland's Leaving Cert AI grader
        could seed a future where fast, reliable grading and instant feedback is the norm everywhere. This
        makes learning more engaging and equitable – exactly the promise of next-generation education
        technology.<sup><Link href="#source-2" underline="hover">[2]</Link></sup>
      </Typography>

      <Typography variant="body1" sx={{ lineHeight: 1.7, color: 'rgba(255, 255, 255, 0.8)', mb: 4, fontStyle: 'italic', borderTop: '1px solid rgba(255, 255, 255, 0.1)', pt: 4 }}>
        <Box component="span" sx={{ fontWeight: 700, color: '#f39c12' }}>Summary of Sources:</Box> Cutting-edge educational research and industry reports highlight the power of AI feedback.
        Experts note that automating grading "allows teachers to do what humans do best: inspire, mentor, and
        build genuine connections".<sup><Link href="#source-2" underline="hover">[2]</Link></sup> UNESCO's AI in education guidelines emphasize that such systems
        must be human-centered.<sup><Link href="#source-3" underline="hover">[3]</Link></sup> Global case studies (e.g. University of Michigan's ECoach, Toronto's
        AllDayTA) already show successful large-scale adoption. [9, 20] These insights ensure our vision for the future
        is grounded in real-world potential. Each citation above comes from independent research
        or reputable organizations, confirming that AI-enhanced grading can uplift both students and teachers
        without ever sidelining the human touch.
      </Typography>

      <Typography 
        variant="h5" 
        component="h3" 
        sx={{ 
          color: '#f39c12',
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
            background: 'linear-gradient(45deg, #e94560, #f39c12)',
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
        border: '1px solid rgba(243, 156, 18, 0.2)',
        borderRadius: 2,
        borderLeft: '4px solid #f39c12',
      }}>
        <Stack spacing={2}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
            <Typography variant="body2" sx={{ color: '#f39c12', fontWeight: 600, minWidth: '60px' }}>
              1
            </Typography>
            <Link
              href="https://edutechtalks.com/ai-grading-the-future-of-education/"
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
              AI grading: the future of education - EDUtech_talks
            </Link>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
            <Typography variant="body2" sx={{ color: '#f39c12', fontWeight: 600, minWidth: '60px' }}>
              2
            </Typography>
            <Link
              href="https://schoolai.com/blog/using-ai-address-common-challenges-student-feedback"
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
              Using AI to address common challenges in student feedback | SchoolAI
            </Link>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
            <Typography variant="body2" sx={{ color: '#f39c12', fontWeight: 600, minWidth: '60px' }}>
              3
            </Typography>
            <Link
              href="https://www.unesco.org/en/articles/guidance-generative-ai-education-and-research"
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
              Guidance for generative AI in education and research | UNESCO
            </Link>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
            <Typography variant="body2" sx={{ color: '#f39c12', fontWeight: 600, minWidth: '60px' }}>
              4
            </Typography>
            <Link
              href="https://www.enterprise-ireland.com/en/success-stories/edtech-innovators-the-irish-companies-transforming-education-in-australia-and-new-zealand"
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
              EdTech Innovators: The Irish Companies Transforming Education... | Enterprise Ireland
            </Link>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
            <Typography variant="body2" sx={{ color: '#f39c12', fontWeight: 600, minWidth: '60px' }}>
              5
            </Typography>
            <Link
              href="https://phys.org/news/2025-05-ai-grading-teachers.html"
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
              AI may speed up the grading process for teachers | phys.org
            </Link>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
            <Typography variant="body2" sx={{ color: '#f39c12', fontWeight: 600, minWidth: '60px' }}>
              6
            </Typography>
            <Link
              href="https://www.learnwise.ai/guides/ai-powered-feedback-and-grading-in-higher-education"
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
              AI-Powered Feedback and Grading in Higher Education | LearnWise
            </Link>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
            <Typography variant="body2" sx={{ color: '#f39c12', fontWeight: 600, minWidth: '60px' }}>
              7
            </Typography>
            <Link
              href="https://www.codiste.com/ai-in-grading"
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
              How Artificial Intelligence is Transforming Grading in 2025 | Codiste
            </Link>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
            <Typography variant="body2" sx={{ color: '#f39c12', fontWeight: 600, minWidth: '60px' }}>
              8
            </Typography>
            <Link
              href="https://www.poetsandquants.com/2025/02/07/at-toronto-rotman-an-ai-tool-is-changing-how-teachers-teach-and-helping-students-learn-better-too/"
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
              At Toronto Rotman, An AI Tool Is Changing How Teachers Teach... | Poets&Quants
            </Link>
          </Box>
        </Stack>
      </Paper>
    </Box>
  );
};

export default FuturePage;