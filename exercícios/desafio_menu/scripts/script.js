let menu = document.querySelector("#burguer")

let opcoes = document.querySelector("#menu")

let corpo = document.getElementsByTagName("body")[0]

menu.addEventListener('click',abrirmenu)

corpo.addEventListener('resize',resize_tela)

function abrirmenu(){
    opcoes.classList.toggle('open')
}

function resize_tela(){
    if(window.innerWidth >= 768){
        corpo.setAttribute('class','open')
    }
    else{
        corpo.setAttribute('class','closed')
    }
}