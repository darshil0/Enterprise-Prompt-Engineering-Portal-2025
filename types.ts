
export type ResourceCategory = 'Documentation' | 'Cookbook' | 'Blog' | 'Community';

export interface Resource {
  organization: string;
  type: string;
  description: string;
  link: string;
  category: ResourceCategory;
}

export interface PromptFramework {
  name: string;
  components: string;
  bestFor: string;
}

export interface ModelBenchmark {
  model: string;
  gpqa: string;
  sweBench: string;
  aime: string;
  context: string;
}

export interface SuperPrompt {
  id: string;
  title: string;
  content: string;
  category: string;
}

export interface SystemPrompt {
  model: string;
  official: string;
  augmented: string;
  role: string;
  tone: string;
  guardrails: string;
}

export interface GoogleProduct {
  name: string;
  focus: string;
  prompt: string;
}

export interface SocialAccount {
  name: string;
  handle: string;
  link: string;
  description: string;
}