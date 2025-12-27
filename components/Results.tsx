import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';

const costData = [
  { name: 'Commercial Printer', cost: 100, label: '$300+' },
  { name: 'Reprint Project', cost: 30, label: '<$90' },
];

const StatCard: React.FC<{ label: string; value: string; subtext: string; color: string }> = ({ label, value, subtext, color }) => (
  <div className="bg-slate-800/50 p-6 rounded-lg border-l-4 border-gray-700 hover:border-l-4" style={{ borderColor: color }}>
    <h4 className="text-gray-400 font-mono text-xs uppercase mb-2">{label}</h4>
    <div className="text-3xl font-bold text-white mb-1" style={{ color }}>{value}</div>
    <p className="text-gray-500 text-sm">{subtext}</p>
  </div>
);

const Results: React.FC = () => {
  return (
    <SectionWrapper id="results" className="bg-slate-900">
      <div className="grid lg:grid-cols-2 gap-16">
        {/* Left Col: Quantitative Stats */}
        <div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-8">
            Results & Data
          </h2>
          <div className="space-y-6">
            <StatCard 
              label="Dimensional Accuracy" 
              value="< 1.8% Error" 
              subtext="X: +0.36mm, Y: -0.32mm, Z: +0.32mm"
              color="#00ff41" 
            />
            <StatCard 
              label="Thermal Stability" 
              value="200°C ±0.5°C" 
              subtext="Heated Bed maintained 60°C (±1.0°C)"
              color="#00f3ff" 
            />
            <StatCard 
              label="Safety Metrics" 
              value="Safe < 35°C" 
              subtext="External MOSFET temp (Limit: 40°C)"
              color="#facc15" 
            />
          </div>
        </div>

        {/* Right Col: Cost Chart */}
        <div className="flex flex-col justify-center">
            <div className="mb-6">
                 <h3 className="text-xl font-bold text-white mb-2 font-display">Cost Efficiency</h3>
                 <p className="text-gray-400 text-sm">Comparison relative to standard entry-level 3D printers.</p>
            </div>
            
            <div className="h-64 w-full bg-slate-800/30 rounded-xl p-4 border border-gray-800">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={costData} layout="vertical">
                  <XAxis type="number" hide />
                  <YAxis dataKey="name" type="category" width={140} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                  <Tooltip 
                    cursor={{fill: 'transparent'}}
                    contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#fff' }}
                  />
                  <Bar dataKey="cost" barSize={30} radius={[0, 4, 4, 0]}>
                    {costData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index === 1 ? '#00ff41' : '#475569'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 flex justify-between items-center text-sm">
                <span className="text-gray-500">Commercial Equivalent</span>
                <span className="text-circuit-green font-bold text-lg">70% Savings</span>
            </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Results;