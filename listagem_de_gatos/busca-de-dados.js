const miausCadastrados = document.querySelector(".miaus-cadastrados");

// Buscando gatos no localStorage
const cadastroGato = JSON.parse(localStorage.getItem("cadastroGato"));

// Recuperando foto e nome do gato
const foto = cadastroGato.foto;
const nomeGato = cadastroGato.nomeGato;

// Criando novo item da lista
const novoItemLista = document.createElement("li");
const imagemGato = document.createElement("img");
const nomeGatoEl = document.createElement("span");
const botaoLancarNotas = document.createElement("button");

// Definindo atributos da imagem e do nome do gato
imagemGato.setAttribute("src", foto);
nomeGatoEl.textContent = nomeGato;

// Definindo texto do botão "Lançar Notas"
botaoLancarNotas.textContent = "Lançar Notas";

// Adicionando elementos na lista
novoItemLista.appendChild(imagemGato);
novoItemLista.appendChild(nomeGatoEl);
novoItemLista.appendChild(botaoLancarNotas);
miausCadastrados.appendChild(novoItemLista);

// Redirecionando para outra página ao clicar no botão "Lançar Notas"
botaoLancarNotas.addEventListener("click", () => {
    window.location.href = "../lancamento_notas/index.html";
});
