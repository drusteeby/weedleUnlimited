import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "@fontsource/readex-pro";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChooseDifficulty from './Components/ChooseDifficulty';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/weedleUnlimited" element={<ChooseDifficulty />} />
        <Route path="/SuperEasy" element={<App difficulty={'SuperEasy'} />} />
        <Route path="/Normal" element={<App difficulty={'Normal'} />} />
        <Route path="/Hard" element={<App difficulty={'Hard'} />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
