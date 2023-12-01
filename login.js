
document.getElementById('signIn').addEventListener('click', () => {
  document.getElementById('container').classList.remove("right-panel-active");
});


function login() {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  // Aqui você pode adicionar lógica para verificar os dados no servidor ou fazer outras verificações.

  console.log('Login realizado com sucesso!');
}