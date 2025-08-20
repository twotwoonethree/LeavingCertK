// src/App.tsx
import { useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

// Import Theme, Components, and Pages
import { getAppTheme } from './theme';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import GradingPage from './pages/GradingPage';
import FuturePage from './pages/FuturePage';
import ChallengePage from './pages/ChallengePage';
import GameLauncher from './features/game/GameLauncher';
import GradingLab from './features/lab/GradingLab';

function App() {
  // useMemo ensures the theme is not recalculated on every render
  const theme = useMemo(() => getAppTheme('dark'), []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/grading" element={<GradingPage />} />
          <Route path="/future" element={<FuturePage />} />
          <Route path="/challenge" element={<ChallengePage />} />
          <Route path="/play" element={<GameLauncher />} />
          <Route path="/lab" element={<GradingLab />} />
        </Routes>
      </main>
    </ThemeProvider>
  );
}

export default App;