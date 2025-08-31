// src/components/Navbar.tsx
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import NavOverflowControls, { type NavItem } from './NavOverflowControls';

// Import Icons
import HomeIcon from '@mui/icons-material/Home';
// Import logo
import graidgenieLogo from '../assets/graidgenie_logo_nobg.png';
import AssessmentIcon from '@mui/icons-material/Assessment';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const overflowItems: NavItem[] = [
    { label: 'Grading', to: '/grading', icon: AssessmentIcon },
    { label: 'Future', to: '/future', icon: TrendingUpIcon },
    { label: 'The Challenge', to: '/challenge', icon: ReportProblemIcon },
  ];

  const handleNavSelect = (to: string) => {
    navigate(to);
  };

  return (
    <AppBar 
      position="static" 
      sx={{ 
        background: 'linear-gradient(135deg, rgba(42, 44, 54, 0.95) 0%, rgba(61, 63, 77, 0.9) 100%)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.3)',
      }}
    >
      <Toolbar sx={{ py: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mr: 4 }}>
          <Box 
            component={RouterLink}
            to="/"
            sx={{ 
              display: 'flex', 
              alignItems: 'center',
              borderRadius: '12px',
              p: 1,
              mr: 2,
              textDecoration: 'none',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            <Box
              component="img"
              src={graidgenieLogo}
              alt="GraidGenie Logo"
              sx={{ 
                height: 32,
                width: 'auto',
                maxWidth: 40
              }}
            />
          </Box>
          <Box>
            <Typography 
              variant="h6" 
              component={RouterLink}
              to="/"
              sx={{ 
                fontWeight: 700,
                background: 'linear-gradient(45deg, #ffffff, #26c6da)',
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
              Graid Genie
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