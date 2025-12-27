import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import ParticleBackground from './ParticleBackground';
import TypingEffect from './TypingEffect';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-circuit-dark">
      <ParticleBackground />
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-block px-4 py-1 rounded-full border border-circuit-blue/30 bg-circuit-blue/5 backdrop-blur-sm"
        >
          <span className="text-circuit-blue font-mono text-sm tracking-widest">TEAM ID: 21216</span>
        </motion.div>
        
        <h1 className="font-display font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-tight mb-8">
          <span className="block mb-2">Reprinting the</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-circuit-green to-circuit-blue">
            Future
          </span>
        </h1>

        <div className="h-12 md:h-16 mb-8 flex items-center justify-center">
            <TypingEffect 
                text="Turning E-Waste into Scientific Tools."
                className="font-mono text-lg sm:text-xl md:text-2xl text-gray-300"
                speed={50}
                startDelay={1000}
            />
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
          className="max-w-2xl mx-auto text-gray-400 text-sm md:text-base mb-12"
        >
          A functional Prusa-style 3D printer built from <span className="text-circuit-green font-bold">70% recycled</span> electronic waste.
        </motion.p>

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.5 }}
            className="flex flex-col md:flex-row gap-4 justify-center"
        >
            <a href="#mission" className="px-8 py-3 bg-circuit-green/10 border border-circuit-green text-circuit-green font-mono rounded hover:bg-circuit-green hover:text-black transition-all duration-300 uppercase tracking-wider">
                Explore Project
            </a>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="text-circuit-blue w-8 h-8 opacity-70" />
      </motion.div>
      
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/50 pointer-events-none" />
    </div>
  );
};

export default Hero;