import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Components/About'; // if you have an About.js component
import Alert from './Components/Alert'; // optional if you're showing alerts

function App() {
  const [mode, setMode] = useState('light'); // 'light' or 'dark'
  const [alert, setAlert] = useState(null);

  // Show alert message
  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => setAlert(null), 2000); // Auto-dismiss after 2 seconds
  };

  // Apply background color on initial load + toggle
  useEffect(() => {
    document.body.style.backgroundColor = mode === 'dark' ? '#161634' : '#C3E0EA';
  }, [mode]);

  const toggleMode = () => {
    setMode(prev => (prev === 'light' ? 'dark' : 'light'));
    showAlert(mode === 'light' ? 'Dark Mode Enabled' : 'Light Mode Enabled', 'success');
  };

  return (
    <Router>
      <Navbar title="WordPlay✏️" aboutText="About" mode={mode} toggleMode={toggleMode} />
      {alert && <Alert alert={alert} />}
      <div className="container my-3">
        <Routes>
          <Route path="/" element={<TextForm heading="Enter Text to Analyze🔎..." mode={mode} showAlert={showAlert} />} />
          <Route path="/about" element={<About mode={mode} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
