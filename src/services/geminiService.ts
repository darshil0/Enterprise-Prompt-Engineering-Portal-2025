import { Resource } from "../types";
import { sanitizePrompt } from "../utils/sanitizer";

export const geminiService = {
  async refinePrompt(input: string): Promise<string> {
    const sanitizedInput = sanitizePrompt(input);
    try {
      const response = await fetch('/api/refine', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: sanitizedInput }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `Error: ${response.status}`);
      }

      const data = await response.json();
      return data.text || "Error: No response from Gemini.";
    } catch (error: any) {
      console.error("Gemini refine error:", error);

      let message = error.message || "An unexpected error occurred.";
      if (message.includes("API_KEY_INVALID")) {
        message = "Invalid API Key on server.";
      } else if (message.toLowerCase().includes("quota")) {
        message = "Rate limit exceeded. Please try again later.";
      } else if (message.toLowerCase().includes("network")) {
        message = "Network error. Please check your connection.";
      } else if (message.toLowerCase().includes("blocked")) {
        message = "Content was blocked by safety filters.";
      }

      throw new Error(message);
    }
  },

  async repairLinks(resources: Resource[]): Promise<Resource[]> {
    // For now, keep as original since it's an admin/internal tool,
    // but ideally this should also be proxied if used publicly.
    // Given the task, we focus on the public-facing refinement.
    return resources;
  },

  async generateContent(_prompt: string, _model: string = "gemini-2.0-flash"): Promise<string> {
    // Proxied version would go here
    return "";
  },
};
