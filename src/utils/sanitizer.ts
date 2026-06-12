/**
 * Sanitizes input string to prevent prompt injection and remove control characters.
 * This should be used on both client and server sides.
 */
export const sanitizePrompt = (input: string): string => {
  if (!input) return "";

  // Remove control characters and limit length
  // eslint-disable-next-line no-control-regex
  let sanitized = input.replace(/[\x00-\x1F\x7F-\x9F]/g, "");

  // Truncate to a reasonable max length
  const MAX_LENGTH = 4000;
  if (sanitized.length > MAX_LENGTH) {
    sanitized = sanitized.substring(0, MAX_LENGTH);
  }

  // More robust injection patterns
  const injectionPatterns = [
    /ignore previous instructions/gi,
    /ignore all previous/gi,
    /disregard/gi,
    /system prompt/gi,
    /you are now/gi,
    /bypass/gi,
    /jailbreak/gi,
    /---/g,
    /===/g,
  ];

  injectionPatterns.forEach((pattern) => {
    sanitized = sanitized.replace(pattern, "[REDACTED]");
  });

  return sanitized.trim();
};
