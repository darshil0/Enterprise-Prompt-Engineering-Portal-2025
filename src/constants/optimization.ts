import { OptimizationTechnique } from '../types';

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
