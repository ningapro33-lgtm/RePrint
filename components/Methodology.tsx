import React from 'react';
import SectionWrapper from './SectionWrapper';
import { Settings, Cpu, Zap } from 'lucide-react';

const cards = [
  {
    icon: Settings,
    title: 'Mechanical Design',
    color: 'text-orange-400',
    borderColor: 'group-hover:border-orange-400',
    description: 'Designed a "Prusa i3" structure using an 18mm synthetic wood frame for enhanced vibration dampening and structural integrity during high-speed printing.'
  },
  {
    icon: Zap,
    title: 'Salvaging & Reuse',
    color: 'text-yellow-400',
    borderColor: 'group-hover:border-yellow-400',
    description: 'Scavenged NEMA 17 stepper motors, smooth rods, and cabling from obsolete inkjet printers and scanners. Repurposed an old PC ATX power supply unit.'
  },
  {
    icon: Cpu,
    title: 'Electronics & Firmware',
    color: 'text-blue-400',
    borderColor: 'group-hover:border-blue-400',
    description: 'Integrated an Arduino Mega 2560 with a RAMPS 1.4 shield. Repaired burned MOSFETs and voltage regulators. Configured Marlin Firmware for specific scavenged hardware steps.'
  }
];

const Methodology: React.FC = () => {
  return (
    <SectionWrapper id="methodology" className="bg-slate-950 circuit-grid">
      <div className="text-center mb-16">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">Methodology</h2>
        <p className="text-gray-400 font-mono text-sm uppercase tracking-widest">How We Built It</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {cards.map((card, idx) => (
          <div 
            key={idx}
            className={`bg-slate-900/80 backdrop-blur p-8 rounded-xl border border-gray-800 transition-all duration-300 hover:-translate-y-2 ${card.borderColor} group`}
          >
            <div className={`w-14 h-14 rounded-lg bg-slate-800 flex items-center justify-center mb-6 border border-gray-700 ${card.color}`}>
              <card.icon size={28} />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 font-display">{card.title}</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Methodology;