import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { BENCHMARKS } from '../constants';

export const BenchmarkChart: React.FC = () => {
  const chartData = BENCHMARKS.map(b => ({
    name: b.model,
    GPQA: parseFloat(b.gpqa),
    SWE: parseFloat(b.sweBench),
    AIME: parseFloat(b.aime)
  }));

  return (
    <div className="w-full bg-white p-12 lg:p-16 rounded-[3.5rem] border border-zinc-100 shadow-xl shadow-zinc-200/40">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-8">
        <div>
           <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 mb-2">Model Performance Matrix (%)</h3>
           <p className="text-xs text-zinc-500 font-medium">Standardized benchmark scores across diverse reasoning tasks.</p>
        </div>
        <div className="flex flex-wrap gap-6">
          <div className="flex items-center gap-3"><div className="size-2 rounded-full bg-brand-600"></div><span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Reasoning</span></div>
          <div className="flex items-center gap-3"><div className="size-2 rounded-full bg-violet-600"></div><span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Coding</span></div>
          <div className="flex items-center gap-3"><div className="size-2 rounded-full bg-emerald-500"></div><span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Logic</span></div>
        </div>
      </div>
      
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} margin={{ top: 0, right: 30, left: 0, bottom: 0 }} barGap={12}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f4f4f5" vertical={false} />
            <XAxis 
              dataKey="name" 
              stroke="#a1a1aa" 
              fontSize={10} 
              fontWeight={700}
              tickLine={false} 
              axisLine={false} 
              dy={20}
            />
            <YAxis 
              stroke="#a1a1aa" 
              fontSize={10} 
              fontWeight={700}
              tickLine={false} 
              axisLine={false} 
              domain={[0, 110]}
              dx={-10}
            />
            <Tooltip 
              cursor={{ fill: '#fafafa' }}
              contentStyle={{ 
                backgroundColor: '#18181b', 
                border: 'none', 
                borderRadius: '16px',
                padding: '16px',
                boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.5)',
              }}
              itemStyle={{ fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', color: '#fff' }}
              labelStyle={{ color: '#71717a', marginBottom: '8px', fontSize: '10px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em' }}
            />
            <Bar dataKey="GPQA" fill="#4f46e5" radius={[6, 6, 0, 0]} barSize={24} />
            <Bar dataKey="SWE" fill="#8b5cf6" radius={[6, 6, 0, 0]} barSize={24} />
            <Bar dataKey="AIME" fill="#10b981" radius={[6, 6, 0, 0]} barSize={24} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};