import React from 'react';
import { Printer } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 py-12 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-6 opacity-80">
          <Printer className="text-circuit-green" size={24} />
          <span className="font-display font-bold text-2xl text-white">RE<span className="text-circuit-blue">PRINT</span></span>
        </div>
        
        <p className="text-gray-500 font-mono text-sm mb-2">Printing the Future From The Past</p>
        <p className="text-gray-600 text-xs">
          © 2025/2026 Team 21216. All rights reserved. STEM Capstone Project.
        </p>
      </div>
    </footer>
  );
};

export default Footer;