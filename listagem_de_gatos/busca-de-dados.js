// Objeto com dados dos gatos
const gatos = [
    {
        nome: "Garfield",
        foto: "https://i.imgur.com/LcfhvlR.png",
        dono: "Jon Arbuckle"
    },
    {
        nome: "Salem",
        foto: "https://i.imgur.com/c4at321.jpg",
        dono: "Sabrina Spellman"
    },
    {
        nome: "Tom",
        foto: "https://i.imgur.com/lYq2QJS.png",
        dono: "Sr. Jingles"
    }
];

// Loop para adicionar cada gato na lista
const ul = document.querySelector('.miaus-cadastrados');
gatos.forEach((gato) => {
    const li = document.createElement('li');

    // Adicionando a foto do gato
    const img = document.createElement('img');
    img.src = gato.foto;
    li.appendChild(img);

    // Adicionando o nome do gato
    const nomeGato = document.createElement('p');
    nomeGato.textContent = gato.nome;
    li.appendChild(nomeGato);

    // Adicionando o botão para lançar notas
    const lancarNotasBtn = document.createElement('button');
    lancarNotasBtn.textContent = 'Lançar Notas';
    li.appendChild(lancarNotasBtn);

    // Redirecionando para a página de notas ao clicar no botão
    lancarNotasBtn.addEventListener('click', () => {
        window.location.href = 'notas.html';
    });

    ul.appendChild(li);
});
