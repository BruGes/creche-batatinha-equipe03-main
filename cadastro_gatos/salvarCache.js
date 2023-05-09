// Seleciona os elementos do formulário
const nomeGatoInput = document.getElementById('nome-gato');
const nomeDonaInput = document.getElementById('nome-dona');
const btn2 = document.getElementById('btn2');

// Adiciona um evento de clique ao botão
btn2.addEventListener('click', function () {
  event.preventDefault();// Adiciona o evento preventDefault() para impedir o redirecionamento
  // Cria um objeto com os valores dos campos de entrada
  const cadastroGato = {
    nomeGato: nomeGatoInput.value,
    nomeDona: nomeDonaInput.value,
    foto: localStorage.getItem('previewImage')
  }

  // Salva o objeto no cache do navegador
  localStorage.setItem('cadastroGato', JSON.stringify(cadastroGato));
  console.log(cadastroGato)
});