import React, { useState } from 'react';

const SECTIONS = [
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

export const Manual: React.FC = () => {
  const [activeTab, setActiveTab] = useState('platforms');

  const PlatformCard = ({ title, docs, models, features }: any) => (
    <div className="p-8 bg-surface-50 border border-surface-100 rounded-[2.5rem] space-y-6 hover:shadow-xl hover:border-brand-200 transition-all group">
      <div className="flex justify-between items-center">
        <h4 className="text-xl font-black text-zinc-900 tracking-tight group-hover:text-brand-600 transition-colors">{title}</h4>
        <div className="flex gap-2">
          {docs.map((d: any, i: number) => (
            <a key={i} href={d.link} target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold text-brand-600 uppercase bg-brand-50 px-3 py-1 rounded-lg hover:bg-brand-600 hover:text-white transition-all">{d.label}</a>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block mb-3">Model Ecosystem</span>
          <ul className="text-sm font-semibold text-zinc-600 space-y-1.5">
            {models.map((m: string, i: number) => <li key={i} className="flex items-center gap-2"><div className="size-1 bg-brand-400 rounded-full" />{m}</li>)}
          </ul>
        </div>
        <div>
          <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block mb-3">Key Features</span>
          <div className="flex flex-wrap gap-2">
            {features.map((f: string, i: number) => <span key={i} className="px-2 py-1 bg-white border border-zinc-100 rounded-md text-[10px] font-bold text-zinc-500">{f}</span>)}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      <div className="mb-16">
        <div className="flex items-center gap-4 mb-4">
          <div className="size-12 bg-white glass-card rounded-2xl flex items-center justify-center text-2xl shadow-sm border border-zinc-100 animate-float">
            📖
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-zinc-200 to-transparent"></div>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl font-extrabold tracking-tight text-zinc-900 mb-2">Comprehensive AI Resources Guide</h2>
            <p className="text-zinc-500 font-medium max-w-2xl">The ultimate enterprise manual for engineering, deployment, and intelligence orchestration.</p>
          </div>
          <div className="text-right">
            <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest block">Guide Version 2.0</span>
            <span className="text-xs font-bold text-brand-600">Updated: Dec 2025</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        <aside className="lg:w-80 shrink-0">
          <div className="sticky top-32 bg-white/50 p-4 rounded-[2.5rem] border border-zinc-100 shadow-sm space-y-1">
            <span className="px-4 text-[9px] font-black text-zinc-400 uppercase tracking-[0.3em] mb-4 block">Navigation Core</span>
            {SECTIONS.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveTab(section.id)}
                className={`w-full text-left px-5 py-3.5 rounded-2xl text-[11px] font-extrabold transition-all tracking-tight ${
                  activeTab === section.id
                    ? 'bg-zinc-900 text-white shadow-xl translate-x-1'
                    : 'text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900'
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>
        </aside>

        <div className="flex-1 bg-white border border-zinc-100 rounded-[3.5rem] p-10 lg:p-20 shadow-2xl shadow-zinc-200/50 min-h-[800px]">
          {activeTab === 'platforms' && (
            <div className="space-y-16 animate-in fade-in duration-500">
              <div className="border-b border-zinc-100 pb-10">
                <h3 className="text-3xl font-black text-zinc-900 tracking-tight mb-4">1. Major AI Platforms</h3>
                <p className="text-zinc-500 font-medium">Detailed analysis of market leaders and frontier models.</p>
              </div>

              <div className="grid grid-cols-1 gap-10">
                <PlatformCard 
                  title="Anthropic (Claude)"
                  docs={[{label: 'Main Docs', link: 'https://docs.anthropic.com'}, {label: 'Library', link: 'https://platform.claude.com/docs/en/resources/prompt-library/library'}]}
                  models={['Claude Opus 4.5 (Nov 2025)', 'Claude Sonnet 4.5', 'Claude Haiku 4.5']}
                  features={['200K-1M Context', 'Thinking Mode', 'Tool Use', 'Artifacts', 'Web Search']}
                />
                <PlatformCard 
                  title="Google AI & DeepMind"
                  docs={[{label: 'Gemini API', link: 'https://ai.google.dev'}, {label: 'AI Studio', link: 'https://aistudio.google.com'}]}
                  models={['Gemini 3 Flash (Latest)', 'Gemini 3 Pro', 'Gemini 3 Deep Think']}
                  features={['Multimodal Native', '1M+ Context', 'Code Execution', 'Search Grounding', 'SWE-bench Champion']}
                />
                <PlatformCard 
                  title="OpenAI"
                  docs={[{label: 'Platform', link: 'https://platform.openai.com/docs'}, {label: 'Cookbook', link: 'https://cookbook.openai.com'}]}
                  models={['GPT-5.2 (Flagship)', 'GPT-5.2 Thinking', 'GPT Image 1.5', 'Sora 2']}
                  features={['400K Context', 'Human Expert Logic', 'JSON Mode', 'Assistants API', 'Real-time Video']}
                />
                <PlatformCard 
                  title="xAI (Grok)"
                  docs={[{label: 'API Docs', link: 'https://docs.x.ai'}, {label: 'Console', link: 'https://console.x.ai'}]}
                  models={['Grok 4.1 Fast (Dec 2025)', 'Grok 4 Heavy', 'Grok Code Fast 1']}
                  features={['2M Context Window', 'X Data Integration', 'Agent Tools API', 'MCP Support', 'Aurora Image Gen']}
                />
                <PlatformCard 
                  title="AWS Bedrock (Nova)"
                  docs={[{label: 'Amazon Bedrock', link: 'https://aws.amazon.com/bedrock'}, {label: 'Nova Website', link: 'https://nova.amazon.com'}]}
                  models={['Nova 2 Pro (Preview)', 'Nova 2 Omni', 'Nova Act (Agents)']}
                  features={['Enterprise Security', 'AgentCore Platform', 'Guardrails', '1M Context', 'Intelligent Prompt Routing']}
                />
              </div>
            </div>
          )}

          {activeTab === 'tools' && (
            <div className="space-y-16 animate-in fade-in duration-500">
              <div className="border-b border-zinc-100 pb-10">
                <h3 className="text-3xl font-black text-zinc-900 tracking-tight mb-4">2. Development Tools & Frameworks</h3>
                <p className="text-zinc-500 font-medium">Orchestration layers for complex AI applications.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 bg-zinc-900 rounded-[2.5rem] border border-zinc-800 text-white">
                  <h4 className="text-lg font-black mb-4">LangChain</h4>
                  <p className="text-zinc-400 text-sm mb-6 leading-relaxed">Standard for chainable workflows, memory management, and tool-use orchestration.</p>
                  <a href="https://docs.langchain.com" target="_blank" rel="noopener noreferrer" className="text-brand-400 text-xs font-bold uppercase tracking-widest">Documentation →</a>
                </div>
                <div className="p-8 bg-zinc-900 rounded-[2.5rem] border border-zinc-800 text-white">
                  <h4 className="text-lg font-black mb-4">LlamaIndex</h4>
                  <p className="text-zinc-400 text-sm mb-6 leading-relaxed">Deep data connectivity and indexing for high-performance RAG and query engines.</p>
                  <a href="https://docs.llamaindex.ai" target="_blank" rel="noopener noreferrer" className="text-brand-400 text-xs font-bold uppercase tracking-widest">Documentation →</a>
                </div>
              </div>
              <div className="space-y-6 pt-10 border-t border-zinc-100">
                <h4 className="text-xl font-black text-zinc-900">Vector Infrastructure</h4>
                <div className="flex flex-wrap gap-4">
                  {['Pinecone', 'Weaviate', 'Qdrant', 'Chroma', 'Milvus'].map(v => (
                    <span key={v} className="px-6 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-xs font-bold text-zinc-600">{v}</span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'prompting' && (
            <div className="space-y-12 animate-in fade-in duration-500">
              <h3 className="text-3xl font-black text-zinc-900 tracking-tight mb-4">3. Prompt Engineering</h3>
              <div className="space-y-10">
                <div className="p-10 bg-brand-50 rounded-[3rem] border border-brand-100">
                  <h4 className="text-xl font-black text-brand-900 mb-4">RISEN Protocol</h4>
                  <p className="text-sm text-brand-700 font-medium leading-relaxed">Best for: High-level strategies, architecture design, test planning.</p>
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-bold text-brand-800">
                    <span className="flex items-center gap-2"><div className="size-1 bg-brand-400 rounded-full" />Role Identity</span>
                    <span className="flex items-center gap-2"><div className="size-1 bg-brand-400 rounded-full" />Instructions</span>
                    <span className="flex items-center gap-2"><div className="size-1 bg-brand-400 rounded-full" />Steps/Sequence</span>
                    <span className="flex items-center gap-2"><div className="size-1 bg-brand-400 rounded-full" />End Goal</span>
                    <span className="flex items-center gap-2 sm:col-span-2"><div className="size-1 bg-brand-400 rounded-full" />Narrowing Constraints</span>
                  </div>
                </div>
                <div className="p-10 bg-zinc-900 rounded-[3rem] text-white">
                  <h4 className="text-xl font-black text-brand-400 mb-4">COSTAR Framework</h4>
                  <p className="text-sm text-zinc-400 font-medium leading-relaxed">Best for: Executive reports, documentation, presentations.</p>
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-bold text-zinc-400">
                    <span className="flex items-center gap-2"><div className="size-1 bg-brand-400 rounded-full" />Context Settings</span>
                    <span className="flex items-center gap-2"><div className="size-1 bg-brand-400 rounded-full" />Objective Focus</span>
                    <span className="flex items-center gap-2"><div className="size-1 bg-brand-400 rounded-full" />Style of Writing</span>
                    <span className="flex items-center gap-2"><div className="size-1 bg-brand-400 rounded-full" />Tone/Mood</span>
                    <span className="flex items-center gap-2"><div className="size-1 bg-brand-400 rounded-full" />Audience Level</span>
                    <span className="flex items-center gap-2"><div className="size-1 bg-brand-400 rounded-full" />Response Format</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'qa' && (
            <div className="space-y-12 animate-in fade-in duration-500">
              <h3 className="text-3xl font-black text-zinc-900 tracking-tight mb-4">4. Testing & Quality Assurance</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 border border-zinc-100 rounded-3xl space-y-4">
                  <h4 className="font-black text-zinc-900 uppercase text-xs tracking-widest">AI-Powered Tools</h4>
                  <ul className="text-sm font-semibold text-zinc-600 space-y-2">
                    <li><a href="https://www.testim.io" target="_blank" rel="noopener noreferrer" className="hover:text-brand-600">Testim - AI stabilized tests</a></li>
                    <li><a href="https://www.mabl.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-600">Mabl - Auto-healing locators</a></li>
                    <li><a href="https://applitools.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-600">Applitools - Visual AI testing</a></li>
                  </ul>
                </div>
                <div className="p-8 border border-zinc-100 rounded-3xl space-y-4 bg-zinc-50">
                  <h4 className="font-black text-zinc-900 uppercase text-xs tracking-widest">Eval Frameworks</h4>
                  <ul className="text-sm font-semibold text-zinc-600 space-y-2">
                    <li><a href="https://docs.ragas.io" target="_blank" rel="noopener noreferrer" className="hover:text-brand-600">RAGAS - RAG Assessment</a></li>
                    <li><a href="https://docs.confident-ai.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-600">DeepEval - Unit tests for LLMs</a></li>
                    <li><a href="https://www.promptfoo.dev" target="_blank" rel="noopener noreferrer" className="hover:text-brand-600">PromptFoo - Red teaming</a></li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'compliance' && (
            <div className="space-y-12 animate-in fade-in duration-500">
              <h3 className="text-3xl font-black text-zinc-900 tracking-tight mb-4">5. Compliance & Security</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-10 bg-emerald-50 border border-emerald-100 rounded-[3rem]">
                  <h4 className="text-xl font-black text-emerald-900 mb-4">HIPAA</h4>
                  <p className="text-xs text-emerald-800 font-medium leading-relaxed">Focus on PHI de-identification, encryption standards, and BAA requirements for healthcare data.</p>
                </div>
                <div className="p-10 bg-violet-50 border border-violet-100 rounded-[3rem]">
                  <h4 className="text-xl font-black text-violet-900 mb-4">GDPR / EU AI Act</h4>
                  <p className="text-xs text-violet-800 font-medium leading-relaxed">Ensuring right to explanation, purpose limitation, and mandatory transparency for foundational models.</p>
                </div>
              </div>
              <div className="p-10 bg-zinc-900 text-white rounded-[3rem]">
                <h4 className="text-xl font-black text-brand-400 mb-4">ISO/IEC 42001</h4>
                <p className="text-sm text-zinc-400 leading-relaxed">The first international standard for AI management systems (AIMS). Essential for enterprise risk management and ethical oversight.</p>
              </div>
            </div>
          )}

          {activeTab === 'learning' && (
            <div className="space-y-12 animate-in fade-in duration-500">
              <h3 className="text-3xl font-black text-zinc-900 tracking-tight mb-4">6. Learning Resources</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <h5 className="font-black text-zinc-900 text-xs uppercase tracking-[0.2em] border-b border-zinc-100 pb-2">Courses</h5>
                  <ul className="text-sm font-semibold text-zinc-500 space-y-2">
                    <li><a href="https://www.deeplearning.ai" target="_blank" rel="noopener noreferrer" className="hover:text-brand-600">DeepLearning.AI</a></li>
                    <li><a href="https://www.fast.ai" target="_blank" rel="noopener noreferrer" className="hover:text-brand-600">Fast.ai</a></li>
                    <li><a href="https://huggingface.co/learn" target="_blank" rel="noopener noreferrer" className="hover:text-brand-600">Hugging Face Course</a></li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h5 className="font-black text-zinc-900 text-xs uppercase tracking-[0.2em] border-b border-zinc-100 pb-2">Books</h5>
                  <ul className="text-sm font-semibold text-zinc-500 space-y-2">
                    <li>Designing ML Systems</li>
                    <li>Build an LLM (Raschka)</li>
                    <li>Prompt Engineering Handbook</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h5 className="font-black text-zinc-900 text-xs uppercase tracking-[0.2em] border-b border-zinc-100 pb-2">Research</h5>
                  <ul className="text-sm font-semibold text-zinc-500 space-y-2">
                    <li><a href="https://arxiv.org" target="_blank" rel="noopener noreferrer" className="hover:text-brand-600">ArXiv (cs.AI)</a></li>
                    <li><a href="https://paperswithcode.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-600">Papers With Code</a></li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'api' && (
            <div className="space-y-10 animate-in fade-in duration-500">
              <h3 className="text-3xl font-black text-zinc-900 tracking-tight mb-4">7. API Quick Reference</h3>
              <div className="space-y-8">
                <div>
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block mb-4">Anthropic Pattern</span>
                  <pre className="p-8 bg-zinc-950 rounded-3xl text-brand-300 font-mono text-xs overflow-x-auto shadow-inner">
{`# Claude-3-5-Sonnet implementation
message = client.messages.create(
    model="claude-3-5-sonnet-20240620",
    max_tokens=1024,
    messages=[{"role": "user", "content": "Hello!"}]
)`}
                  </pre>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block mb-4">OpenAI Pattern</span>
                  <pre className="p-8 bg-zinc-950 rounded-3xl text-brand-300 font-mono text-xs overflow-x-auto shadow-inner">
{`# GPT-4o implementation
completion = client.chat.completions.create(
    model="gpt-4o",
    messages=[{"role": "user", "content": "Hello!"}]
)`}
                  </pre>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'community' && (
            <div className="space-y-12 animate-in fade-in duration-500">
              <h3 className="text-3xl font-black text-zinc-900 tracking-tight mb-4">8. Community & Support</h3>
              <div className="p-10 border border-zinc-100 rounded-[3rem] bg-zinc-50">
                <h4 className="text-xl font-black text-zinc-900 mb-6">Support Channels</h4>
                <ul className="text-sm font-semibold text-zinc-600 space-y-4">
                  <li className="flex items-center justify-between border-b border-zinc-200 pb-2">
                    <span>Anthropic Developer Support</span>
                    <a href="mailto:support@anthropic.com" className="text-brand-600 font-black">Email ↗</a>
                  </li>
                  <li className="flex items-center justify-between border-b border-zinc-200 pb-2">
                    <span>OpenAI Forum</span>
                    <a href="https://community.openai.com" target="_blank" rel="noopener noreferrer" className="text-brand-600 font-black">Visit ↗</a>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Discord Communities</span>
                    <span className="text-zinc-400">LangChain, Hugging Face</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'status' && (
            <div className="space-y-12 animate-in fade-in duration-500">
              <h3 className="text-3xl font-black text-zinc-900 tracking-tight mb-4">9. Status & Monitoring</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { name: 'Anthropic', url: 'https://status.anthropic.com' },
                  { name: 'OpenAI', url: 'https://status.openai.com' },
                  { name: 'Google Cloud', url: 'https://status.cloud.google.com' },
                  { name: 'Azure', url: 'https://status.azure.com' }
                ].map(s => (
                  <a 
                    key={s.name} 
                    href={s.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-6 bg-zinc-900 text-white rounded-2xl flex items-center justify-between group hover:bg-zinc-800 transition-colors"
                  >
                    <div className="flex flex-col">
                      <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">{s.name}</span>
                      <span className="text-xs font-mono truncate">{s.url.replace('https://', '')}</span>
                    </div>
                    <div className="size-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_#10b981]"></div>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
