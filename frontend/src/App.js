 import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Solutions from './pages/Services';
import Contact from './pages/Contact';
import About from './pages/About';
import Items from './pages/Items';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Orders from './pages/Orders';
import Login from './pages/Login';
import Registration from './pages/Registration';




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
          <Route path="/orders" element={<Orders />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />


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
