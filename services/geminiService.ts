
import { GoogleGenAI, Type } from "@google/genai";
import { Resource } from '../types';

export class GeminiService {
  async repairLinks(resources: Resource[]): Promise<Resource[]> {
    // Correctly initialize with named apiKey parameter from process.env.API_KEY
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const prompt = `
      Perform a 'Quality Audit' on the following resource links. 
      Identify entries with placeholders or missing URLs and find the official documentation links.
      Data: ${JSON.stringify(resources)}
      Return only the updated JSON array matching the original schema.
    `;

    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: prompt,
        config: {
          tools: [{ googleSearch: {} }],
          responseMimeType: 'application/json',
          responseSchema: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                organization: { type: Type.STRING },
                type: { type: Type.STRING },
                description: { type: Type.STRING },
                link: { type: Type.STRING },
                category: { type: Type.STRING }
              },
              required: ['organization', 'type', 'description', 'link', 'category']
            }
          }
        }
      });

      // Directly access .text property as per guidelines (not response.text())
      const text = response.text || '[]';
      return JSON.parse(text);
    } catch (error) {
      console.error("Repair failed:", error);
      return resources;
    }
  }

  async refinePrompt(userPrompt: string): Promise<string> {
    // Correctly initialize with named apiKey parameter from process.env.API_KEY
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const systemInstruction = `
      You are the Master Prompt Architect. 
      Refine user inputs into "Architectural Input Designs".
      1. Analyze missing Context, Role, or Constraints.
      2. Apply COSTAR or RISEN frameworks.
      3. Output a brief "Logic Analysis" followed by the "Refined Prompt".
      Use professional technical tone.
    `;

    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: userPrompt,
        config: {
          systemInstruction,
          // Gemini 3 series supports thinkingConfig for reasoning tasks
          thinkingConfig: { thinkingBudget: 2500 }
        }
      });
      // Directly access .text property as per guidelines (not response.text())
      return response.text || "Refinement failed.";
    } catch (error) {
      return `Error: ${error instanceof Error ? error.message : 'Unknown API error'}`;
    }
  }
}

export const geminiService = new GeminiService();
