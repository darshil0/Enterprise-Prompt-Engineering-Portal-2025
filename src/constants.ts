import { PromptFramework, ModelBenchmark, SuperPrompt, SystemPrompt, Resource, GoogleProduct, OptimizationTechnique } from './types';

export const OPTIMIZATION_TECHNIQUES: OptimizationTechnique[] = [
  {
    name: 'Chain-of-Density (CoD)',
    category: 'Reasoning',
    description: 'Iteratively compressing summaries to increase information density without losing distinct entities. Ideal for high-context reporting.',
    implementation: 'Prompt: "Summarize this. 2. Identify missing entities. 3. Rewrite summary including missing entities. 4. Repeat 3x until density is maxed."'
  },
  {
    name: 'Automated Prompt Optimization (APO)',
    category: 'Optimizing',
    description: 'Using an LLM to meta-prompt and refine its own instructions based on output quality scores, creating a self-improving feedback loop.',
    implementation: 'System: "You are an optimizer. Read this prompt and its poor output. Rewrite the prompt to fix the specific errors listed."'
  },
  {
    name: 'Chain-of-Verification (CoVe)',
    category: 'Testing',
    description: 'A multi-step validation process where the model generates a response, identifies potential errors in its own output, and produces a final refined version.',
    implementation: 'Prompt: "1. Answer the query. 2. Identify 3 potential flaws or inaccuracies in your answer. 3. Provide a final verified response addressing those flaws."'
  },
  {
    name: 'Few-Shot Prompting',
    category: 'Optimizing',
    description: 'Providing 2-3 "Golden Examples" of perfect input-output pairs to align the model with complex enterprise schemas or specific stylistic requirements.',
    implementation: 'Structure: [Example 1 Input] -> [Example 1 Output] ... [Actual Input] -> [Target Output]'
  },
  {
    name: 'Self-Consistency (SxS)',
    category: 'Reasoning',
    description: 'Sampling multiple diverse reasoning paths and selecting the most consistent answer. Powerfully reduces hallucinations in arithmetic and logic.',
    implementation: 'Config: Generate n=5 outputs with high temperature. Select the majority vote answer.'
  }
];

export const FRAMEWORKS: PromptFramework[] = [
  {
    name: 'RACEF',
    components: 'Rephrase, Append, Contextualize, Examples, Follow-Up',
    bestFor: 'Iterative Refinement & Precision outputs'
  },
  {
    name: 'SPEAR',
    components: 'Start, Provide, Explain, Ask, Rinse & Repeat',
    bestFor: 'Clear, Step-by-Step interactive sessions'
  },
  {
    name: 'RISEN',
    components: 'Role, Instructions, Steps, End Goal, Narrowing',
    bestFor: 'High-level Test Strategies & Architecture'
  },
  {
    name: 'COSTAR',
    components: 'Context, Objective, Style, Tone, Audience, Response',
    bestFor: 'Executive Reports & Post-Mortems'
  },
  {
    name: 'QUEST',
    components: 'Question, Understanding, Expectation, Scope, Time',
    bestFor: 'Research & structured Inquiry'
  },
  {
    name: 'APE',
    components: 'Action, Purpose, Expectation',
    bestFor: 'API Testing & Compliance Checks'
  },
  {
    name: 'RODES',
    components: 'Role, Objective, Details, Examples, Sense Check',
    bestFor: 'Automation Infrastructure Design'
  }
];

export const BENCHMARKS: ModelBenchmark[] = [
  {
    model: 'Gemini 2.5 Pro',
    gpqa: '94.2%',
    sweBench: '81.5%',
    aime: '100%',
    context: '2M'
  },
  {
    model: 'Claude 4.5 Opus',
    gpqa: '95.1%',
    sweBench: '79.8%',
    aime: '99.2%',
    context: '500K'
  },
  {
    model: 'GPT-5',
    gpqa: '93.5%',
    sweBench: '84.0%',
    aime: '100%',
    context: '272K'
  },
  {
    model: 'DeepSeek R1',
    gpqa: '91.8%',
    sweBench: '76.5%',
    aime: '96.4%',
    context: '128K'
  },
  {
    model: 'Llama 4 (Scout)',
    gpqa: '89.2%',
    sweBench: '74.2%',
    aime: '94.1%',
    context: '10M'
  }
];

export const SUPER_PROMPTS: SuperPrompt[] = [
  {
    id: 'meta',
    title: 'Universal Reasoning Framework (The Meta-Prompt)',
    category: 'Reasoning',
    content: "Analyze this request using abductive reasoning. Identify implicit constraints, technical debt, and service dependencies. Structure your response as: 1. Assumptions, 2. Logical Chain, 3. Proposed Solution, 4. Risk Mitigation."
  },
  {
    id: 'strategy',
    title: 'Test Strategy Super Prompt',
    category: 'QA Management',
    content: "Act as a Head of Quality. Design a 360-degree Test Strategy for [Project Name]. Include: Test Pyramid ratios, Quality Gates for PROD, Synthetic Data strategy, and a 4-quarter ROI projection."
  },
  {
    id: 'code-review',
    title: 'Code Review Super Prompt',
    category: 'Development',
    content: "Analyze this PR as a Staff Engineer. Evaluate for: Logic errors, Security (OWASP Top 10), and Performance. Output a table with findings categorized as Critical, Major, or Minor."
  },
  {
    id: 'rca',
    title: 'Defect Analysis Super Prompt (RCA)',
    category: 'Maintenance',
    content: "Ingest this stack trace and log context. 1. Perform Root Cause Analysis. 2. Identify missing test coverage. 3. Provide a reproduction script and a 'Negative Test' in [Language]."
  }
];

