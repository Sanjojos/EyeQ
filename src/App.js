import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './home';
import Navbar from './Navbar/Navbar';
import Footer from './footer/footer';
import About from './About';
import Service from './service';
import Appoinment from './Appoinment';
import SnellenTest from './Snellen Chart Test';
import AuthModal from './authcode';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="App">
      <Navbar  />
      
      <Routes>
        <Route path='/' element={<Home onAuthClick={() => setIsModalOpen(true)}/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/services' element={<Service/>}/>
        <Route path='appoint' element={<Appoinment/>}/>
        <Route path='/snellen' element={<SnellenTest/>}/>
      </Routes>
      <Footer/>
      <div className="min-h-screen bg-gray-100">
      
      <AuthModal  isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}/>
    </div>
    </div>
  );
}

export default App;
