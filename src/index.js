import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/styles.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import About from './components/About'
import Services from './components/Services'
import Contacts from './components/Contacts'
import NavBar from './components/NavBar';
import Pricing from './components/Pricing';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
      <NavBar />
    <Routes>
      <Route path='/' element={<App />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/services' element={<Services />}/>
      <Route path='/contacts' element={<Contacts />}/>
      <Route path='/pricing' element={<Pricing />}/>

    </Routes>
  </Router>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
