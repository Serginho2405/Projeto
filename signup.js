document.getElementById('signUp').addEventListener('click', () => {
  document.getElementById('container').classList.add("right-panel-active");
});

function signup() {
  const name = document.getElementById('signup-name').value;
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;

  // Aqui você pode adicionar lógica para enviar os dados para o servidor ou fazer outras verificações.

  console.log('Cadastro realizado com sucesso!');
}
