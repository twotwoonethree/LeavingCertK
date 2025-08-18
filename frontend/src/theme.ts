import { createTheme, alpha } from '@mui/material/styles';

export const getAppTheme = () =>
  createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#0f0f23',
        light: '#1a1a2e',
        dark: '#0a0a1a',
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#f39c12',
        light: '#f7dc6f',
        dark: '#e67e22',
        contrastText: '#0f0f23',
      },
      background: {
        default: '#0a0a0f',
        paper: '#0f0f23',
      },
      text: {
        primary: '#ffffff',
        secondary: 'rgba(255,255,255,0.8)',
      },
    },
    typography: {
      fontFamily: [
        '"Inter"',
        '"SF Pro Display"',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'system-ui',
        'sans-serif',
      ].join(','),
      h1: {
        fontWeight: 800,
        letterSpacing: '-0.02em',
        lineHeight: 1.1,
      },
      h2: {
        fontWeight: 700,
        letterSpacing: '-0.015em',
        lineHeight: 1.2,
      },
      h3: {
        fontWeight: 600,
        letterSpacing: '-0.01em',
        lineHeight: 1.3,
      },
      h4: {
        fontWeight: 600,
        letterSpacing: '-0.005em',
        lineHeight: 1.4,
      },
      h5: {
        fontWeight: 500,
        lineHeight: 1.5,
      },
      h6: {
        fontWeight: 500,
        lineHeight: 1.6,
      },
      body1: {
        lineHeight: 1.7,
        fontWeight: 400,
      },
      body2: {
        lineHeight: 1.6,
        fontWeight: 400,
      },
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: ({ ownerState }) => {
            // Simple card styling for cards with the 'simple' class
            if (ownerState?.className?.includes('simple-card')) {
              const accentColor = '#f39c12';
              return {
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: `1px solid rgba(255, 255, 255, 0.1)`,
                borderRadius: '12px',
                boxShadow: '0 4px 24px rgba(0, 0, 0, 0.3)',
                transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden',
                
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '1px',
                  background: `linear-gradient(90deg, transparent, ${alpha(accentColor, 0.4)}, transparent)`,
                },
                
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: `0 12px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px ${alpha(accentColor, 0.3)}`,
                  border: `1px solid ${alpha(accentColor, 0.4)}`,
                },
              };
            }
            
            // Complex card styling (default)
            let accentColor = '#f39c12'; // default
            
            // Check for border card classes to determine orb colors
            const isRedBorderCard = ownerState?.className?.includes('red-border-card');
            const isGreenBorderCard = ownerState?.className?.includes('green-border-card');
            const isBlueBorderCard = ownerState?.className?.includes('blue-border-card');
            
            if (isRedBorderCard) accentColor = '#e94560';
            if (isGreenBorderCard) accentColor = '#4caf50';
            if (isBlueBorderCard) accentColor = '#2196f3';

            const circleA = alpha(accentColor, 0.25);
            const circleB = alpha(accentColor, 0.35);

            // Use the same accent color for border styling
            const borderAccentColor = accentColor;

            return {
              position: 'relative',
              overflow: 'hidden',
              backgroundColor: 'rgba(15, 15, 35, 0.95)',
              padding: 0,
              border: `1px solid ${alpha(borderAccentColor, 0.2)}`,
              boxShadow: `0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px ${alpha(borderAccentColor, 0.1)}`,
              borderRadius: '16px',
              transformStyle: 'preserve-3d',
              transition: 'all 400ms cubic-bezier(0.4, 0, 0.2, 1)',
              willChange: 'transform',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',

              '&:hover': {
                transform: 'translateY(-8px) scale(1.02)',
                boxShadow: `0 20px 40px rgba(0,0,0,0.6), 0 0 0 1px ${alpha(borderAccentColor, 0.3)}`,
                border: `1px solid ${alpha(borderAccentColor, 0.4)}`,
              },

              // Orb A (big) - gradient mesh effect
              '&::before': {
                content: '""',
                position: 'absolute',
                width: 'var(--orbA-size, 200px)',
                height: 'var(--orbA-size, 200px)',
                borderRadius: '50%',
                background: `radial-gradient(circle, ${circleB}, transparent 70%)`,
                left: 'var(--orbA-left, -20%)',
                top: 'var(--orbA-top, -20%)',
                filter: 'blur(30px)',
                animation: 'floating 4000ms infinite ease-in-out',
                animationDelay: 'var(--orbA-delay, -800ms)',
                zIndex: 0,
                opacity: 0.85,
              },

              // Orb B (small) - complementary gradient
              '&::after': {
                content: '""',
                position: 'absolute',
                width: 'var(--orbB-size, 120px)',
                height: 'var(--orbB-size, 120px)',
                borderRadius: '50%',
                background: `radial-gradient(circle, ${circleA}, transparent 60%)`,
                right: 'var(--orbB-left, -10%)',
                bottom: 'var(--orbB-bottom, -10%)',
                filter: 'blur(25px)',
                animation: 'floating 3500ms infinite ease-in-out reverse',
                animationDelay: 'var(--orbB-delay, -1800ms)',
                zIndex: 0,
                opacity: 1.0,
              },
            };
          },
        },
      },
      MuiCardContent: {
        styleOverrides: {
          root: ({ theme, ownerState }) => {
            // Simple card content styling
            if (ownerState?.className?.includes('simple-content')) {
              return {
                position: 'relative',
                zIndex: 1,
                height: '100%',
                color: theme.palette.text.primary,
                backgroundColor: 'transparent',
                borderRadius: 'inherit',
                padding: '24px !important',
              };
            }
            
            // Check if parent card has border class
            const isRedBorder = ownerState?.className?.includes('red-border-content');
            const isGreenBorder = ownerState?.className?.includes('green-border-content');
            const isBlueBorder = ownerState?.className?.includes('blue-border-content');
            
            // Complex card content styling (default)
            let accentColor = '#f39c12'; // default
            if (isRedBorder) accentColor = '#e94560';
            if (isGreenBorder) accentColor = '#4caf50';
            if (isBlueBorder) accentColor = '#2196f3';
            const borderGrad = `linear-gradient(180deg, ${alpha(
              accentColor,
              0
            )}, ${alpha(accentColor, 0.8)}, ${alpha(accentColor, 0)})`;

            return {
              position: 'relative',
              zIndex: 1,
              height: '100%',
              color: theme.palette.text.primary,
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              borderRadius: 'inherit',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1)',
              overflow: 'hidden',

              // animated accent borders
              '&::before, &::after': {
                content: '""',
                position: 'absolute',
                width: '2px',
                top: '-50%',
                height: '200%',
                pointerEvents: 'none',
                background: borderGrad,
                boxShadow: `0 0 20px ${alpha(accentColor, 0.5)}`,
                zIndex: 0,
                animation: 'sweepY 4000ms ease-in-out infinite',
                opacity: 0.7,
              },
              '&::before': { left: 2, animationDelay: '0ms' },
              '&::after': { right: 2, animationDelay: '2000ms' },
            };
          },
        },
      },
    },
  });