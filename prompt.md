# AI Coding Prompts: AI Cover Letter Generator

## 🏗️ Phase 1: Project Setup

**Prompt 1: Initial Scaffolding**

> "Create a project structure for a simple web app called 'AI Cover Letter Generator'. I need a Node.js backend (`server.js`) using Express and a vanilla HTML/CSS/JS frontend in a `public` folder. Include a `.env` file for API keys and a `.gitignore`."

**Prompt 2: Dependencies**

> "I need to install the necessary packages. Please give me the `npm install` command for `express`, `dotenv`, and `@google/generative-ai`."

---

## 🎨 Phase 2: Design & UI ("Onyx & Silver")

**Prompt 3: Structure (HTML)**

> "Write the `index.html` file. It should have a clean, modern form with fields for: Full Name, Job Role, Company Name, Skills, and Hiring Manager. Include a 'Generate' button and an output area for the result. Use semantic HTML tags."

**Prompt 4: Styling (The Premium Theme)**

> "Create a `style.css` file with a 'Luxury Monochrome' aesthetic (Onyx & Silver).
>
> - **Background**: Deep Black/Zinc 950 with a subtle noise texture or radial gradient.
> - **Glassmorphism**: Use highly transparent black backgrounds with thin white borders for containers.
> - **Inputs**: Minimalist transparent inputs with white text and silver borders.
> - **Typography**: Use 'Outfit' for headings and 'Plus Jakarta Sans' for body text.
> - **No Colors**: Avoid bright blues or yellows. Stick to grayscale, white, and silver accents."

**Prompt 5: Light Mode Toggle**

> "Add a theme toggle to `index.html` and `style.css`. When switched to Light Mode, change the color variables to a 'Platinum Day' theme (White/Zinc 200 backgrounds with dark grey text). Ensure the switch animation is smooth."

---

## 🧠 Phase 3: Backend & Logic

**Prompt 6: Server & API**

> "Write the `server.js` code. It should:
>
> 1. Serve the static files from the `public` folder.
> 2. Have a POST endpoint `/generate` that receives user details.
> 3. Use the Google Gemini API (`gemini-2.5-flash`) to generate a professional cover letter.
> 4. Return the letter as a JSON object."

**Prompt 7: Frontend Logic**

> "Write `script.js` to handle the form submission. It should:
>
> 1. Prevent the default form submit.
> 2. Collect values from inputs.
> 3. Send a POST request to `/generate`.
> 4. Show a loading spinner while waiting.
> 5. Display the returned cover letter in the output text area.
> 6. Handle errors gracefully (e.g., if the server fails)."

---

## 🛠️ Phase 4: Debugging & Refinement

**Prompt 8: Fixing JSON Errors**

> "I'm getting an 'Unexpected end of JSON input' error when fetching from the API. The server might be returning an error page instead of JSON. Help me update `server.js` to log errors properly and updating `script.js` to parse the response text safely before trying `JSON.parse`."

**Prompt 9: Caching Issues**

> "My changes to `script.js` aren't showing up in the browser even after refreshing. How can I force the browser to load the new version? Should I rename the file or add a version query string?"

**Prompt 10: Model Availability**

> "The API returns a 404 error for `gemini-1.5-flash`. Write a script called `check_models.js` to list all available Gemini models for my API key so I can choose the correct one."
