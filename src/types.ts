export type ResourceCategory = 'All' | 'Documentation' | 'Cookbook' | 'Community';

export interface Resource {
  type: string;
  organization: string;
  description: string;
  link: string;
  category: ResourceCategory;
}

export interface PromptFramework {
  name: string;
  components: string;
  bestFor: string;
}

export interface SuperPrompt {
  id: string;
  title: string;
  category: string;
  content: string;
}

export interface SystemPrompt {
  model: string;
  role: string;
  tone: string;
  guardrails: string;
  official: string;
  augmented: string;
}

export interface GoogleProduct {
  name: string;
  focus: string;
  prompt: string;
}

export interface ModelBenchmark {
  model: string;
  gpqa: string;
  sweBench: string;
  aime: string;
  context: string;
}

export interface OptimizationTechnique {
  name: string;
  category: string;
  description: string;
  implementation: string;
}
