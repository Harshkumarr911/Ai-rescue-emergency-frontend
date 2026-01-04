
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from "./pages/Home/Home.jsx";
import Card from './components/common/Card.jsx';
import LgForm from './pages/LgForm.jsx';
import Header from './components/Layout/Header.jsx';
const App=()=>{ 
  
  
  return (
    //these empty tags are called React Fragments to avoid unnecessary divs in the DOM .. pass multiple elements without a wrapper element
    <>
      <Header />
      <LgForm />
      <div id='parent'>
          <h1 id='child1'>Hii harsh</h1>
          <h2 id='child2'>Hii Kumar</h2>
      </div>

      <Card usernm="Kumar" age={22} />
      <Card usernm="Nitesh" age={21} />
    </>
  
  )
}

export default App
