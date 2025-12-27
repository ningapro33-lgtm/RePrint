import React from 'react';
import SectionWrapper from './SectionWrapper';
import { AlertTriangle, Globe, Recycle } from 'lucide-react';

const MissionContext: React.FC = () => {
  return (
    <SectionWrapper id="mission" className="bg-slate-900">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6 border-l-4 border-circuit-blue pl-4">
            The Challenge
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
            Egypt faces a sharp increase in <span className="text-red-400 font-medium">electronic waste</span>. 
            Millions of tons of obsolete hardware end up in landfills, creating hazardous environmental conditions.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
            Our goal was to divert this hazardous waste from landfills and repurpose it into accessible 
            <span className="text-circuit-green font-medium"> fabrication tools</span> for school laboratories, 
            bridging the gap between waste management and STEM education.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 bg-slate-800 rounded-lg border border-gray-700 text-center hover:border-circuit-blue transition-colors group">
              <AlertTriangle className="w-8 h-8 text-yellow-500 mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <p className="text-sm text-gray-400">Hazardous Waste</p>
            </div>
            <div className="p-4 bg-slate-800 rounded-lg border border-gray-700 text-center hover:border-circuit-green transition-colors group">
              <Recycle className="w-8 h-8 text-green-500 mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <p className="text-sm text-gray-400">Repurposing</p>
            </div>
            <div className="p-4 bg-slate-800 rounded-lg border border-gray-700 text-center hover:border-circuit-blue transition-colors group">
              <Globe className="w-8 h-8 text-blue-500 mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <p className="text-sm text-gray-400">Sustainability</p>
            </div>
          </div>
        </div>
        
        <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden border border-gray-800 bg-slate-800/50 group">
             {/* Abstract representation of E-Waste */}
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:opacity-50 transition-opacity duration-500 mix-blend-luminosity"></div>
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
             
             <div className="absolute bottom-8 left-8 right-8">
                 <div className="font-mono text-xs text-circuit-blue mb-2">PROBLEM STATEMENT</div>
                 <h3 className="text-2xl font-bold text-white mb-2">The E-Waste Crisis</h3>
                 <p className="text-sm text-gray-400">Obsolete electronics contain valuable components like stepper motors and power supplies that are often discarded instead of reused.</p>
             </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default MissionContext;