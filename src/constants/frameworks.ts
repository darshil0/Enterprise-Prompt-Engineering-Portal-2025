import { PromptFramework } from '../types';

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
