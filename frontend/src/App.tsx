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
import ResearchPage from './pages/ResearchPage';

function App() {
  // useMemo ensures the theme is not recalculated on every render
  const theme = useMemo(() => getAppTheme(), []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/grading" element={<GradingPage />} />
          <Route path="/future" element={<FuturePage />} />
          <Route path="/research" element={<ResearchPage />} />
        </Routes>
      </main>
    </ThemeProvider>
  );
}

export default App;