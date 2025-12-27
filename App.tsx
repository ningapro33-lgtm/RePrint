import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MissionContext from './components/MissionContext';
import Methodology from './components/Methodology';
import Results from './components/Results';
import Timeline from './components/Timeline';
import Team from './components/Team';
import FutureRecommendations from './components/FutureRecommendations';
import Footer from './components/Footer';

function App() {
  // Smooth scroll behavior for anchor links
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      <Navbar />
      
      <main>
        <Hero />
        <MissionContext />
        <Methodology />
        <Results />
        <Timeline />
        <Team />
        <FutureRecommendations />
      </main>

      <Footer />
    </div>
  );
}

export default App;