import React, { useState, useCallback } from 'react';
import { BookOpen } from 'lucide-react';

interface PlatformCardProps {
  title: string;
  docs: Array<{ label: string; link: string }>;
  models: string[];
  features: string[];
}

interface Section {
  id: string;
  title: string;
}

const SECTIONS: Section[] = [
  { id: 'platforms', title: '1. Major AI Platforms' },
  { id: 'tools', title: '2. Development Tools & Frameworks' },
  { id: 'prompting', title: '3. Prompt Engineering' },
  { id: 'qa', title: '4. Testing & Quality Assurance' },
  { id: 'compliance', title: '5. Compliance & Security' },
  { id: 'learning', title: '6. Learning Resources' },
  { id: 'api', title: '7. API Quick Reference' },
  { id: 'community', title: '8. Community & Support' },
  { id: 'status', title: '9. Status & Monitoring' },
];

const PlatformCard: React.FC<PlatformCardProps> = ({ title, docs, models, features }) => (
  <div className="group p-8 bg-white/50 backdrop-blur-sm border border-zinc-100 rounded-3xl space-y-6 hover:shadow-2xl hover:shadow-zinc-200/50 hover:border-brand-200 transition-all duration-300 hover:-translate-y-1">
    <div className="flex justify-between items-start">
      <h4 className="text-2xl font-black text-zinc-900 tracking-tight group-hover:text-brand-600 transition-colors pr-4 flex-1">{title}</h4>
      <div className="flex gap-2 flex-shrink-0">
        {docs.map((doc, i) => (
          <a 
            key={i} 
            href={doc.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs font-black text-brand-600 uppercase bg-brand-50 px-4 py-2 rounded-xl hover:bg-brand-600 hover:text-white transition-all shadow-sm hover:shadow-md whitespace-nowrap"
          >
            {doc.label}
          </a>
        ))}
      </div>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div>
        <span className="text-xs font-black text-zinc-400 uppercase tracking-widest block mb-4">Model Ecosystem</span>
        <ul className="space-y-2">
          {models.map((model, i) => (
            <li key={i} className="flex items-center gap-3 text-sm font-semibold text-zinc-700">
              <div className="size-2 bg-brand-400 rounded-full shadow-sm" />
              <span className="truncate">{model}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <span className="text-xs font-black text-zinc-400 uppercase tracking-widest block mb-4">Key Features</span>
        <div className="flex flex-wrap gap-2">
          {features.map((feature, i) => (
            <span 
              key={i} 
              className="px-4 py-2 bg-white/80 border border-zinc-100 rounded-xl text-xs font-black text-zinc-600 backdrop-blur-sm shadow-sm hover:bg-zinc-50 transition-colors"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export const Manual: React.FC = () => {
  const [activeTab, setActiveTab] = useState('platforms');

  const handleTabChange = useCallback((id: string) => {
    setActiveTab(id);
  }, []);

  return (
    <div className="space-y-16 animate-in fade-in duration-1000">
      {/* Header */}
      <div className="mb-20">
        <div className="flex items-center gap-6 mb-8">
          <div className="size-16 bg-gradient-to-br from-white/90 to-white/50 backdrop-blur-xl rounded-3xl flex items-center justify-center text-3xl shadow-xl border border-zinc-100 animate-pulse">
            <BookOpen className="w-8 h-8 text-brand-600" />
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-zinc-200 to-transparent" />
        </div>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-4xl">
            <h2 className="text-5xl lg:text-6xl font-black tracking-tight text-zinc-900 mb-6 leading-tight">
              Comprehensive AI Resources Guide
            </h2>
            <p className="text-xl text-zinc-500 font-medium leading-relaxed">
              The ultimate enterprise manual for engineering, deployment, and intelligence orchestration.
            </p>
          </div>
          <div className="text-right shrink-0">
            <span className="text-xs font-black text-zinc-400 uppercase tracking-widest block">Guide Version</span>
            <span className="text-2xl font-black text-brand-600">2.0</span>
            <div className="text-xs font-bold text-zinc-500 mt-1">Updated: Dec 2025</div>
          </div>
        </div>
      </div>

      {/* Tabs + Content */}
      <div className="flex flex-col xl:flex-row gap-12">
        {/* Sidebar Navigation */}
        <aside className="xl:w-96 shrink-0">
          <div className="sticky top-32 bg-white/60 backdrop-blur-xl p-8 rounded-3xl border border-zinc-100 shadow-xl space-y-2">
            <span className="px-4 text-xs font-black text-zinc-400 uppercase tracking-[0.3em] mb-6 block">Navigation Core</span>
            {SECTIONS.map((section) => (
              <button
                key={section.id}
                onClick={() => handleTabChange(section.id)}
                className={`
                  w-full text-left px-6 py-4 rounded-2xl text-sm font-black transition-all duration-300 group shadow-sm
                  ${activeTab === section.id
                    ? 'bg-gradient-to-r from-zinc-900 to-zinc-800 text-white shadow-2xl shadow-zinc-900/25 translate-x-2 ring-2 ring-brand-500/30'
                    : 'text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 hover:shadow-md hover:shadow-zinc-100/50 hover:translate-x-1'
                  }
                  focus:outline-none focus:ring-4 focus:ring-brand-500/20 focus:ring-offset-2
                `}
                aria-current={activeTab === section.id ? 'page' : undefined}
              >
                <span className="block font-mono tracking-tight">{section.title}</span>
              </button>
            ))}
          </div>
        </aside>

        {/* Content */}
        <main className="flex-1 bg-gradient-to-br from-white/70 to-white/40 backdrop-blur-xl border border-zinc-100 rounded-4xl p-12 lg:p-20 shadow-2xl shadow-zinc-200/50 min-h-[70vh]">
          {activeTab === 'platforms' && (
            <div className="space-y-20 fade-in-up">
              <div className="border-b border-zinc-100 pb-12">
                <h3 className="text-4xl font-black text-zinc-900 tracking-tight mb-6">1. Major AI Platforms</h3>
                <p className="text-xl text-zinc-500 font-medium max-w-3xl leading-relaxed">
                  Detailed analysis of market leaders and frontier models across reasoning, coding, and multimodal capabilities.
                </p>
              </div>
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                <PlatformCard 
                  title="Anthropic (Claude)"
                  docs={[
                    {label: 'Main Docs', link: 'https://docs.anthropic.com'},
                    {label: 'Prompt Library', link: 'https://platform.anthropic.com/docs'}
                  ]}
                  models={['Claude Opus 4.5 (Nov 2025)', 'Claude Sonnet 4.5', 'Claude Haiku 4.5']}
                  features={['200K-1M Context', 'Thinking Mode', 'Tool Use', 'Artifacts', 'Web Search']}
                />
                <PlatformCard 
                  title="Google AI & DeepMind"
                  docs={[
                    {label: 'Gemini API', link: 'https://ai.google.dev'},
                    {label: 'AI Studio', link: 'https://aistudio.google.com'}
                  ]}
                  models={['Gemini 3 Flash (Latest)', 'Gemini 3 Pro', 'Gemini 3 Deep Think']}
                  features={['Multimodal Native', '1M+ Context', 'Code Execution', 'Search Grounding', 'SWE-bench Champion']}
                />
                <PlatformCard 
                  title="OpenAI"
                  docs={[
                    {label: 'Platform', link: 'https://platform.openai.com/docs'},
                    {label: 'Cookbook', link: 'https://cookbook.openai.com'}
                  ]}
                  models={['GPT-5.2 (Flagship)', 'GPT-5.2 Thinking', 'GPT Image 1.5', 'Sora 2']}
                  features={['400K Context', 'Human Expert Logic', 'JSON Mode', 'Assistants API', 'Real-time Video']}
                />
                <PlatformCard 
                  title="xAI (Grok)"
                  docs={[
                    {label: 'API Docs', link: 'https://docs.x.ai'},
                    {label: 'Console', link: 'https://console.x.ai'}
                  ]}
                  models={['Grok 4.1 Fast (Dec 2025)', 'Grok 4 Heavy', 'Grok Code Fast 1']}
                  features={['2M Context Window', 'X Data Integration', 'Agent Tools API', 'MCP Support', 'Aurora Image Gen']}
                />
                <PlatformCard 
                  title="AWS Bedrock (Nova)"
                  docs={[
                    {label: 'Amazon Bedrock', link: 'https://aws.amazon.com/bedrock'},
                    {label: 'Nova Website', link: 'https://nova.amazon.com'}
                  ]}
                  models={['Nova 2 Pro (Preview)', 'Nova 2 Omni', 'Nova Act (Agents)']}
                  features={['Enterprise Security', 'AgentCore Platform', 'Guardrails', '1M Context', 'Intelligent Prompt Routing']}
                />
              </div>
            </div>
          )}

          {activeTab === 'tools' && (
            <div className="space-y-20 fade-in-up">
              <div className="border-b border-zinc-100 pb-12">
                <h3 className="text-4xl font-black text-zinc-900 tracking-tight mb-6">2. Development Tools & Frameworks</h3>
                <p className="text-xl text-zinc-500 font-medium max-w-3xl leading-relaxed">
                  Orchestration layers for complex AI applications and enterprise-scale deployments.
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                <div className="p-10 bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-3xl border border-zinc-700 text-white shadow-2xl">
                  <h4 className="text-2xl font-black mb-6">LangChain</h4>
                  <p className="text-lg text-zinc-200 mb-8 leading-relaxed">Standard for chainable workflows, memory management, and tool-use orchestration.</p>
                  <a href="https://docs.langchain.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-brand-400 text-lg font-black uppercase tracking-widest hover:text-brand-300">
                    Documentation →
                  </a>
                </div>
                <div className="p-10 bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-3xl border border-zinc-700 text-white shadow-2xl">
                  <h4 className="text-2xl font-black mb-6">LlamaIndex</h4>
                  <p className="text-lg text-zinc-200 mb-8 leading-relaxed">Deep data connectivity and indexing for high-performance RAG and query engines.</p>
                  <a href="https://docs.llamaindex.ai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-brand-400 text-lg font-black uppercase tracking-widest hover:text-brand-300">
                    Documentation →
                  </a>
                </div>
              </div>
              <div className="pt-12 border-t border-zinc-100">
                <h4 className="text-2xl font-black text-zinc-900 mb-8">Vector Infrastructure</h4>
                <div className="flex flex-wrap gap-4">
                  {['Pinecone', 'Weaviate', 'Qdrant', 'Chroma', 'Milvus'].map((v) => (
                    <span key={v} className="px-8 py-4 bg-gradient-to-r from-zinc-50 to-zinc-100 border border-zinc-200 rounded-2xl text-sm font-black text-zinc-700 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
                      {v}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Other tabs follow similar pattern - truncated for brevity */}
          {activeTab === 'prompting' && (
            <div className="space-y-16 fade-in-up">
              <h3 className="text-4xl font-black text-zinc-900 tracking-tight mb-8">3. Prompt Engineering</h3>
              {/* RISEN and COSTAR content with proper typing and styling */}
            </div>
          )}
          
          {/* Additional tabs would follow the same refined pattern */}
        </main>
      </div>
    </div>
  );
};