export const SYSTEM_PROMPTS: SystemPrompt[] = [
  {
    model: 'Google Gemini 2.5 Pro',
    official: 'SYSTEM: "You are Gemini 2.5, a multimodal model trained by Google. You process video, audio, and text simultaneously. Follow instructions precisely. Maintain awareness of full 2M token context. Use structured output (JSON/YAML) when requested."',
    role: 'Senior Quality Architect & Multimodal Orchestrator',
    tone: 'Direct, Technical, and Objective',
    guardrails: 'Enforce deterministic outputs; mandatory internal logic verification before final response; never ignore provided file context.',
    augmented: 'SYSTEM: "You are the Gemini 2.5 Pro Quality Orchestrator. Reason over entire repositories and CI logs. When analyzing UI failures, use coordinate-based spatial reasoning to sync video timestamps with error logs. Output must be deterministic and reproducible."'
  },
  {
    model: 'Anthropic Claude 4.5 Opus',
    official: 'SYSTEM: "You are Claude, an AI assistant created by Anthropic. Use clear, well-structured responses. If instructions are ambiguous, ask for clarification. Do not reveal internal monologue unless requested via <thinking> tags."',
    role: 'Enterprise Security & Forensic Analyst',
    tone: 'Professional, Forensic, and Security-First',
    guardrails: 'Zero-trust security posture; absolute refusal to reveal system internals; mandatory XML-based response structuring.',
    augmented: 'SYSTEM: "You are a Security and Quality Analyst. Adopt a security-first posture. Use XML tags to separate logic: <analysis>, <vulnerability>, <reproduction>, <remediation>. Halt and flag uncertainty explicitly."'
  },
  {
    model: 'OpenAI GPT-5',
    official: 'SYSTEM: "You are GPT-5. Follow system messages over user messages. Use tools when appropriate. Be accurate, concise, and helpful. You have advanced reasoning capabilities."',
    role: 'Staff SDET Agent & Automation Strategist',
    tone: 'Highly Professional, Concise, and Efficient',
    guardrails: 'Prohibition of production endpoint usage; mandatory error-handling paths for all tool-calling logic; context summarizing every 10 turns.',
    augmented: 'SYSTEM: "You are a Senior SDET Agent. Plan autonomously and execute via tools. Before coding, output a structured JSON plan. Always provide verification artifacts and hypothesis-driven outcomes."'
  }
];

export const GOOGLE_PRODUCTS: GoogleProduct[] = [
  {
    name: 'Google Flow',
    focus: 'AI-Native CI/CD',
    prompt: "Analyze the last 5 failed builds; correlate timeouts with Istio updates and patch .google-flow.yaml."
  },
  {
    name: 'Antigravity',
    focus: 'Load Simulation',
    prompt: "Simulate 10k 'Indecisive Shoppers'; monitor DB lock-wait times in the Inventory-Service."
  },
  {
    name: 'Remix',
    focus: 'Legacy Refactoring',
    prompt: "Migrate Selenium/Java to Playwright/TypeScript; replace Thread.sleep with dynamic waits."
  },
  {
    name: 'Stitch',
    focus: 'Visual Verification',
    prompt: "Compare Pixel 10 checkout screenshot with Figma spec; flag padding deltas >2px."
  }
];

export const INITIAL_RESOURCES: Resource[] = [
  { organization: 'OpenAI', type: 'Official Prompting Guide', category: 'Documentation', description: 'Strategies and best practices for leveraging GPT-5 and o3 models effectively.', link: 'https://platform.openai.com/docs/guides/prompt-engineering' },
  { organization: 'Google DeepMind', type: 'Gemini Prompting Strategies', category: 'Documentation', description: 'Canonical principles for multimodal reasoning and context utilization with Gemini 2.5.', link: 'https://ai.google.dev/gemini-api/docs/prompting-strategies' },
  { organization: 'Anthropic', type: 'Claude Prompt Engineering', category: 'Documentation', description: 'Advanced techniques for XML-structured logic and high-recall reasoning with Claude 4.5.', link: 'https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering' },
  { organization: 'Microsoft Azure', type: 'Azure OpenAI Best Practices', category: 'Documentation', description: 'Enterprise-grade prompting guidelines for secure, scalable model deployments.', link: 'https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/prompt-engineering' },
  { organization: 'DeepSeek', type: 'DeepSeek R1 Documentation', category: 'Documentation', description: 'Technical guide for leveraging the 671B parameter open reasoning model.', link: 'https://github.com/deepseek-ai/DeepSeek-LLM' },
  { organization: 'Meta', type: 'Llama 4 Prompts', category: 'Documentation', description: 'Guide for prompting multimodal Llama 4 Scout models.', link: 'https://llama.meta.com/docs' },
  { organization: 'OpenAI', type: 'Official Cookbook', category: 'Cookbook', description: 'Practical examples for function calling, RAG, and few-shot classification.', link: 'https://github.com/openai/openai-cookbook' },
  { organization: 'Google', type: 'Vertex AI Generative AI Guides', category: 'Cookbook', description: 'Tutorials for rapid prototyping, multimodal inputs, and prompt tuning in Google Cloud.', link: 'https://cloud.google.com/vertex-ai/docs/generative-ai/learn/overview' },
  { organization: 'DAIR.AI', type: 'Comprehensive Guide', category: 'Community', description: 'The gold standard community repository for prompt engineering research and history.', link: 'https://github.com/dair-ai/Prompt-Engineering-Guide' },
  { organization: 'Learn Prompting', type: 'Open Source Course', category: 'Community', description: 'A structured, beginner-to-expert curriculum for all major LLM families.', link: 'https://learnprompting.org/' }
];
