import React from 'react';
import SectionWrapper from './SectionWrapper';
import { TEAM_MEMBERS } from '../constants';
import { User } from 'lucide-react';

const Team: React.FC = () => {
  return (
    <SectionWrapper id="team" className="bg-slate-900">
      <div className="text-center mb-16">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">The Team</h2>
        <p className="text-gray-400 font-mono text-sm">Grade 11 • Semester 1 • 2025/2026</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {TEAM_MEMBERS.map((member) => (
          <div 
            key={member.id}
            className="bg-slate-800 rounded-xl p-6 text-center border border-gray-700 hover:border-circuit-green hover:-translate-y-2 transition-all duration-300 group shadow-lg hover:shadow-circuit-green/10"
          >
            <div className="w-24 h-24 mx-auto mb-4 bg-slate-700 rounded-full flex items-center justify-center border-2 border-gray-600 group-hover:border-circuit-blue transition-colors overflow-hidden">
                 <User className="w-10 h-10 text-gray-400 group-hover:text-circuit-blue" />
            </div>
            <h3 className="text-lg font-bold text-white mb-1 group-hover:text-circuit-green transition-colors">{member.name}</h3>
            <p className="text-circuit-blue font-mono text-xs">{member.role}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Team;