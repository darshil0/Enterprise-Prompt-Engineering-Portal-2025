import React, { useState, useCallback } from 'react';
import { Shield, Box, Cpu, Cloud, Zap, Activity, CheckCircle, BarChart3, Book, BookOpen, Trophy } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  activeSection: string;
  setActiveSection: (id: string) => void;
}

const NAV_ITEMS = [
  { id: 'intro', label: 'Intelligence Core', icon: Shield, category: 'Foundation' },
  { id: 'frameworks', label: 'Logical Frameworks', icon: Box, category: 'Foundation' },
  { id: 'system-prompts', label: 'System Architecture', icon: Cpu, category: 'Orchestration' },
  { id: 'google-suite', label: 'Google AI Ecosystem', icon: Cloud, category: 'Orchestration' },
  { id: 'super-prompts', label: 'Super-Input Logic', icon: Zap, category: 'Expert' },
  { id: 'studio-tips', label: 'Studio Optimization', icon: Activity, category: 'Expert' },
  { id: 'optimization', label: 'Verification Loops', icon: CheckCircle, category: 'Validation' },
  { id: 'benchmarks', label: 'Signal Performance', icon: BarChart3, category: 'Validation' },
  { id: 'manual', label: 'Enterprise Manual', icon: Book, category: 'Resources' },
  { id: 'resources', label: 'Knowledge Base', icon: BookOpen, category: 'Resources' },
  { id: 'roadmap', label: '2026 Horizon', icon: Trophy, category: 'Resources' },
] as const;

export const Layout: React.FC<LayoutProps> = ({ children, activeSection, setActiveSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = useCallback((id: string) => {
    setActiveSection(id);
    setIsMobileMenuOpen(false);
  }, [setActiveSection]);

  const groupedNav = NAV_ITEMS.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, typeof NAV_ITEMS[number][]>);

  return (
    <div className="flex min-h-screen font-sans selection:bg-brand-500/10 selection:text-brand-600 antialiased">
      {/* Mobile Backdrop */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-zinc-900/20 backdrop-blur-sm z-[60] md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed left-0 top-0 h-full w-72 z-[70] transition-all duration-500 ease-out
        md:translate-x-0 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        flex flex-col bg-white/80 backdrop-blur-xl border-r border-zinc-100/50 shadow-2xl shadow-zinc-900/5
      `}>
        <div className="p-6 border-b border-zinc-100/50 shrink-0">
          <div className="flex items-center gap-3">
            <div className="size-12 bg-gradient-to-br from-brand-500 to-brand-600 rounded-2xl flex items-center justify-center shadow-xl shadow-brand-500/25">
              <div className="size-6 border-2 border-white/20 rounded-md rotate-45 border-t-white" />
            </div>
            <div className="min-w-0">
              <h1 className="text-base font-black tracking-tight text-zinc-900 truncate leading-tight">ARCHITECT</h1>
              <p className="text-xs font-bold text-zinc-500 tracking-widest uppercase">Prompt OS v3</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 py-8 space-y-6 scrollbar-thin scrollbar-thumb-zinc-200 scrollbar-track-zinc-50 md:scrollbar-hide">
          {Object.entries(groupedNav).map(([category, items]) => (
            <div key={category} className="space-y-2 last:mb-8">
              <h3 className="px-2 text-xs font-black text-zinc-400 uppercase tracking-[0.2em]">{category}</h3>
              <div className="space-y-1">
                {items.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;
                  
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`
                        w-full group flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-200 relative overflow-hidden
                        ${isActive
                          ? 'bg-gradient-to-r from-brand-500 to-brand-600 text-white shadow-lg shadow-brand-500/25'
                          : 'text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 hover:shadow-md hover:shadow-zinc-100/50'
                        }
                        focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2
                      `}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      <div className={`p-2 rounded-xl transition-all duration-200 flex-shrink-0 ${
                        isActive 
                          ? 'bg-white/20 backdrop-blur-sm shadow-lg shadow-white/20' 
                          : 'group-hover:bg-zinc-100'
                      }`}>
                        <Icon size={18} className={`transition-transform duration-200 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`} />
                      </div>
                      <span className="text-sm font-semibold truncate">{item.label}</span>
                      {isActive && (
                        <div className="absolute right-2 top-1/2 -translate-y-1/2 w-1 h-6 bg-white/50 rounded-full" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        <div className="p-6 border-t border-zinc-100/50 shrink-0">
          <div className="p-6 bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-3xl shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-brand-500/5 blur-xl" />
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <div className="size-2.5 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-500/25" />
                <span className="text-xs font-bold text-zinc-300 uppercase tracking-widest">Realtime Node</span>
              </div>
              <p className="text-sm font-bold text-white mb-3 truncate">Gemini-3-Pro-Preview</p>
              <div className="h-2 bg-zinc-700/50 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-emerald-400 to-brand-500 w-[85%] animate-pulse shadow-inner" />
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen md:ml-72">
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-zinc-100/80 shadow-sm shrink-0">
          <div className="px-6 lg:px-8 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsMobileMenuOpen(true)}
                className="md:hidden p-2.5 text-zinc-500 hover:bg-zinc-100 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-500"
                aria-label="Open menu"
              >
                <span className="block w-5 h-0.5 bg-current mb-1.5 rounded-full transition-transform"></span>
                <span className="block w-5 h-0.5 bg-current mb-1.5 rounded-full transition-transform"></span>
                <span className="block w-5 h-0.5 bg-current rounded-full transition-transform"></span>
              </button>
              <div className="hidden md:flex items-center gap-2 text-sm font-bold text-zinc-400">
                <span>System</span>
                <span className="text-zinc-300 mx-1">/</span>
                <span className="text-zinc-900 capitalize font-black tracking-tight">
                  {activeSection.replace(/-/g, ' ')}
                </span>
              </div>
            </div>
            
            <div className="flex items-center gap-4 lg:gap-6">
              <div className="hidden lg:flex items-center gap-6 border-r border-zinc-200 pr-8">
                <div className="text-right">
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider block leading-tight">Global Accuracy</span>
                  <span className="text-lg font-black text-zinc-900">99.82%</span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider block leading-tight">Processing</span>
                  <span className="text-sm font-black text-emerald-600">Optimal</span>
                </div>
              </div>
              <button className="
                flex items-center gap-2 px-6 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-white 
                rounded-2xl text-xs font-black uppercase tracking-widest 
                shadow-lg shadow-zinc-900/25 hover:shadow-xl hover:shadow-zinc-900/40
                transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-zinc-500
              ">
                Sync Manual
              </button>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto">
          <div className="p-8 lg:p-12 xl:p-16 2xl:p-20 max-w-7xl mx-auto w-full">
            {children}
          </div>
        </main>

        <footer className="border-t border-zinc-100 bg-white/50 backdrop-blur-sm shrink-0">
          <div className="px-8 py-8 text-center">
            <p className="text-xs font-black text-zinc-400 uppercase tracking-widest">
              © 2025 Enterprise Intelligence Operations • All Rights Reserved
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};
