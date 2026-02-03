require('dotenv').config();
const express = require('express');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public')); // Serve frontend files

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post('/generate', async (req, res) => {
    const { name, jobRole, company, skills, mobile, hiringManager } = req.body;
    
    let greeting = hiringManager ? `Dear ${hiringManager},` : `Dear Hiring Manager at ${company},`;
    const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    const prompt = `Write a professional business cover letter for ${name} applying to the ${jobRole} position at ${company}.
    
    Details:
    - Candidate: ${name} (Mobile: ${mobile})
    - Role: ${jobRole}
    - Company: ${company}
    - Skills: ${skills}
    - Date: ${today}
    
    Strictly follow this Business Letter Format:
    
    [Candidate Name]
    [Mobile Number]
    
    [Date]
    
    [Hiring Manager Name or "Hiring Manager"]
    [Company Name]
    
    ${greeting}
    
    [Paragraph 1: Introduction and enthusiasm for the role]
    [Paragraph 2: Highlight key skills (${skills}) and why I am a good fit]
    [Paragraph 3: Closing and call to action]
    
    Sincerely,
    ${name}`;

    try {
        const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });
        const result = await model.generateContent(prompt);
        const letter = result.response.text();
        res.json({ letter });
    } catch (error) {
        console.error('Error details:', error);
        res.status(500).json({ error: error.message || 'AI generation failed' });
    }
});

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));