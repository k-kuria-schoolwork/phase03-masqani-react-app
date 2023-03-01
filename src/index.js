import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/styles.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import About from './components/About'
import PropertyListings from './components/PropertyListings'
import Contacts from './components/Contacts'
import NavBar from './components/NavBar';
import Reviews from './components/Reviews';
import AddProperty from './components/AddProperty';
import Cart from './components/Cart';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
      <NavBar />
    <Routes>
      <Route path='/' element={<App />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/propertylistings' element={<PropertyListings />}/>
      <Route path='/addproperty' element={<AddProperty />}/>
      <Route path='/contacts' element={<Contacts />}/>
      <Route path='/reviews' element={<Reviews />}/>
      <Route path='/cart' element={<Cart />}/>

    </Routes>
  </Router>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
