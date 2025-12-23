import React, { useState, useMemo, useEffect } from 'react';
import { Layout } from './components/Layout';
import { BenchmarkChart } from './components/BenchmarkChart';
import { Manual } from './components/Manual';
import {
  FRAMEWORKS,
  SUPER_PROMPTS,
  SYSTEM_PROMPTS,
  INITIAL_RESOURCES,
  GOOGLE_PRODUCTS,
  BENCHMARKS,
  OPTIMIZATION_TECHNIQUES
} from './constants';
import { geminiService } from './services/geminiService';
import { Resource, ResourceCategory } from './types';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('intro');
  const [resources, setResources] = useState<Resource[]>(INITIAL_RESOURCES);
  const [isRepairing, setIsRepairing] = useState(false);
  const [refinementInput, setRefinementInput] = useState('');
  const [refinementResult, setRefinementResult] = useState('');
  const [isRefining, setIsRefining] = useState(false);
  const [resourceFilter, setResourceFilter] = useState<'All' | ResourceCategory>('All');
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const filteredResources = useMemo(() => {
    if (resourceFilter === 'All') return resources;
    return resources.filter(r => r.category === resourceFilter);
  }, [resources, resourceFilter]);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setToast("Copied to clipboard");
  };

  const handleRepairLinks = async () => {
    setIsRepairing(true);
    try {
      const fixed = await geminiService.repairLinks(resources);
      setResources(fixed);
      setToast("Global Portal Audit Complete");
    } catch (error) {
      console.error('Repair error:', error);
      setToast("Network failure during audit");
    } finally {
      setIsRepairing(false);
    }
  };

  const handleRefinePrompt = async () => {
    if (!refinementInput.trim()) return;
    setIsRefining(true);
    setRefinementResult('');
    try {
      const result = await geminiService.refinePrompt(refinementInput);
      setRefinementResult(result);
    } catch (error) {
      console.error('Refinement error:', error);
      setRefinementResult("Error connecting to Neural Engine.");
    } finally {
      setIsRefining(false);
    }
  };

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

  return (
    <Layout activeSection={activeSection} setActiveSection={setActiveSection}>
      {toast && (
        <div className="fixed bottom-12 right-12 z-[100] px-6 py-4 bg-zinc-900 text-white font-bold rounded-2xl shadow-2xl animate-in fade-in slide-in-from-bottom-8 duration-500 border border-zinc-700/50 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="size-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-xs uppercase tracking-widest">{toast}</span>
          </div>
        </div>
      )}

      <div className="space-y-32">
        {activeSection === 'intro' && (
          <div className="space-y-16 animate-in fade-in duration-700">
            <div className="relative p-12 lg:p-20 rounded-[3rem] bg-white border border-zinc-100 overflow-hidden shadow-2xl shadow-zinc-200/50 group">
              <div className="absolute -right-20 -top-20 size-96 bg-brand-500/10 rounded-full blur-[100px] group-hover:bg-brand-500/20 transition-colors duration-1000" />
              <div className="absolute -left-20 -bottom-20 size-96 bg-violet-500/10 rounded-full blur-[100px] group-hover:bg-violet-500/20 transition-colors duration-1000" />
              <div className="relative z-10 max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-50 rounded-full border border-brand-100 text-[10px] font-bold text-brand-600 uppercase tracking-[0.2em] mb-8">
                  <span className="size-1.5 bg-brand-600 rounded-full animate-pulse"></span>
                  Operational Directives
                </div>
                <h3 className="text-5xl lg:text-7xl font-black text-zinc-900 tracking-tighter leading-[1.1] mb-8">
                  Architecture for <br />
                  <span className="text-gradient">Deterministic Logic</span>
                </h3>
                <p className="text-xl text-zinc-500 font-medium leading-relaxed mb-12">
                  Standardizing the bridge between human intent and machine execution.
                  Shift from "trial-and-error" to <span className="text-zinc-900 font-bold border-b-2 border-brand-400">Architectural Orchestration</span>.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={() => setActiveSection('manual')} 
                    className="px-10 py-5 bg-zinc-900 text-white rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-brand-600 transition-all shadow-2xl shadow-zinc-300 active:scale-95"
                  >
                    Explore Manual
                  </button>
                  <button 
                    onClick={() => setActiveSection('frameworks')} 
                    className="px-10 py-5 bg-white border border-zinc-200 text-zinc-600 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-zinc-50 transition-all active:scale-95"
                  >
                    Core Frameworks
                  </button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: 'Latency Target', value: '< 200ms', trend: 'Stable', icon: '⚡' },
                { label: 'Input Efficiency', value: '42.8%', trend: '+12%', icon: '💎' },
                { label: 'System Recall', value: '99.9%', trend: 'Nominal', icon: '🧠' },
                { label: 'Security Grade', value: 'Level 5', trend: 'Active', icon: '🛡️' }
              ].map(stat => (
                <div key={stat.label} className="p-10 bg-white border border-zinc-100 rounded-[2.5rem] hover:shadow-2xl hover:border-brand-200 transition-all duration-500 group">
                  <div className="size-12 bg-zinc-50 rounded-2xl flex items-center justify-center text-2xl mb-8 group-hover:bg-brand-50 group-hover:rotate-12 transition-all">{stat.icon}</div>
                  <div className="text-3xl font-black text-zinc-900 tracking-tighter mb-1">{stat.value}</div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">{stat.label}</span>
                    <span className="text-[10px] font-black text-emerald-600">{stat.trend}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'manual' && <Manual />}

        {activeSection === 'frameworks' && (
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
            <SectionHeader 
              title="Logical Frameworks" 
              subtitle="Structured input protocols that ensure consistency across diverse LLM families." 
              icon="🧩" 
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {FRAMEWORKS.map((framework) => (
                <div key={framework.name} className="group p-10 bg-white border border-zinc-100 rounded-[3rem] hover:border-brand-400 transition-all shadow-sm hover:shadow-3xl hover:shadow-brand-200/20">
                  <div className="flex items-center justify-between mb-10">
                    <h4 className="text-3xl font-black text-zinc-900 tracking-tight">{framework.name}</h4>
                    <div className="size-10 bg-zinc-50 rounded-xl flex items-center justify-center text-sm font-black text-zinc-400 group-hover:bg-brand-600 group-hover:text-white transition-all shadow-inner">
                      {framework.name[0]}
                    </div>
                  </div>
                  <div className="space-y-8">
                    <div>
                      <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block mb-4">
                        Core Attributes
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {framework.components.split(', ').map(component => (
                          <span 
                            key={component} 
                            className="px-3 py-1.5 bg-zinc-50 border border-zinc-100 rounded-lg text-[10px] font-bold text-zinc-600 group-hover:bg-brand-50 group-hover:border-brand-100 transition-colors"
                          >
                            {component}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="pt-8 border-t border-zinc-100">
                      <span className="text-[10px] font-bold text-brand-600 uppercase tracking-widest block mb-3">
                        Target Application
                      </span>
                      <p className="text-base font-semibold text-zinc-600 leading-relaxed italic">
                        "{framework.bestFor}"
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'system-prompts' && (
          <div className="space-y-16 animate-in fade-in duration-700">
            <SectionHeader 
              title="System Architecture" 
              subtitle="Foundational identity patterns and guardrails for high-precision agents." 
              icon="⚙️" 
            />
            {SYSTEM_PROMPTS.map((prompt) => (
              <div 
                key={prompt.model} 
                className="bg-white border border-zinc-100 rounded-[3.5rem] overflow-hidden shadow-2xl shadow-zinc-200/40 group hover:shadow-brand-100/30 transition-shadow mb-12 last:mb-0"
              >
                <div className="p-10 bg-zinc-900 text-white flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex items-center gap-6">
                    <div className="size-14 bg-brand-600 rounded-[1.25rem] flex items-center justify-center font-black text-xl shadow-lg shadow-black/20 group-hover:rotate-6 transition-transform">
                      {prompt.model.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-2xl font-black tracking-tight">{prompt.model}</h3>
                      <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest mt-1">
                        Foundational Layer
                      </p>
                    </div>
                  </div>
                  <div className="px-6 py-2 bg-brand-600 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg shadow-brand-900/40">
                    Verified Architecture
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 border-b border-zinc-50">
                  <div className="p-10 border-r border-zinc-50">
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-2 block">
                      Primary Role
                    </span>
                    <p className="text-sm font-extrabold text-zinc-900">{prompt.role}</p>
                  </div>
                  <div className="p-10 border-r border-zinc-50">
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-2 block">
                      Technical Tone
                    </span>
                    <p className="text-sm font-extrabold text-zinc-900">{prompt.tone}</p>
                  </div>
                  <div className="p-10">
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-2 block">
                      Guardrails
                    </span>
                    <p className="text-xs font-semibold text-zinc-500">{prompt.guardrails}</p>
                  </div>
                </div>
                <div className="p-12 space-y-8">
                  <div className="p-8 bg-zinc-50 rounded-3xl border border-zinc-100 text-zinc-500 font-mono text-[11px] leading-relaxed italic">
                    {prompt.official}
                  </div>
                  <div className="p-8 bg-zinc-950 rounded-[2.5rem] text-brand-200 font-mono text-xs leading-relaxed border border-zinc-800 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-4 right-8 flex gap-2">
                      <div className="size-1.5 rounded-full bg-zinc-800"></div>
                      <div className="size-1.5 rounded-full bg-zinc-800"></div>
                    </div>
                    <span className="text-brand-500 font-black mb-2 block uppercase text-[10px] tracking-widest">
                      Augmented SDET Artifact
                    </span>
                    {prompt.augmented}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeSection === 'google-suite' && (
          <div className="animate-in fade-in duration-700">
            <SectionHeader 
              title="Google AI Ecosystem" 
              subtitle="Multimodal production tools and the leading QA-centric product suite." 
              icon="💎" 
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {GOOGLE_PRODUCTS.map(product => (
                <div 
                  key={product.name} 
                  className="p-12 bg-white border border-zinc-100 rounded-[3.5rem] hover:shadow-2xl transition-all group"
                >
                  <div className="size-14 bg-zinc-50 rounded-2xl flex items-center justify-center text-2xl mb-8 group-hover:bg-brand-600 group-hover:text-white transition-all shadow-inner">
                    {product.name === 'Stitch' ? '🧵' : 
                     product.name === 'Google Flow' ? '🌊' : 
                     product.name === 'Remix' ? '🔄' : '🚀'}
                  </div>
                  <h4 className="text-3xl font-black text-zinc-900 tracking-tighter mb-4">
                    {product.name}
                  </h4>
                  <p className="text-xs font-bold text-brand-600 uppercase tracking-widest mb-8">
                    {product.focus}
                  </p>
                  <div className="p-8 bg-zinc-50 border border-zinc-100 rounded-3xl text-sm font-mono text-zinc-500 italic">
                    "{product.prompt}"
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'super-prompts' && (
          <div className="space-y-24 animate-in fade-in duration-700">
            <SectionHeader 
              title="Super-Input Logic" 
              subtitle="Autonomous coordination blocks for forensic analysis and design." 
              icon="⚡" 
            />
            <div className="bg-zinc-950 rounded-[3.5rem] p-12 lg:p-20 border border-zinc-800 shadow-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-600/10 rounded-full blur-[150px] -mr-60 -mt-60"></div>
              <div className="absolute -left-20 -bottom-20 size-96 bg-violet-500/10 rounded-full blur-[100px] group-hover:bg-violet-500/20 transition-colors duration-1000" />
              <div className="relative z-10 flex flex-col lg:flex-row gap-20">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-3 px-4 py-2 bg-brand-950 rounded-2xl border border-brand-900 text-[10px] font-black text-brand-400 tracking-[0.2em] mb-10">
                    <span className="size-2 bg-brand-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(115,141,249,0.8)]"></span>
                    Neural Reconstruction Engine
                  </div>
                  <h3 className="text-5xl font-black text-white tracking-tighter mb-8 leading-tight">
                    Synthesize <br />
                    <span className="text-gradient">Input Logic</span>
                  </h3>
                  <p className="text-zinc-400 font-medium mb-12 leading-relaxed text-lg italic">
                    Input your draft requirements. The orchestrator will re-engineer the prompt into a professional artifact.
                  </p>
                  <div className="space-y-6">
                    <textarea
                      value={refinementInput}
                      onChange={(e) => setRefinementInput(e.target.value)}
                      className="w-full h-56 bg-zinc-900/40 border border-zinc-800 rounded-3xl p-10 text-white font-mono text-sm focus:ring-2 focus:ring-brand-500 outline-none transition-all placeholder:text-zinc-700 shadow-inner"
                      placeholder="// Describe your automation task or logical intent here..."
                    />
                    <button 
                      onClick={handleRefinePrompt} 
                      disabled={isRefining} 
                      className="w-full py-6 bg-brand-600 hover:bg-brand-500 disabled:bg-zinc-800 text-white font-black text-xs uppercase tracking-[0.4em] rounded-[1.5rem] transition-all shadow-2xl active:scale-95"
                    >
                      {isRefining ? 'Processing Signals...' : 'Execute Reconstruction'}
                    </button>
                  </div>
                </div>
                <div className="flex-1 bg-zinc-900/60 backdrop-blur-md rounded-[3rem] border border-zinc-800/50 p-10 flex flex-col min-h-[500px]">
                  {refinementResult ? (
                    <div className="h-full flex flex-col">
                      <div className="flex-1 font-mono text-sm text-brand-100 leading-relaxed overflow-y-auto whitespace-pre-wrap pr-4 custom-scrollbar">
                        {refinementResult}
                      </div>
                      <button 
                        onClick={() => handleCopy(refinementResult)} 
                        className="mt-10 w-full py-4 bg-white/5 border border-zinc-800 hover:border-brand-500 text-zinc-400 hover:text-brand-300 text-[10px] font-black rounded-xl uppercase tracking-widest transition-all"
                      >
                        Clone to Clipboard
                      </button>
                    </div>
                  ) : (
                    <div className="h-full flex flex-col items-center justify-center text-zinc-700 font-mono text-sm italic gap-4">
                      Standby for signal...
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {SUPER_PROMPTS.map(superPrompt => (
                <div 
                  key={superPrompt.id} 
                  className="p-12 bg-white border border-zinc-100 rounded-[3.5rem] flex flex-col shadow-sm hover:shadow-3xl transition-all group relative overflow-hidden"
                >
                  <h4 className="text-2xl font-black text-zinc-900 tracking-tighter mb-6 group-hover:text-brand-600 transition-colors">
                    {superPrompt.title}
                  </h4>
                  <div className="flex-1 p-8 bg-zinc-50/80 rounded-3xl italic text-zinc-500 text-sm leading-relaxed mb-8 border border-zinc-100/50">
                    "{superPrompt.content}"
                  </div>
                  <button 
                    onClick={() => handleCopy(superPrompt.content)} 
                    className="w-full py-5 bg-zinc-900 text-white text-[10px] font-black rounded-2xl uppercase tracking-[0.2em] hover:bg-brand-600 transition-all shadow-xl active:scale-95"
                  >
                    Copy Strategy
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'studio-tips' && (
          <div className="animate-in fade-in duration-700">
            <SectionHeader 
              title="Studio Optimization" 
              subtitle="Expert-level parameters for fine-tuning Gemini and other LLMs for mission-critical tasks." 
              icon="✨" 
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="p-10 bg-white border border-zinc-100 rounded-[3rem] shadow-sm">
                <h4 className="text-2xl font-black text-zinc-900 mb-6">Temperature Logic</h4>
                <div className="space-y-6">
                  <div className="p-6 bg-zinc-50 rounded-2xl">
                    <span className="text-[10px] font-black text-brand-600 uppercase tracking-widest block mb-2">
                      0.0 - Deterministic
                    </span>
                    <p className="text-sm text-zinc-600 font-medium">
                      Use for code generation, mathematical reasoning, and data extraction where accuracy is non-negotiable.
                    </p>
                  </div>
                  <div className="p-6 bg-zinc-50 rounded-2xl">
                    <span className="text-[10px] font-black text-amber-600 uppercase tracking-widest block mb-2">
                      0.7 - Balanced
                    </span>
                    <p className="text-sm text-zinc-600 font-medium">
                      Ideal for general conversation, summary drafting, and structural planning.
                    </p>
                  </div>
                  <div className="p-6 bg-zinc-50 rounded-2xl">
                    <span className="text-[10px] font-black text-rose-600 uppercase tracking-widest block mb-2">
                      1.0+ - Creative
                    </span>
                    <p className="text-sm text-zinc-600 font-medium">
                      Use for brainstorming, persona-driven dialogue, and exploring edge-case 'vibe' scenarios.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-10 bg-zinc-900 rounded-[3rem] text-white">
                <h4 className="text-2xl font-black text-brand-400 mb-6">Thinking Budgets</h4>
                <p className="text-sm text-zinc-400 mb-8 leading-relaxed">
                  Modern models like Gemini 1.5 Pro support internal reasoning tokens. For complex PR reviews or architectural fixes, 
                  set a thinking budget of 2000+ tokens to allow for deep reflection.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-zinc-800/50 rounded-xl border border-zinc-800">
                    <span className="text-xs font-bold">Standard Task</span>
                    <span className="text-[10px] font-black text-zinc-500">0 Tokens</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-zinc-800/50 rounded-xl border border-zinc-800">
                    <span className="text-xs font-bold">Complex Logic</span>
                    <span className="text-[10px] font-black text-brand-400">2500 Tokens</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-zinc-800/50 rounded-xl border border-zinc-800">
                    <span className="text-xs font-bold">Scientific Analysis</span>
                    <span className="text-[10px] font-black text-emerald-400">8000+ Tokens</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'optimization' && (
          <div className="animate-in fade-in duration-700">
            <SectionHeader 
              title="Verification Loops" 
              subtitle="Techniques for achieving deterministic, high-recall outputs from LLM systems." 
              icon="📈" 
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {OPTIMIZATION_TECHNIQUES.map(technique => (
                <div 
                  key={technique.name} 
                  className="p-12 bg-white border border-zinc-100 rounded-[3.5rem] hover:shadow-xl transition-all group"
                >
                  <span className="px-4 py-1.5 bg-brand-50 text-brand-600 text-[10px] font-black uppercase tracking-widest rounded-full mb-8 inline-block">
                    {technique.category}
                  </span>
                  <h4 className="text-3xl font-black text-zinc-900 tracking-tighter mb-6 leading-tight">
                    {technique.name}
                  </h4>
                  <p className="text-base text-zinc-500 font-medium leading-relaxed mb-10 italic">
                    "{technique.description}"
                  </p>
                  <div className="p-8 bg-zinc-950 rounded-3xl border border-zinc-800 text-brand-300 font-mono text-[11px] leading-relaxed">
                    {technique.implementation}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'benchmarks' && (
          <div className="space-y-12 animate-in fade-in duration-700">
            <SectionHeader 
              title="Signal Performance" 
              subtitle="High-fidelity model benchmarks focused on reasoning and coding." 
              icon="📊" 
            />
            <BenchmarkChart />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {BENCHMARKS.map(benchmark => (
                <div 
                  key={benchmark.model} 
                  className="p-10 bg-white border border-zinc-100 rounded-[2.5rem] text-center shadow-sm hover:shadow-xl transition-all"
                >
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-6 block">
                    {benchmark.model}
                  </span>
                  <div className="text-4xl font-black text-zinc-900 tracking-tighter mb-2">
                    {benchmark.context}
                  </div>
                  <span className="text-[10px] font-black text-brand-600 uppercase tracking-widest">
                    Context Window
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'resources' && (
          <div className="space-y-16 animate-in fade-in duration-700">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
              <SectionHeader 
                title="Knowledge Base" 
                subtitle="Verified laboratory portals and strategic technical guides." 
                icon="📚" 
              />
              <div className="flex gap-4 p-4 bg-zinc-100/50 rounded-3xl border border-zinc-200 shadow-inner mb-16">
                {(['All', 'Documentation', 'Cookbook', 'Community'] as const).map(category => (
                  <button 
                    key={category} 
                    onClick={() => setResourceFilter(category)} 
                    className={`px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${
                      resourceFilter === category 
                        ? 'bg-zinc-900 text-white shadow-2xl scale-105' 
                        : 'text-zinc-500 hover:text-zinc-900 hover:bg-white'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredResources.map((resource, index) => (
                <a 
                  key={index} 
                  href={resource.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group flex flex-col p-12 bg-white border border-zinc-100 rounded-[3.5rem] hover:border-brand-400 hover:shadow-3xl transition-all h-[400px]"
                >
                  <div className="flex justify-between items-start mb-10">
                    <span className="px-4 py-1.5 bg-zinc-50 text-zinc-400 text-[10px] font-black uppercase tracking-widest border border-zinc-100 rounded-xl group-hover:bg-brand-50 group-hover:text-brand-600 transition-colors">
                      {resource.organization}
                    </span>
                    <div className="size-10 rounded-full bg-zinc-50 flex items-center justify-center text-sm opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1 group-hover:-translate-y-1">
                      ↗
                    </div>
                  </div>
                  <h5 className="text-3xl font-black text-zinc-900 tracking-tighter mb-6 group-hover:text-brand-600 transition-colors leading-[1.2]">
                    {resource.type}
                  </h5>
                  <p className="text-base text-zinc-500 font-medium leading-relaxed line-clamp-3 mb-auto italic">
                    "{resource.description}"
                  </p>
                  <div className="mt-10 pt-8 border-t border-zinc-50 flex items-center justify-between">
                    <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">
                      {resource.category}
                    </span>
                  </div>
                </a>
              ))}
            </div>
            <div className="p-16 bg-zinc-900 rounded-[4rem] text-center border border-zinc-800 shadow-3xl relative overflow-hidden group mt-16">
              <div className="relative z-10">
                <h4 className="text-4xl font-black text-white tracking-tight mb-8">
                  Execute Global Portal Audit?
                </h4>
                <p className="text-zinc-400 max-w-2xl mx-auto mb-12 font-medium leading-relaxed text-lg">
                  Synchronize with latest laboratory guidelines. The auditor will refresh documentation nodes.
                </p>
                <button 
                  onClick={handleRepairLinks} 
                  disabled={isRepairing} 
                  className="px-14 py-6 bg-brand-600 hover:bg-brand-500 disabled:bg-zinc-800 text-white rounded-2xl font-black text-xs uppercase tracking-[0.4em] transition-all shadow-3xl mx-auto active:scale-95 flex items-center gap-6"
                >
                  {isRepairing && (
                    <div className="size-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                  )}
                  {isRepairing ? 'Syncing Nodes...' : 'Initialize Deep Scan'}
                </button>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'roadmap' && (
          <div className="animate-in fade-in duration-700">
            <SectionHeader 
              title="2026 Horizon" 
              subtitle="The strategic evolution of prompt engineering into autonomous agency." 
              icon="🚀" 
            />
            <div className="space-y-12">
              {[
                { phase: 'Phase 1: Multi-Agent Choreography', desc: 'Moving from single prompts to "Agent Handshakes" where specialized bots (Security, Perf, QA) collaborate autonomously.', status: 'Upcoming' },
                { phase: 'Phase 2: Temporal Multimodal Debugging', desc: 'Models (Veo 3.1) watching UI sessions and syncing them to backend log trace IDs automatically.', status: 'In Lab' },
                { phase: 'Phase 3: Local SLMs (Small Language Models)', desc: 'Running 8B models (Gemma 2) on local dev machines for real-time, private code auditing.', status: 'Foundational' }
              ].map((item, idx) => (
                <div key={idx} className="p-12 bg-white border border-zinc-100 rounded-[3.5rem] relative group overflow-hidden">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                    <div>
                      <div className="inline-flex items-center gap-2 mb-4">
                        <span className="text-[10px] font-black text-brand-600 uppercase tracking-widest">
                          {item.status}
                        </span>
                        <div className="size-2 bg-brand-600 rounded-full"></div>
                      </div>
                      <h4 className="text-3xl font-black text-zinc-900 tracking-tighter mb-4">
                        {item.phase}
                      </h4>
                      <p className="text-lg text-zinc-500 font-medium leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                    <div className="text-6xl font-black text-zinc-100 group-hover:text-brand-50 transition-colors">
                      0{index + 1}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default App;
