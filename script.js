document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Registro exitoso!');
});

async function sendQuestion() {
    const userInput = document.getElementById('user-input').value;
    if (!userInput) {
        alert('Por favor, escribe una pregunta.');
        return;
    }

    const responseContainer = document.getElementById('chat-response');
    responseContainer.innerHTML = 'Pensando...';

    // Replace 'YOUR_OPENAI_API_KEY' with your actual OpenAI API key
    const apiKey = 'YOUR_OPENAI_API_KEY';
    const apiUrl = 'https://api.openai.com/v1/engines/davinci-codex/completions';

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                prompt: userInput,
                max_tokens: 150
            })
        });
        const data = await response.json();
        responseContainer.innerHTML = data.choices[0].text.trim();
    } catch (error) {
        responseContainer.innerHTML = 'Error al obtener la respuesta.';
    }
}
