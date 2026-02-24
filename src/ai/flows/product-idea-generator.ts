'use server';
/**
 * @fileOverview This file provides a Genkit flow for generating confectionery product ideas.
 *
 * - generateProductIdeas - A function that generates confectionery product ideas based on criteria.
 * - ProductIdeaGeneratorInput - The input type for the generateProductIdeas function.
 * - ProductIdeaGeneratorOutput - The return type for the generateProductIdeas function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProductIdeaGeneratorInputSchema = z.object({
  seasonalTheme: z
    .string()
    .optional()
    .describe('A seasonal theme for the product ideas (e.g., Easter, Christmas, Halloween).'),
  preferredIngredients: z
    .array(z.string())
    .optional()
    .describe('A list of preferred ingredients to include in the product ideas.'),
  targetAudience: z
    .string()
    .optional()
    .describe('The target audience for the confectionery products (e.g., kids, adults, luxury market, budget-conscious).'),
});
export type ProductIdeaGeneratorInput = z.infer<typeof ProductIdeaGeneratorInputSchema>;

const ProductIdeaSchema = z.object({
  name: z.string().describe('The name of the confectionery product idea.'),
  description: z
    .string()
    .describe('A brief description of the product, including key ingredients and appeal.'),
  profitabilityNotes: z
    .string()
    .describe('Notes on why this product is unique and potentially profitable, considering ingredient costs, perceived value, and market demand.'),
});

const ProductIdeaGeneratorOutputSchema = z.object({
  ideas: z
    .array(ProductIdeaSchema)
    .describe('A list of unique and profitable confectionery product ideas.'),
});
export type ProductIdeaGeneratorOutput = z.infer<typeof ProductIdeaGeneratorOutputSchema>;

export async function generateProductIdeas(
  input: ProductIdeaGeneratorInput
): Promise<ProductIdeaGeneratorOutput> {
  return productIdeaGeneratorFlow(input);
}

const productIdeaGeneratorPrompt = ai.definePrompt({
  name: 'productIdeaGeneratorPrompt',
  input: {schema: ProductIdeaGeneratorInputSchema},
  output: {schema: ProductIdeaGeneratorOutputSchema},
  prompt: `You are an expert confectionery product developer and business strategist. Your goal is to generate unique and profitable confectionery product ideas.

Consider the following criteria:
{{#if seasonalTheme}}Seasonal Theme: {{{seasonalTheme}}}
{{/if}}
{{#if preferredIngredients}}Preferred Ingredients: {{#each preferredIngredients}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}
{{/if}}
{{#if targetAudience}}Target Audience: {{{targetAudience}}}
{{/if}}

Generate 3-5 distinct confectionery product ideas that are:
1. Unique and appealing.
2. Potentially profitable, considering ingredient costs and perceived value.
3. Tailored to the provided criteria.

For each idea, provide a:
- name: A catchy name for the product.
- description: A brief and enticing description of the product, highlighting its key features, ingredients, and appeal.
- profitabilityNotes: Explain why this product is unique and how it can be profitable, mentioning aspects like ingredient cost-effectiveness, market demand, perceived value, or potential for upselling.

Respond with a JSON array of product ideas following the specified output schema.`,
});

const productIdeaGeneratorFlow = ai.defineFlow(
  {
    name: 'productIdeaGeneratorFlow',
    inputSchema: ProductIdeaGeneratorInputSchema,
    outputSchema: ProductIdeaGeneratorOutputSchema,
  },
  async input => {
    const {output} = await productIdeaGeneratorPrompt(input);
    return output!;
  }
);
