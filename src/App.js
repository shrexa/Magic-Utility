import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BankingForms from './pages/BankingForms';
import RTGSForms from './pages/RTGSForms';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
       <Route path="/" element={<Home />} />
        <Route path="/rtgs" element={<RTGSForms />} />
        <Route path="/BankingForms" element={<BankingForms/>} />
      </Routes>
    </Router>
  );
}

export default App;
