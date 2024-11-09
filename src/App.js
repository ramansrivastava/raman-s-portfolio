// src/App.js
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Interests from './components/Interests';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="container my-5">
        <About />
        <Interests />
        <Projects />
        
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
