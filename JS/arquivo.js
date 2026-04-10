// script.js
window.onload = function() {
    const path = window.location.pathname;
    // Checa se está na index.html ou na raiz local/produção
    if (path.endsWith('index.html') || path.endsWith('/')) {
        alert("Bem-vindo(a) ao Jardim das Pitayas! \n\n⚠️ Este site encontra-se atualmente em fase de construção.");
    }
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

// Menu Mobile Customizado (Substitui evento original do Bootstrap)
const btnMenu = document.getElementById('btnMenuMobile');
const navBarNav = document.getElementById('navbarNav');

if (btnMenu && navBarNav) {
    btnMenu.addEventListener('click', () => {
        navBarNav.classList.toggle('show');
    });
}