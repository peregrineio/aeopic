import { ResponseResult } from "./types";
import { faqPatterns, defaultResponse } from "./knowledgeBase";

/**
 * Normalizes a string for keyword matching
 * - Lowercase
 * - Remove punctuation
 * - Trim whitespace
 */
function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Checks if a keyword matches in the message
 * Handles multi-word keywords and partial matches
 */
function keywordMatches(keyword: string, normalizedMessage: string, messageWords: string[]): boolean {
  const normalizedKeyword = normalizeText(keyword);

  // For multi-word keywords, check if the phrase exists in the message
  if (normalizedKeyword.includes(" ")) {
    return normalizedMessage.includes(normalizedKeyword);
  }

  // For single-word keywords, check word-level matching
  // Also check for partial matches (e.g., "landscap" matches "landscaping")
  return messageWords.some(
    (word) => word === normalizedKeyword || word.startsWith(normalizedKeyword) || normalizedKeyword.startsWith(word)
  );
}

/**
 * Finds the best matching FAQ pattern for a user message
 * Truncates very long messages (500+ chars) to first 200 chars for performance
 */
export function findBestMatch(userMessage: string): ResponseResult {
  // Truncate very long messages for performance
  const messageToProcess = userMessage.length > 500 ? userMessage.slice(0, 200) : userMessage;

  const normalizedMessage = normalizeText(messageToProcess);
  const messageWords = normalizedMessage.split(" ").filter((w) => w.length > 0);

  let bestMatch: {
    pattern: (typeof faqPatterns)[0] | null;
    matchCount: number;
    matchedKeywords: string[];
  } = {
    pattern: null,
    matchCount: 0,
    matchedKeywords: [],
  };

  // Check each FAQ pattern
  for (const pattern of faqPatterns) {
    const matchedKeywords: string[] = [];

    for (const keyword of pattern.keywords) {
      if (keywordMatches(keyword, normalizedMessage, messageWords)) {
        matchedKeywords.push(keyword);
      }
    }

    // Update best match if this pattern has more keyword matches
    if (matchedKeywords.length > bestMatch.matchCount) {
      bestMatch = {
        pattern,
        matchCount: matchedKeywords.length,
        matchedKeywords,
      };
    }
  }

  // If no keywords matched, return default response
  if (!bestMatch.pattern || bestMatch.matchCount === 0) {
    return {
      response: defaultResponse.response,
      confidence: 0,
      matchedKeywords: [],
      quickReplies: defaultResponse.quickReplies,
    };
  }

  // Calculate confidence as ratio of matched keywords to total keywords in pattern
  const confidence = bestMatch.matchCount / bestMatch.pattern.keywords.length;

  return {
    response: bestMatch.pattern.response,
    confidence,
    matchedKeywords: bestMatch.matchedKeywords,
    quickReplies: bestMatch.pattern.quickReplies,
  };
}
