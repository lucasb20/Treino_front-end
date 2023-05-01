let lista = document.querySelector('select#lista')
var vetor = []

function maior(n){
    let vetor_or = n.sort(function(a,b){return a-b})
    return vetor_or[vetor_or.length-1]
}

function menor(n){
    let vetor_or = n.sort(function(a,b){return a-b})
    return vetor_or[0]
}

function soma(n){
    let tam = n.length
    let soma = 0
    for(let i=0;i<tam;i++){
        soma+=n[i]
    }
    return soma
}

function media(n){
    let tam = (n.length)
    let media = 1
    for(let i=0;i<tam;i++){
        media+=parseFloat(n[i])/tam
    }
    return media
}

function adicionar(){
    let numero = document.querySelector('input#box1')
    let num = Number(numero.value)
    
    if(!(num>=1 && num<=100)){
        alert('Fora do intervalo.')
    }
    else if(vetor.indexOf(num)!=-1){
        alert('Esse número já está incluído, escolha outro.')
    }
    else{
        vetor.push(num)
        item = document.createElement('option')
        item.text = `${num}`
        lista.appendChild(item)
    }
}

function finalizar(){
    res = document.querySelector('p#res')

    if(vetor.length==0){
        alert('Nenhum valor foi adicionado ainda.')
    }
    else{
        res.innerHTML = `Foram cadastrados ${vetor.length} números<br>`
        res.innerHTML += `O maior valor informado foi ${maior(vetor)}<br>`
        res.innerHTML += `O menor valor informado foi ${menor(vetor)}<br>`
        res.innerHTML += `O somatório de todos os valores é ${soma(vetor)}<br>`
        res.innerHTML += `A média de todos os valores é ${media(vetor)}`
    }
}