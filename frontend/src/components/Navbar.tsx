// src/components/Navbar.tsx
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import NavOverflowControls, { type NavItem } from './NavOverflowControls';

// Import Icons
import HomeIcon from '@mui/icons-material/Home';
import AssessmentIcon from '@mui/icons-material/Assessment';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ScienceIcon from '@mui/icons-material/Science';

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const overflowItems: NavItem[] = [
    { label: 'Grading', to: '/grading', icon: AssessmentIcon },
    { label: 'Future', to: '/future', icon: TrendingUpIcon },
    { label: 'Research', to: '/research', icon: ScienceIcon },
  ];

  const handleNavSelect = (to: string) => {
    navigate(to);
  };

  return (
    <AppBar 
      position="static" 
      sx={{ 
        background: 'linear-gradient(135deg, rgba(15, 15, 35, 0.95) 0%, rgba(26, 26, 46, 0.9) 100%)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.3)',
      }}
    >
      <Toolbar sx={{ py: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mr: 4 }}>
          <Box 
            sx={{ 
              display: 'flex', 
              alignItems: 'center',
              background: 'linear-gradient(45deg, #e94560, #f39c12)',
              borderRadius: '12px',
              p: 1,
              mr: 2,
            }}
          >
            <HomeIcon sx={{ fontSize: 28, color: 'white' }} />
          </Box>
          <Box>
            <Typography 
              variant="h6" 
              component={RouterLink}
              to="/"
              sx={{ 
                fontWeight: 700,
                background: 'linear-gradient(45deg, #ffffff, #f39c12)',
                backgroundSize: '200% 200%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textDecoration: 'none',
                '&:hover': {
                  backgroundPosition: '100% 0',
                }
              }}
            >
              AI Leaving Cert Grader
            </Typography>
            <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.6)', display: 'block', lineHeight: 1 }}>
              Faster, Fairer, Teacher-Supervised
            </Typography>
          </Box>
        </Box>
        
        <Box sx={{ flexGrow: 1 }} />
        
        <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
          <NavOverflowControls 
            items={overflowItems} 
            onSelect={handleNavSelect}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;