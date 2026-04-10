// script.js
const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Aqui você pode adicionar a lógica de login
    // Por exemplo, você pode fazer uma requisição AJAX para um servidor
    // ou verificar se as credenciais estão corretas

    console.log(`Usuário: ${username}, Senha: ${password}`);
});