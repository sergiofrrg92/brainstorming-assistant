import OpenAI from 'openai';
import { config } from 'dotenv';
config();

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  organization: process.env.OPENAI_ORGANIZATION,
  project: process.env.OPENAI_PROJECT,
});

export const generateResponse = async (prompt: string) => {
  const completion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: prompt }],
    model: 'gpt-3.5-turbo-0125',
  });

  return completion.choices[0].message.content;
};
