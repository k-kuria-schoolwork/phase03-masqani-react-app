import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/styles.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Properties from './components/Properties'
import NavBar from './components/NavBar';
import AddProperty from './components/AddProperty';
import Search from './components/Search'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
      <NavBar />
    <Routes>
      <Route path='/' element={<App />}/>
      <Route path='/properties' element={<Properties />}/>
      <Route path='/addproperty' element={<AddProperty />}/>
      <Route path='/search' element={<Search />}/>

    </Routes>
  </Router>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
