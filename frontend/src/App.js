import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Solutions from './pages/Services';
import Contact from './pages/Contact';
import About from './pages/About';
import Items from './pages/Items';
import SignIn from './pages/SignIn';

import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (

    <Router>
      <Navbar/>
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Services" element={<Solutions/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/Items" element={<Items/>}/>
          <Route path="/SignIn" element={<SignIn/>}/>

        </Routes>
      </div>
      <Footer/>
    </Router>
  //   <React.Fragment>
  //     <Navbar>
        
  //     </Navbar>
  //   </React.Fragment>
  );
}

export default App;