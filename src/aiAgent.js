import { config } from 'dotenv';
import OpenAI from 'openai';

config(); // Load .env

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function generateTweet(prompt = "Write a clever tweet about AI and productivity.") {
  const response = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [{ role: 'user', content: prompt }],
    max_tokens: 100,
  });

  return response.choices[0].message.content.trim();
}
