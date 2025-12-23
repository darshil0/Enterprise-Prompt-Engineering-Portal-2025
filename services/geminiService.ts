import { GoogleGenerativeAI } from "@google/genai";
import { Resource } from '../types';

export class GeminiService {
  private getClient() {
    const apiKey = process.env.GEMINI_API_KEY || process.env.API_KEY;
    if (!apiKey) {
      throw new Error('GEMINI_API_KEY is not defined');
    }
    return new GoogleGenerativeAI(apiKey);
  }

  async repairLinks(resources: Resource[]): Promise<Resource[]> {
    const genAI = this.getClient();
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-pro",
      generationConfig: {
        responseMimeType: "application/json",
      }
    });

    const prompt = `
      Perform a 'Quality Audit' on the following resource links. 
      Identify entries with placeholders or missing URLs and find the official documentation links.
      Return ONLY a valid JSON array with the same structure as the input.
      
      Input Data: ${JSON.stringify(resources)}
      
      Output Schema:
      [
        {
          "organization": "string",
          "type": "string",
          "description": "string",
          "link": "string (valid URL)",
          "category": "Documentation | Cookbook | Blog | Community"
        }
      ]
    `;

    try {
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      
      // Clean up the response (remove markdown code blocks if present)
      const cleanText = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
      const parsed = JSON.parse(cleanText);
      
      // Validate the response has the correct structure
      if (Array.isArray(parsed)) {
        return parsed;
      }
      
      return resources;
    } catch (error) {
      console.error("Repair failed:", error);
      return resources;
    }
  }

  async refinePrompt(userPrompt: string): Promise<string> {
    const genAI = this.getClient();
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-pro",
      systemInstruction: `You are the Master Prompt Architect. 
Refine user inputs into "Architectural Input Designs".

Process:
1. Analyze missing Context, Role, or Constraints
2. Apply COSTAR or RISEN frameworks
3. Output a brief "Logic Analysis" followed by the "Refined Prompt"

Use professional technical tone and provide actionable, production-ready prompts.`
    });

    try {
      const result = await model.generateContent(userPrompt);
      const response = await result.response;
      return response.text();
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown API error';
      return `Error: ${errorMessage}`;
    }
  }
}

export const geminiService = new GeminiService();
