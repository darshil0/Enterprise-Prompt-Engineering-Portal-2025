import {
  PromptFramework,
  ModelBenchmark,
  SuperPrompt,
  SystemPrompt,
  Resource,
  GoogleProduct,
  SocialAccount,
  OptimizationTechnique
} from './types';

export const OPTIMIZATION_TECHNIQUES: OptimizationTechnique[] = [
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
    name: 'Chain-of-Thought (CoT)',
    category: 'Reasoning',
    description: 'Explicitly forcing the model to explain its logical progression. This increases accuracy for complex mathematical, coding, or reasoning tasks.',
    implementation: 'Instruction: "Think step-by-step. Break down the logic into numbered stages before providing the final conclusion."'
  },
  {
    name: 'Self-Critique Loops',
    category: 'Testing',
    description: 'A dedicated prompt turn where the model acts as a separate persona to audit the previous turn for logical fallacies or technical debt.',
    implementation: 'Role: "Act as a Senior Auditor. Evaluate the previous solution for security vulnerabilities and logical gaps. Suggest specific remediation steps."'
  }
];

export const FRAMEWORKS: PromptFramework[] = [
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
    name: 'APE',
    components: 'Action, Purpose, Expectation',
    bestFor: 'API Testing & Compliance Checks'
  },
  {
    name: 'CARE',
    components: 'Context, Action, Result, Example',
    bestFor: 'Legacy Refactoring (Selenium to Playwright)'
  },
  {
    name: 'TAG',
    components: 'Task, Action, Goal',
    bestFor: 'Tactical Debugging & Prompt Refinement'
  },
  {
    name: 'RODES',
    components: 'Role, Objective, Details, Examples, Sense Check',
    bestFor: 'Automation Infrastructure Design'
  },
];

