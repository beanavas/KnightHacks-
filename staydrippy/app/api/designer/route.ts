import { NextResponse } from 'next/server';


import OpenAI from 'openai';
import { wardrobe } from '../../../data/wardrobeData';

const openai = new OpenAI({
  apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
});
// Hardcoded clothing items database


export async function POST(request: Request) {   
        const { theme } = await request.json();

        const prompt = createPrompt(theme);

        try {
            // Send the prompt to the OpenAI API
            const completion = await openai.chat.completions.create({
                messages: [{ role: 'system', content: prompt }],
                model: 'gpt-4o',
                response_format: {type: 'json_object'}
              });

              const ids = completion.choices[0].message.content;

              console.log(prompt);
              console.log(ids);

          
            return NextResponse.json({
                ids: ids,
              }, { status: 200 });
        } catch (error) {
            console.error('Error calling OpenAI API:', error);
            

        return NextResponse.json({
            message: 'Something Failed',
          }, { status: 400 });
    }
}

function createPrompt(theme: string) {

    const cleanedWardobe = cleanWardrobe(wardrobe);

    const prompt = 
    `
    You are a fashion designer helping me pick out my outfit for the runway!

    please pick a top and bottom from the options that align with the theme ${theme}.

    these are the outfit options:
    ${cleanedWardobe}


    ouptput your answer as a json of the ids for the selected top and bottom like this

    target output:
    {
        top_id: string,
        bottom_id: string
    }
    `;

    return prompt;
}

function cleanWardrobe(dirtyWardrobe: any) {
    // Map over each item in the wardrobe, extracting only id, description, and type
    const cleanedWardrobe = dirtyWardrobe.map((item: { id: number, description: string, type: string }) => {
        return `ID: ${item.id}, Description: ${item.description}, Type: ${item.type}`;
    });

    // Join the results with a newline to return as a string
    return cleanedWardrobe.join('\n');
}

// Helper function to filter clothing items based on recommendations
// function getOutfitsFromRecommendations(recommendations) {
//     const selectedOutfits = { outfit1: null, outfit2: null };
    
//     const tops = clothingItems.filter(item => item.type === 'top');
//     const bottoms = clothingItems.filter(item => item.type === 'bottom');

//     // Logic to select outfits based on recommendations (this can be improved)
//     const selectedTopIndex1 = Math.floor(Math.random() * tops.length);
//     const selectedBottomIndex1 = Math.floor(Math.random() * bottoms.length);
    
//     selectedOutfits.outfit1 = {
//         top: tops[selectedTopIndex1],
//         bottom: bottoms[selectedBottomIndex1],
//     };

//     // Repeat for the second outfit
//     const selectedTopIndex2 = Math.floor(Math.random() * tops.length);
//     const selectedBottomIndex2 = Math.floor(Math.random() * bottoms.length);
    
//     selectedOutfits.outfit2 = {
//         top: tops[selectedTopIndex2],
//         bottom: bottoms[selectedBottomIndex2],
//     };

//     return selectedOutfits;
// }