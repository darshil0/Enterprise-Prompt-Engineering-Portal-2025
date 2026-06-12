import { ModelBenchmark } from '../types';

export const BENCHMARKS: ModelBenchmark[] = [
  {
    model: 'Gemini 3 Pro',
    gpqa: '96.4%',
    sweBench: '94.5%',
    aime: '100%',
    context: '2M'
  },
  {
    model: 'Gemini 3 Deep Think',
    gpqa: '97.2%',
    sweBench: '96.1%',
    aime: '100%',
    context: '128K'
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
