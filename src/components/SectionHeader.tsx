import React from 'react';

const SectionHeader = ({ 
  title, 
  subtitle, 
  icon 
}: { 
  title: string;
  subtitle: string;
  icon: string;
}) => (
  <div className="mb-16 animate-in fade-in slide-in-from-left-4 duration-500">
    <div className="flex items-center gap-4 mb-4">
      <div className="size-12 bg-white glass-card rounded-2xl flex items-center justify-center text-2xl shadow-sm border border-zinc-100 animate-float">
        {icon}
      </div>
      <div className="h-px flex-1 bg-gradient-to-r from-zinc-200 to-transparent"></div>
    </div>
    <h2 className="text-4xl font-extrabold tracking-tight text-zinc-900 mb-2">{title}</h2>
    <p className="text-zinc-500 font-medium max-w-2xl">{subtitle}</p>
  </div>
);

export default SectionHeader;