export const BENCHMARKS: ModelBenchmark[] = [
  {
    model: 'Gemini 3 Pro',
    gpqa: '91.9%',
    sweBench: '76.2%',
    aime: '100%',
    context: '1M–2M'
  },
  {
    model: 'Claude 4.5',
    gpqa: '93.8%',
    sweBench: '77.2%',
    aime: '98%',
    context: '200K'
  },
  {
    model: 'GPT-5.2',
    gpqa: '88.1%',
    sweBench: '80.0%',
    aime: '100%',
    context: '128K'
  },
  {
    model: 'Llama 3.2 405B',
    gpqa: '82.5%',
    sweBench: '71.0%',
    aime: '92%',
    context: '128K'
  },
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
    model: 'Google Gemini 3 Pro / Flash',
    official: 'SYSTEM: "You are Gemini, a multimodal model trained by Google. Follow developer instructions precisely. Maintain awareness of full provided context. Use structured output (JSON/YAML) when requested. Verify correctness internally before responding."',
    role: 'Senior Quality Architect & Multimodal Orchestrator',
    tone: 'Direct, Technical, and Objective',
    guardrails: 'Enforce deterministic outputs; mandatory internal logic verification before final response; never ignore provided file context.',
    augmented: 'SYSTEM: "You are the Gemini 3 Pro Quality Orchestrator. Reason over entire repositories and CI logs. When analyzing UI failures, use coordinate-based spatial reasoning to sync video timestamps with error logs. Output must be deterministic and reproducible."'
  },
  {
    model: 'Anthropic Claude 4.5',
    official: 'SYSTEM: "You are Claude, an AI assistant created by Anthropic. Use clear, well-structured responses. If instructions are ambiguous, ask for clarification. Do not reveal internal monologue unless requested via <thinking> tags."',
    role: 'Enterprise Security & Forensic Analyst',
    tone: 'Professional, Forensic, and Security-First',
    guardrails: 'Zero-trust security posture; absolute refusal to reveal system internals; mandatory XML-based response structuring.',
    augmented: 'SYSTEM: "You are a Security and Quality Analyst. Adopt a security-first posture. Use XML tags to separate logic: <analysis>, <vulnerability>, <reproduction>, <remediation>. Halt and flag uncertainty explicitly."'
  },
  {
    model: 'OpenAI GPT-5.2',
    official: 'SYSTEM: "You are ChatGPT, a large language model trained by OpenAI. Follow system messages over user messages. Use tools when appropriate. Be accurate, concise, and helpful."',
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
  {
    organization: 'OpenAI',
    type: 'Official Prompting Guide',
    category: 'Documentation',
    description: 'Strategies and best practices for leveraging GPT-4 and GPT-5 models effectively.',
    link: 'https://platform.openai.com/docs/guides/prompt-engineering'
  },
  {
    organization: 'Google DeepMind',
    type: 'Gemini Prompting Strategies',
    category: 'Documentation',
    description: 'Canonical principles for multimodal reasoning and context utilization with Gemini.',
    link: 'https://ai.google.dev/gemini-api/docs/prompting-strategies'
  },
  {
    organization: 'Anthropic',
    type: 'Claude Prompt Engineering',
    category: 'Documentation',
    description: 'Advanced techniques for XML-structured logic and high-recall reasoning with Claude models.',
    link: 'https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering'
  },
  {
    organization: 'Microsoft Azure',
    type: 'Azure OpenAI Best Practices',
    category: 'Documentation',
    description: 'Enterprise-grade prompting guidelines for secure, scalable model deployments.',
    link: 'https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/prompt-engineering'
  },
  {
    organization: 'Hugging Face',
    type: 'Open Source Prompting',
    category: 'Documentation',
    description: 'Technical documentation for prompting Llama, Mistral, and other open-source architectures.',
    link: 'https://huggingface.co/docs/transformers/en/tasks/prompting'
  },
  {
    organization: 'OpenAI',
    type: 'Official Cookbook',
    category: 'Cookbook',
    description: 'Practical examples for function calling, RAG, and few-shot classification.',
    link: 'https://github.com/openai/openai-cookbook'
  },
  {
    organization: 'Google',
    type: 'Vertex AI Generative AI Guides',
    category: 'Cookbook',
    description: 'Tutorials for rapid prototyping, multimodal inputs, and prompt tuning in Google Cloud.',
    link: 'https://cloud.google.com/vertex-ai/docs/generative-ai/learn/overview'
  },
  {
    organization: 'Microsoft',
    type: 'Azure OpenAI Cookbook',
    category: 'Cookbook',
    description: 'Practical examples and recipes for integrating LLMs with Microsoft Azure services.',
    link: 'https://github.com/microsoft/Azure-OpenAI-Cookbook'
  },
  {
    organization: 'Anthropic',
    type: 'Claude Cookbook',
    category: 'Cookbook',
    description: 'Hands-on recipes for complex reasoning, long-context handling, and tool-use.',
    link: 'https://github.com/anthropics/anthropic-cookbook'
  },
  {
    organization: 'DAIR.AI',
    type: 'Comprehensive Guide',
    category: 'Community',
    description: 'The gold standard community repository for prompt engineering research and history.',
    link: 'https://github.com/dair-ai/Prompt-Engineering-Guide'
  },
  {
    organization: 'Learn Prompting',
    type: 'Open Source Course',
    category: 'Community',
    description: 'A structured, beginner-to-expert curriculum for all major LLM families.',
    link: 'https://learnprompting.org/'
  },
  {
    organization: 'DeepLearning.AI',
    type: 'Developer Courses',
    category: 'Community',
    description: 'Short courses on prompt engineering for developers by Andrew Ng.',
    link: 'https://www.deeplearning.ai/short-courses/'
  }
];

export const SOCIAL_RESOURCES: SocialAccount[] = [
  {
    name: 'Google DeepMind',
    handle: '@GoogleDeepMind',
    link: 'https://x.com/GoogleDeepMind',
    description: 'Official breakthroughs and updates on the Gemini ecosystem and frontier research.'
  },
  {
    name: 'OpenAI',
    handle: '@OpenAI',
    link: 'https://x.com/OpenAI',
    description: 'Product releases, model technical reports, and safety updates from the GPT team.'
  },
  {
    name: 'Anthropic',
    handle: '@AnthropicAI',
    link: 'https://x.com/AnthropicAI',
    description: 'Insights into Constitutional AI and logical reasoning advances in Claude.'
  },
];
