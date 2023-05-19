/*Todoso os botoes de interaçao*/
const btnHome = document.querySelector("#btnHome")
const btnExposiçoes = document.querySelector("#btnExposiçoes")
const btnPesquisa = document.querySelector("#btnPesquisa")
const btnAcervo = document.querySelector("#btnAcervo")
const btnVideos = document.querySelector("#btnVideos")
const btnFotos = document.querySelector("#btnFotos")

/*Botao que leva apagina home*/
btnHome.addEventListener("click", (evt) => {
    selecionado(evt.target, "/paginahome/home.html")

})
/*Botao que leva apagina exposições*/
btnExposiçoes.addEventListener("click", (evt) => {
    selecionado(evt.target, "/paginaexposicoes/exposicoes.html")

})
/*Botao que leva apagina pesquisa*/
btnPesquisa.addEventListener("click", (evt) => {
    selecionado(evt.target, "/paginapesquisas/pesquisa.html")

})
/*Botao que leva apagina acervo*/
btnAcervo.addEventListener("click", (evt) => {
    selecionado(evt.target, "/paginaacervo/acervo.html")

})
/*Botao que leva apagina videos*/
btnVideos.addEventListener("click", (evt) => {
    selecionado(evt.target, "/paginavideo/videos.html")

})
/*Botao que leva apagina fotos*/
btnFotos.addEventListener("click", (evt) => {
    selecionado(evt.target, "/paginafotos/fotos.html")

})

/* Uma funçao que quando acionamos o botao ela  pega obotao selecionado e chama o link e adciona o estylo */
const selecionado = (ele, url) => {
    const btnselec = [...document.querySelectorAll('.botoes')]

    btnselec.forEach(e => {
        e.classList.remove("paginaselecionada")
    });
    ele.classList.add("paginaselecionada")
    window.open(url, "if_home")
}



