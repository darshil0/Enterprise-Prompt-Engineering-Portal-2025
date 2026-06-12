import { Resource } from '../types';

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
