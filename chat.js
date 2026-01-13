// Einfache Chat-Logik (nur lokal, keine Verbindung zu Server)
const messagesDiv = document.getElementById('messages');
const chatForm = document.getElementById('chatForm');
const messageInput = document.getElementById('message');

chatForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const text = messageInput.value.trim();
    if (text) {
        addMessage('Du', text);
        messageInput.value = '';
    }
});

function addMessage(user, text) {
    const msg = document.createElement('div');
    msg.textContent = user + ': ' + text;
    messagesDiv.appendChild(msg);// Einfache Login-Logik (nur Demo, kein echtes Backend!)
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('errorMsg');

    // Beispiel: Fester Benutzername und Passwort
    if (username === 'benutzer' && password === 'passwort123') {
        errorMsg.textContent = '';
        window.location.href = 'chat.html';
    } else {
        errorMsg.textContent = 'Benutzername oder Passwort ist falsch!';
    }
});

    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}
