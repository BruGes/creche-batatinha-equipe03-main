const cadastroGato = [
    {
        nomeGato: "Tom",
        foto: "https://i.imgur.com/8aD8Yn2.jpg"
    },
    {
        nomeGato: "Whiskers",
        foto: "https://i.imgur.com/vV7BOdY.jpg"
    },
    {
        nomeGato: "Snowball",
        foto: "https://i.imgur.com/nZBQ2yG.jpg"
    }
];

// Armazenando gatos no localStorage
localStorage.setItem('cadastroGato', JSON.stringify(cadastroGato))

const miausCadastrados = document.querySelector(".miaus-cadastrados");

// Recuperando gatos do localStorage
const gatosSalvos = JSON.parse(localStorage.getItem("cadastroGato"));

// Gerando um novo item da lista para cada gato
gatosSalvos.forEach((gato) => {
    const novoItemLista = document.createElement("li");
    const imagemGato = document.createElement("img");
    const nomeGato = document.createElement("span");
    const botaoLancarNotas = document.createElement("button");

    imagemGato.setAttribute("src", gato.foto);
    nomeGato.textContent = gato.nome;
    botaoLancarNotas.textContent = "Lançar Notas";

    novoItemLista.appendChild(imagemGato);
    novoItemLista.appendChild(nomeGato);
    novoItemLista.appendChild(botaoLancarNotas);

    miausCadastrados.appendChild(novoItemLista);

    // Redirecionando para outra página ao clicar no botão Lançar Notas
    botaoLancarNotas.addEventListener("click", () => {
        window.location.href = "../lancamento_notas/index.html";
    });
});
