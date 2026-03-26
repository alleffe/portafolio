// Script para alternar entre dark e light mode
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const html = document.documentElement;

// Verifica se há um tema salvo no localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  html.classList.add(savedTheme);
  body.classList.add(savedTheme);
  updateButton(savedTheme);
}

// Função para atualizar o texto do botão
function updateButton(theme) {
  themeToggle.textContent = theme === 'light-mode' ? '☀️' : '🌙';
}

// Event listener para o botão
themeToggle.addEventListener('click', () => {
  const isLight = body.classList.contains('light-mode');
  if (isLight) {
    html.classList.remove('light-mode');
    body.classList.remove('light-mode');
    localStorage.setItem('theme', '');
    updateButton('');
  } else {
    html.classList.add('light-mode');
    body.classList.add('light-mode');
    localStorage.setItem('theme', 'light-mode');
    updateButton('light-mode');
  }
});