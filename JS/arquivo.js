// script.js
window.onload = function() {
    alert("Bem-vindo(a) ao Jardim das Pitayas! \n\n⚠️ Este site encontra-se atualmente em fase de construção.");
};

const loginForm = document.getElementById('login-form');

if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        console.log(`Usuário: ${username}, Senha: ${password}`);
    });
}