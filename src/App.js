import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import Alert from './Components/Alert';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light'); // light or dark mode
  const [alert, setAlert] = useState(null);

  // Show alert message
  const showAlert = (message, type) => {
    setAlert({ msg: message, type });
    setTimeout(() => setAlert(null), 2000);
  };

  // Set page background on mount + mode change
  useEffect(() => {
    document.body.style.backgroundColor = mode === 'dark' ? '#161634' : '#C3E0EA';
  }, [mode]);

  const toggleMode = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    showAlert(`${newMode.charAt(0).toUpperCase() + newMode.slice(1)} Mode Enabled`, 'success');
  };

  return (
    <Router>
      <Navbar title="WordPlay✏️" aboutText="About" mode={mode} toggleMode={toggleMode} />
      {alert && <Alert alert={alert} />}
      <div className="container my-3">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="welcome-message">Welcome to Wordplay 🎉</div>
                <TextForm
                  heading="Enter Text to Analyze🔎..."
                  mode={mode}
                  showAlert={showAlert}
                />
              </>
            }
          />
          <Route path="/about" element={<About mode={mode} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
