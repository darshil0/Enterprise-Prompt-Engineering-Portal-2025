export type ResourceCategory = 'All' | 'Documentation' | 'Cookbook' | 'Community';

export interface Resource {
  type: string;
  organization: string;
  description: string;
  link: string;
  category: ResourceCategory;
}

export interface Framework {
  name: string;
  components: string;
  bestFor: string;
}

export interface SuperPrompt {
  id: string;
  title: string;
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

export interface Benchmark {
  model: string;
  context: string;
}

export interface OptimizationTechnique {
  name: string;
  category: string;
  description: string;
  implementation: string;
}
