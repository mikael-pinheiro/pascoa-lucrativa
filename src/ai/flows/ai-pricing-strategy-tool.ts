'use server';
/**
 * @fileOverview An AI-powered pricing strategy tool for confectioners.
 *
 * - aiPricingStrategyTool - A function that recommends an optimal selling price for confectionery products.
 * - AIPricingStrategyToolInput - The input type for the aiPricingStrategyTool function.
 * - AIPricingStrategyToolOutput - The return type for the aiPricingStrategyTool function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIPricingStrategyToolInputSchema = z.object({
  ingredientCosts: z
    .number()
    .describe('The total cost of ingredients for one unit of the product.'),
  desiredProfitMargin: z
    .number()
    .min(0.01)
    .max(0.99)
    .describe('The desired profit margin as a decimal (e.g., 0.30 for 30%).'),
  productionTimeHours: z
    .number()
    .min(0)
    .describe('The estimated time in hours to produce one unit of the product.'),
  hourlyLaborCost:
    z.number().min(0).describe('The estimated cost of labor per hour.'),
});
export type AIPricingStrategyToolInput = z.infer<
  typeof AIPricingStrategyToolInputSchema
>;

const AIPricingStrategyToolOutputSchema = z.object({
  recommendedPrice: z
    .number()
    .describe('The optimal recommended selling price for the product.'),
  explanation: z
    .string()
    .describe('A clear explanation of how the recommended price was calculated.'),
});
export type AIPricingStrategyToolOutput = z.infer<
  typeof AIPricingStrategyToolOutputSchema
>;

export async function aiPricingStrategyTool(
  input: AIPricingStrategyToolInput
): Promise<AIPricingStrategyToolOutput> {
  return aiPricingStrategyToolFlow(input);
}

const pricingPrompt = ai.definePrompt({
  name: 'aiPricingStrategyPrompt',
  input: {schema: AIPricingStrategyToolInputSchema},
  output: {schema: AIPricingStrategyToolOutputSchema},
  prompt: `You are an expert pricing strategist for confectionery businesses. Your goal is to recommend an optimal selling price for a product based on the provided input and provide a clear explanation of the calculation.

Calculate the total cost first, which includes ingredient costs and labor costs. Then, calculate the selling price to achieve the desired profit margin.

Input Details:
Ingredient Costs: {{{ingredientCosts}}}
Desired Profit Margin: {{{desiredProfitMargin}}}
Production Time (hours): {{{productionTimeHours}}}
Hourly Labor Cost: {{{hourlyLaborCost}}}

Formulas to use:
1. Total Cost = Ingredient Costs + (Production Time (hours) * Hourly Labor Cost)
2. Selling Price = Total Cost / (1 - Desired Profit Margin)

Provide the recommended selling price and a detailed explanation of your calculation, showing each step clearly.`,
});

const aiPricingStrategyToolFlow = ai.defineFlow(
  {
    name: 'aiPricingStrategyToolFlow',
    inputSchema: AIPricingStrategyToolInputSchema,
    outputSchema: AIPricingStrategyToolOutputSchema,
  },
  async (input) => {
    const {output} = await pricingPrompt(input);
    return output!;
  }
);
