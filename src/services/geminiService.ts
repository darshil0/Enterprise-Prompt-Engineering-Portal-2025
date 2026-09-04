import { sanitizePrompt } from "../utils/sanitizer";

// Bolt Edge Function endpoint URL for prompt refinement
const EDGE_FUNCTION_URL = "https://refine-prompt.supabase.co/functions/v1/refine-prompt";

export const geminiService = {
  async refinePrompt(input: string): Promise<string> {
    const sanitizedInput = sanitizePrompt(input);
    try {
      const response = await fetch(EDGE_FUNCTION_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: sanitizedInput }),
      });

      if (!response.ok) {
        let errorMessage = `Error: ${response.status}`;
        try {
          const errorData = await response.json();
          if (errorData.error) {
            errorMessage = errorData.error;
          }
        } catch {
          // Response was not JSON
        }
        throw new Error(errorMessage);
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
};
