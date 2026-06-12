import { GoogleProduct } from '../types';

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
