require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function listModels() {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }); 
    // Note: The SDK doesn't have a direct 'listModels' method exposed easily in all versions, 
    // but we can try to infer or use the REST API if needed. 
    // However, for this specific SDK version, let's try a direct approach if possible,
    // or simply try a fallback model 'gemini-pro' which is often the standard.
    
    // Actually, checking the 'gemini-1.5-flash' availability is the goal.
    // Let's print the key (partially) to verify we are reading env.
    console.log('API Key available:', !!process.env.GEMINI_API_KEY);
    
    console.log('Attempting to use model: gemini-pro (fallback test)...');
    const modelPro = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await modelPro.generateContent("Hello?");
    console.log('Success with gemini-pro!');
  } catch (error) {
    console.error('Error listing/testing models:', error.message);
  }
}

listModels();
