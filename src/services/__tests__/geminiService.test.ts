import { describe, it, expect, vi, beforeEach } from 'vitest';
import { geminiService } from '../geminiService';

// Mock global fetch
const fetchMock = vi.fn();
(window as any).fetch = fetchMock;

describe('geminiService', () => {
  beforeEach(() => {
    fetchMock.mockClear();
  });

  it('should refine a prompt via BFF proxy', async () => {
    fetchMock.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ text: 'Refined prompt result' }),
    });

    const result = await geminiService.refinePrompt('Test prompt');

    expect(fetchMock).toHaveBeenCalledWith('/api/refine', expect.objectContaining({
      method: 'POST',
      body: JSON.stringify({ prompt: 'Test prompt' }),
    }));
    expect(result).toBe('Refined prompt result');
  });

  it('should handle API errors from BFF proxy', async () => {
    fetchMock.mockResolvedValue({
      ok: false,
      status: 429,
      json: () => Promise.resolve({ error: 'Too many requests' }),
    });

    await expect(geminiService.refinePrompt('Test prompt')).rejects.toThrow('Too many requests');
  });
});
