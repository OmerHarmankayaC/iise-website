import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Pillars from './components/Pillars';
import WhyJoin from './components/WhyJoin';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <Pillars />
      <WhyJoin />
      <Footer />
    </div>
  );
}

export default App;
