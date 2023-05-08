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