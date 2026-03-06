'use server';
/**
 * @fileOverview A Genkit flow for generating marketing messages and sales copy for Easter confectionery products.
 *
 * - generateMarketingMessage - A function that generates marketing messages based on product details and target platform.
 * - MarketingMessageGeneratorInput - The input type for the generateMarketingMessage function.
 * - MarketingMessageGeneratorOutput - The return type for the generateMarketingMessage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const MarketingMessageGeneratorInputSchema = z.object({
  productName: z
    .string()
    .describe('The name of the Easter confectionery product (e.g., "Ovo de Páscoa Crocante").'),
  productPrice: z
    .string()
    .describe('The selling price of the product (e.g., "R$ 15,99", "a partir de R$ 35").'),
  keySellingPoints: z
    .string()
    .describe(
      'Key unique selling points or benefits of the product (e.g., "Chocolate belga, recheio cremoso, sem conservantes").'
    ),
  targetPlatform: z
    .string()
    .describe(
      'The platform where the message will be used (e.g., "WhatsApp", "Instagram Feed", "Instagram Stories").'
    ),
});
export type MarketingMessageGeneratorInput = z.infer<
  typeof MarketingMessageGeneratorInputSchema
>;

const MarketingMessageGeneratorOutputSchema = z.object({
  marketingMessage: z.string().describe('The compelling marketing message or sales copy.'),
});
export type MarketingMessageGeneratorOutput = z.infer<
  typeof MarketingMessageGeneratorOutputSchema
>;

export async function generateMarketingMessage(
  input: MarketingMessageGeneratorInput
): Promise<MarketingMessageGeneratorOutput> {
  return marketingMessageGeneratorFlow(input);
}

const marketingMessagePrompt = ai.definePrompt({
  name: 'marketingMessageGeneratorPrompt',
  input: {schema: MarketingMessageGeneratorInputSchema},
  output: {schema: MarketingMessageGeneratorOutputSchema},
  prompt: `You are an expert marketing copywriter specializing in Easter confectionery sales. Your task is to create a compelling marketing message for an Easter product.

Craft a message that highlights the product's appeal and encourages purchases, specifically tailored for the target platform. Focus on benefits and scarcity where appropriate. Ensure the tone is enticing and professional.

Product Name: {{{productName}}}
Product Price: {{{productPrice}}}
Key Selling Points: {{{keySellingPoints}}}
Target Platform: {{{targetPlatform}}}

---

Generate the marketing message based on the above information.`,
});

const marketingMessageGeneratorFlow = ai.defineFlow(
  {
    name: 'marketingMessageGeneratorFlow',
    inputSchema: MarketingMessageGeneratorInputSchema,
    outputSchema: MarketingMessageGeneratorOutputSchema,
  },
  async input => {
    const {output} = await marketingMessagePrompt(input);
    if (!output) {
      throw new Error('Failed to generate marketing message.');
    }
    return output;
  }
);
