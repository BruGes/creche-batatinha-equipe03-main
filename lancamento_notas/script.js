//
document.addEventListener('click', function (e) {
    const nomeClasse = e.target.classList[0] //peguei a primeira classe da lista pelo click do mouse

    const patas = document.querySelectorAll(`.patas${nomeClasse} li`)

    patas.forEach((element,indice1)=>{
        element.addEventListener('click',()=>{
            patas.forEach((element,indice2)=>{
                indice1 >= indice2 ? element.classList.add("active") : element.classList.remove("active")
            })
        })
    })
    console.log(e.target.getAttribute('data-avaliacao')) // avaliação p/ banco de dados
})



//botão menu
let btnMenu = document.querySelector('.icone-menu');
let nav = document.querySelector('.nav');

function handleButtonClick(){
    nav.classList.toggle("active");
}
btnMenu.addEventListener("click",handleButtonClick);




// pegando gatos do localStorage
const gatosSalvos = JSON.parse(localStorage.getItem("cadastroGato"));
//console.log(gatosSalvos.nomeGato)

const fotoAvata = document.querySelector("#avata");
const nomeAvata = document.querySelector("h1");

fotoAvata.setAttribute("src", gatosSalvos.foto); 
nomeAvata.textContent = gatosSalvos.nomeGato;

//falta enviar nota para local storage




/*

gatosSalvos.forEach((avata)=>{
    const fotoAvata = document.querySelector("#avata");
    const nomeAvata = document.querySelector("h1");

    nomeAvata.textContent = avata.nomeGato;
    fotoAvata.setAttribute("src", avata.foto);    
})
*/
/* 
const fotoAvata = document.querySelector("#avata");
const nomeAvata = document.querySelector("h1");
for (let i = 0; i < gatosSalvos.length; i++) {
    
    nomeAvata.textContent = gatosSalvos[1].nomeGato;
    fotoAvata.setAttribute("src", gatosSalvos[1].foto);
    console.log(nomeAvata)
    console.log(fotoAvata)
}
*/
