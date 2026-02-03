

document.getElementById('coverLetterForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const jobRole = document.getElementById('jobRole').value;
    const company = document.getElementById('company').value;
    const skills = document.getElementById('skills').value;
    const mobile = document.getElementById('mobile').value;
    const hiringManager = document.getElementById('hiringManager').value;

    // UI Elements
    const generateBtn = document.getElementById('generateBtn');
    const loadingState = document.getElementById('loading');
    const outputSection = document.getElementById('output');
    const letterText = document.getElementById('letterText');

    // Reset UI
    outputSection.classList.add('hidden');
    letterText.value = '';
    
    // Show Loading
    generateBtn.disabled = true;
    generateBtn.innerHTML = '<span><i class="fa-solid fa-spinner fa-spin"></i> Generating...</span>';
    loadingState.classList.remove('hidden');

    try {
        const response = await fetch('/generate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, jobRole, company, skills, mobile, hiringManager })
        });
        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.error || 'Generation failed');
        }
        
        letterText.value = data.letter;
        
        // Show Output
        outputSection.classList.remove('hidden');
        // Smooth scroll to output
        outputSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

    } catch (error) {
        letterText.value = `Error: ${error.message}`;
        outputSection.classList.remove('hidden');
        outputSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } finally {
        // Reset Button and Loading State
        loadingState.classList.add('hidden');
        generateBtn.disabled = false;
        generateBtn.innerHTML = '<span>Generate <i class="fa-solid fa-arrow-right"></i></span>';
    }
});

// Copy to Clipboard with Toast
document.getElementById('copyBtn').addEventListener('click', function() {
    const text = document.getElementById('letterText');
    text.select();
    document.execCommand('copy');
    
    // Show Toast
    const toast = document.getElementById('toast');
    toast.classList.remove('hidden');
    
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 3000);
});