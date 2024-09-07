// Função para abrir o modal de login
function abrirLogin() {
    alert("Abrir modal de login.");
    // Aqui, futuramente, você pode implementar um modal de login
  }
  
  // Função para abrir o modal de cadastro
  function abrirCadastro() {
    alert("Abrir modal de cadastro.");
    // Aqui, futuramente, você pode implementar um modal de cadastro
  }
  
  // Adicionando event listeners para os botões de login e cadastro
  document.addEventListener("DOMContentLoaded", function() {
    const loginLink = document.querySelector('.login a[href="#"]');
    const cadastroLink = document.querySelector('.login a:nth-child(2)');
  
    if (loginLink) {
      loginLink.addEventListener('click', function(e) {
        e.preventDefault();
        abrirLogin();
      });
    }
  
    if (cadastroLink) {
      cadastroLink.addEventListener('click', function(e) {
        e.preventDefault();
        abrirCadastro();
      });
    }
  });
  