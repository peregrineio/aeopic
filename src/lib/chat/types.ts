export interface Message {
  id: string;
  role: "bot" | "user";
  content: string;
  timestamp: Date;
  quickReplies?: string[];
}

export interface FAQPattern {
  id: string;
  keywords: string[];
  response: string;
  quickReplies?: string[];
}

export interface ResponseResult {
  response: string;
  confidence: number;
  matchedKeywords: string[];
  quickReplies?: string[];
}
