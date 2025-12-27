import React from 'react';
import SectionWrapper from './SectionWrapper';
import { TIMELINE_EVENTS } from '../constants';
import { Search, Wrench, Cpu, Code, Printer } from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap = {
  search: Search,
  wrench: Wrench,
  cpu: Cpu,
  code: Code,
  printer: Printer
};

const Timeline: React.FC = () => {
  return (
    <SectionWrapper id="timeline" className="bg-slate-950">
      <div className="text-center mb-16">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">Project Timeline</h2>
        <p className="text-gray-400 font-mono text-sm">From Scraps to Structure</p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-800" />

        {TIMELINE_EVENTS.map((event, index) => {
          const Icon = iconMap[event.icon];
          const isLeft = index % 2 === 0;

          return (
            <div key={event.id} className={`relative mb-12 flex items-center ${isLeft ? 'justify-start' : 'justify-end'}`}>
              
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-circuit-dark border-2 border-circuit-blue rounded-full z-10" />

              {/* Content Card */}
              <motion.div 
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`w-[calc(50%-2rem)] bg-slate-900 border border-gray-800 p-6 rounded-xl hover:border-circuit-green transition-colors group relative ${isLeft ? 'mr-auto' : 'ml-auto'}`}
              >
                 {/* Arrow */}
                <div className={`absolute top-6 w-3 h-3 bg-slate-900 border-t border-r border-gray-800 transform rotate-45 ${isLeft ? 'right-[-7px] border-l-0 border-b-0' : 'left-[-7px] border-t-0 border-r-0 border-l border-b'}`}></div>

                <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-slate-800 rounded text-circuit-blue">
                        <Icon size={18} />
                    </div>
                    <span className="text-xs font-mono text-circuit-green uppercase">{event.date}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                <p className="text-gray-400 text-sm">{event.description}</p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default Timeline;