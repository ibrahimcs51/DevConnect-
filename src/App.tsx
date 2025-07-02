import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Landing from './pages/Landing';
import UserTypeSelection from './pages/UserTypeSelection';
import DeveloperLogin from './pages/DeveloperLogin';
import UserLogin from './pages/UserLogin';
import DeveloperSignup from './pages/DeveloperSignup';
import UserSignup from './pages/UserSignup';
import DeveloperDashboard from './pages/DeveloperDashboard';
import ForgotPassword from './pages/ForgotPassword';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/select-type" element={<UserTypeSelection />} />
            <Route path="/developer/login" element={<DeveloperLogin />} />
            <Route path="/user/login" element={<UserLogin />} />
            <Route path="/developer/signup" element={<DeveloperSignup />} />
            <Route path="/user/signup" element={<UserSignup />} />
            <Route path="/developer/dashboard" element={<DeveloperDashboard />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;