import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BankingForms from './pages/BankingForms';
import RTGSForms from './pages/RTGSForms';
import ICICI from './pages/ICICI';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
       <Route path="/Magic-Utility" element={<Home />} />
        <Route path="/rtgs" element={<RTGSForms />} />
        <Route path="/BankingForms" element={<BankingForms/>} />
        <Route path="/ICICI" element={<ICICI/>} />
      </Routes>
    </Router>
  );
}

export default App;
