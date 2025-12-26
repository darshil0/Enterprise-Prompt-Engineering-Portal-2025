import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { BENCHMARKS } from '../constants';

export const BenchmarkChart: React.FC = () => {
  const chartData = BENCHMARKS.map(b => ({
    name: b.model,
    GPQA: parseFloat(b.gpqa || '0'),
    SWE: parseFloat(b.sweBench || '0'),
    AIME: parseFloat(b.aime || '0')
  })).filter(item => item.GPQA || item.SWE || item.AIME); // Filter invalid data

  return (
    <div className="w-full bg-white p-6 lg:p-8 xl:p-12 2xl:p-16 rounded-3xl border border-zinc-100 shadow-2xl shadow-zinc-200/50 backdrop-blur-sm">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8 lg:mb-12 xl:mb-16 gap-6 lg:gap-8">
        <div className="min-w-0">
          <h3 className="text-xs lg:text-[10px] font-black uppercase tracking-[0.2em] lg:tracking-[0.3em] text-zinc-400 mb-1.5 lg:mb-2">
            Model Performance Matrix (%)
          </h3>
          <p className="text-xs text-zinc-500 font-medium leading-tight">
            Standardized benchmark scores across diverse reasoning tasks.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 lg:gap-6">
          <div className="flex items-center gap-2 lg:gap-3">
            <div className="size-2 lg:size-2 rounded-full bg-brand-600"></div>
            <span className="text-xs lg:text-[10px] font-bold uppercase tracking-widest text-zinc-500 whitespace-nowrap">
              Reasoning
            </span>
          </div>
          <div className="flex items-center gap-2 lg:gap-3">
            <div className="size-2 lg:size-2 rounded-full bg-violet-600"></div>
            <span className="text-xs lg:text-[10px] font-bold uppercase tracking-widest text-zinc-500 whitespace-nowrap">
              Coding
            </span>
          </div>
          <div className="flex items-center gap-2 lg:gap-3">
            <div className="size-2 lg:size-2 rounded-full bg-emerald-500"></div>
            <span className="text-xs lg:text-[10px] font-bold uppercase tracking-widest text-zinc-500 whitespace-nowrap">
              Logic
            </span>
          </div>
        </div>
      </div>
      
      <div className="h-[350px] lg:h-[400px] xl:h-[450px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart 
            data={chartData} 
            margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
            barGap={12}
            barCategoryGap={20}
          >
            <CartesianGrid 
              strokeDasharray="3 3" 
              stroke="#f8fafc" 
              vertical={false}
              strokeOpacity={0.7}
            />
            <XAxis 
              dataKey="name" 
              stroke="#a1a1aa" 
              fontSize={11} 
              fontWeight={700}
              fontFamily="ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace"
              tickLine={false} 
              axisLine={false} 
              dy={20}
              tick={{ fill: '#71717a' }}
              interval={0}
            />
            <YAxis 
              stroke="#a1a1aa" 
              fontSize={11} 
              fontWeight={700}
              fontFamily="ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace"
              tickLine={false} 
              axisLine={false} 
              domain={[0, 110]}
              dx={-12}
              tick={{ fill: '#71717a' }}
              tickCount={7}
            />
            <Tooltip 
              cursor={{ 
                fill: '#fafafa', 
                borderRadius: 12,
                backdropFilter: 'blur(20px)'
              }}
              contentStyle={{ 
                backgroundColor: 'rgb(17 24 39 / 0.95)', 
                border: '1px solid rgb(55 65 81 / 0.5)',
                borderRadius: '16px',
                padding: '16px',
                boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.5)',
                fontFamily: "ui-monospace, SFMono-Regular, 'SF Mono', Consolas"
              }}
              itemStyle={{ 
                fontSize: '12px', 
                fontWeight: '800', 
                textTransform: 'uppercase', 
                color: '#f8fafc',
                marginBottom: '4px'
              }}
              labelStyle={{ 
                color: '#a1a1aa', 
                marginBottom: '12px', 
                fontSize: '11px', 
                fontWeight: '800', 
                textTransform: 'uppercase', 
                letterSpacing: '0.1em',
                fontFamily: "ui-monospace, SFMono-Regular, 'SF Mono', Consolas"
              }}
              formatter={(value: number) => [`${value.toFixed(1)}%`, '']}
            />
            <Bar 
              dataKey="GPQA" 
              fill="#4f46e5" 
              radius={[6, 6, 0, 0]} 
              barSize={28}
              name="GPQA (Reasoning)"
            />
            <Bar 
              dataKey="SWE" 
              fill="#8b5cf6" 
              radius={[6, 6, 0, 0]} 
              barSize={28}
              name="SWE-Bench (Coding)"
            />
            <Bar 
              dataKey="AIME" 
              fill="#10b981" 
              radius={[6, 6, 0, 0]} 
              barSize={28}
              name="AIME (Logic)"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
