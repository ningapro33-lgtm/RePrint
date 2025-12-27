import React from 'react';
import SectionWrapper from './SectionWrapper';
import { ArrowRight } from 'lucide-react';

const FutureRecommendations: React.FC = () => {
  return (
    <SectionWrapper className="bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-3xl mx-auto bg-slate-900/80 border border-gray-800 rounded-2xl p-8 md:p-12 relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-circuit-blue/5 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

        <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-8 text-center">
          Future Recommendations
        </h2>

        <div className="space-y-4">
          {[
            "Upgrade to Aluminum frame for higher heat resistance.",
            "Add Raspberry Pi (OctoPrint) for remote WiFi printing.",
            "Implement filament runout sensors for long-print reliability."
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-slate-950/50 hover:bg-slate-800 transition-colors border border-transparent hover:border-gray-700">
              <div className="mt-1 min-w-[20px] text-circuit-green">
                <ArrowRight size={20} />
              </div>
              <p className="text-gray-300 text-lg">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default FutureRecommendations;