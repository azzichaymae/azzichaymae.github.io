import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIChat from './components/AiChat';
import ScrollSection from './components/ScrollSection';
import './App.css';
import './i18n';


function App() {
  
  return (
    <div className=" text-[#111827] font-sans">
      <Navbar />
       
      <main className='bg-gradient-to-b from-orange-50 to-blue-60'>
       <ScrollSection><Hero /></ScrollSection>
        <ScrollSection><About /></ScrollSection>
        <ScrollSection><Skills /></ScrollSection>
        <ScrollSection><Projects /></ScrollSection>
        <ScrollSection><Contact /></ScrollSection>
        <AIChat />
      </main>
      <Footer />
    </div>
  );
}

export default App;