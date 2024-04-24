import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import LandingPage from './components/LandingPage.jsx';
import LoginScreen from './components/LoginScreen.jsx';
import SignupScreen from './components/SignupScreen.jsx';
import Profilepage from './components/Profilepage.jsx';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="LoginScreen" element={<LoginScreen />} />
          <Route path="SignupScreen" element={<SignupScreen />} />
          <Route path="Profilepage" element={<Profilepage />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
