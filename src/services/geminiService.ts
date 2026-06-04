import { GoogleGenAI } from "@google/genai";

// Vite requires env vars to start with VITE_ for client-side access
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || 
                (window as any).GEMINI_API_KEY || 
                "your_gemini_api_key_here";

const ai = new GoogleGenAI({ apiKey: API_KEY });

export interface Resource {
  type: string;
  organization: string;
  description: string;
  link: string;
  category: string;
}

export const geminiService = {
  async refinePrompt(input: string): Promise<string> {
    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: `You are an expert prompt engineer. Refine the following prompt to be more effective, clear, and structured. Return only the refined prompt without any explanation:

${input}`,
      });

      return response.text || "Error: No response from Gemini.";
    } catch (error) {
      console.error("Gemini refine error:", error);
      throw new Error("Failed to connect to Gemini API. Check your API key.");
    }
  },

  async repairLinks(resources: Resource[]): Promise<Resource[]> {
    try {
      const resourceData = resources
        .map((r, i) => `${i + 1}. ${r.type} | ${r.organization} | ${r.link}`)
        .join("\n");

      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: `You are a link auditor. Review the following resource links and fix any broken or outdated URLs. Return ONLY a JSON array with the same structure, fixing any broken links:

${resourceData}

Return format: [{"type":"...", "organization":"...", "description":"...", "link":"...", "category":"..."}]`,
      });

      const text = response.text || "";
      
      try {
        const jsonMatch = text.match(/\[\s*[\s\S]*\s*\]/);
        if (jsonMatch) {
          const repaired = JSON.parse(jsonMatch[0]);
          if (Array.isArray(repaired)) {
            return repaired;
          }
        }
      } catch (parseError) {
        console.warn("Could not parse Gemini response as JSON, returning original resources");
      }

      return resources;
    } catch (error) {
      console.error("Gemini repair error:", error);
      throw new Error("Network failure during audit");
    }
  },

  async generateContent(prompt: string, model: string = "gemini-2.0-flash"): Promise<string> {
    try {
      const response = await ai.models.generateContent({
        model,
        contents: prompt,
      });
      return response.text || "";
    } catch (error) {
      console.error("Gemini generate error:", error);
      throw new Error("Failed to generate content");
    }
  },
};
