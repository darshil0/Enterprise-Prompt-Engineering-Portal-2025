import React, { useState } from 'react';

interface LayoutProps {
  children: React.ReactNode;
  activeSection: string;
  setActiveSection: (id: string) => void;
}

const NAV_ITEMS = [
  { id: 'intro', label: 'Intelligence Core', icon: 'Shield', category: 'Foundation' },
  { id: 'frameworks', label: 'Logical Frameworks', icon: 'Box', category: 'Foundation' },
  { id: 'system-prompts', label: 'System Architecture', icon: 'Cpu', category: 'Orchestration' },
  { id: 'google-suite', label: 'Google AI Ecosystem', icon: 'Cloud', category: 'Orchestration' },
  { id: 'super-prompts', label: 'Super-Input Logic', icon: 'Zap', category: 'Expert' },
  { id: 'studio-tips', label: 'Studio Optimization', icon: 'Activity', category: 'Expert' },
  { id: 'optimization', label: 'Verification Loops', icon: 'CheckCircle', category: 'Validation' },
  { id: 'benchmarks', label: 'Signal Performance', icon: 'BarChart3', category: 'Validation' },
  { id: 'manual', label: 'Enterprise Manual', icon: 'Book', category: 'Resources' },
  { id: 'resources', label: 'Knowledge Base', icon: 'BookOpen', category: 'Resources' },
  { id: 'roadmap', label: '2026 Horizon', icon: 'Trophy', category: 'Resources' },
];

export const Layout: React.FC<LayoutProps> = ({ children, activeSection, setActiveSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const groupedNav = NAV_ITEMS.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, typeof NAV_ITEMS>);

  return (
    <div className="flex min-h-screen font-sans selection:bg-brand-100 selection:text-brand-900">
      {/* Mobile Backdrop */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-zinc-900/10 backdrop-blur-sm z-[60] md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Futuristic Sidebar */}
      <aside className={`
        fixed left-0 top-0 h-full glass-sidebar w-72 z-[70] transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
        md:translate-x-0 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        flex flex-col
      `}>
        <div className="p-8 border-b border-zinc-100/50">
          <div className="flex items-center gap-3 mb-1">
            <div className="size-10 bg-brand-600 rounded-xl flex items-center justify-center shadow-lg shadow-brand-200">
              <div className="size-5 border-2 border-white/50 rounded-md rotate-45 border-t-white" />
            </div>
            <div>
              <h1 className="text-sm font-extrabold tracking-tight text-zinc-900 leading-none">ARCHITECT</h1>
              <p className="text-[10px] text-zinc-400 font-bold tracking-widest uppercase">Prompt OS v3</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 py-8 space-y-8 scrollbar-hide">
          {Object.entries(groupedNav).map(([category, items]) => (
            <div key={category} className="space-y-2">
              <h3 className="px-4 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">{category}</h3>
              <div className="space-y-1">
                {items.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveSection(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`w-full group flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-300 ${
                      activeSection === item.id
                        ? 'bg-brand-600 text-white shadow-md shadow-brand-100'
                        : 'text-zinc-500 hover:bg-zinc-100/50 hover:text-zinc-900'
                    }`}
                  >
                    <div className={`transition-transform duration-300 ${activeSection === item.id ? 'scale-110' : 'group-hover:scale-110'}`}>
                      <span className="text-lg">
                        {item.id === 'intro' ? '🎯' : 
                         item.id === 'frameworks' ? '🧩' :
                         item.id === 'system-prompts' ? '⚙️' :
                         item.id === 'google-suite' ? '💎' :
                         item.id === 'super-prompts' ? '⚡' :
                         item.id === 'studio-tips' ? '✨' :
                         item.id === 'optimization' ? '📈' :
                         item.id === 'benchmarks' ? '📊' :
                         item.id === 'resources' ? '📚' : 
                         item.id === 'manual' ? '📖' : '🚀'}
                      </span>
                    </div>
                    <span className="text-xs font-semibold">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </nav>

        <div className="p-6 border-t border-zinc-100/50">
          <div className="p-4 bg-zinc-900 rounded-2xl shadow-xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-500/10 rounded-full blur-2xl -mr-8 -mt-8" />
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <div className="size-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Realtime Node</span>
              </div>
              <p className="text-xs font-bold text-white">Gemini-3-Pro-Preview</p>
              <div className="mt-3 h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
                <div className="h-full bg-brand-500 w-3/4 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Container */}
      <main className="flex-1 md:ml-72 flex flex-col min-h-screen">
        <header className="sticky top-0 z-50 glass-sidebar px-8 py-4 flex items-center justify-between border-b border-zinc-100/80">
          <div className="flex items-center gap-4">
             <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 text-zinc-500 bg-zinc-100 rounded-lg"
            >
              <span className="block w-4 h-0.5 bg-current mb-1"></span>
              <span className="block w-4 h-0.5 bg-current mb-1"></span>
              <span className="block w-4 h-0.5 bg-current"></span>
            </button>
            <div className="hidden md:flex items-center gap-2 text-xs font-bold text-zinc-400">
               <span>System</span>
               <span className="text-zinc-300">/</span>
               <span className="text-zinc-900 capitalize">{activeSection.replace('-', ' ')}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center gap-4 border-r border-zinc-100 pr-6 mr-0">
               <div className="flex flex-col items-end">
                  <span className="text-[10px] font-bold text-zinc-400 uppercase leading-none">Global Accuracy</span>
                  <span className="text-xs font-extrabold text-zinc-900">99.82%</span>
               </div>
               <div className="flex flex-col items-end">
                  <span className="text-[10px] font-bold text-zinc-400 uppercase leading-none">Processing</span>
                  <span className="text-xs font-extrabold text-emerald-600">Optimal</span>
               </div>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-zinc-900 text-white rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-zinc-800 transition-colors">
               Sync Manual
            </button>
          </div>
        </header>

        <div className="p-8 lg:p-16 max-w-7xl mx-auto w-full">
           {children}
        </div>

        <footer className="mt-auto p-12 border-t border-zinc-100 text-center">
            <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
              &copy; 2025 Enterprise Intelligence Operations • All Rights Reserved
            </p>
        </footer>
      </main>
    </div>
  );
};