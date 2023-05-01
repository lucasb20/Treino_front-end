function contar(){
    var ini = document.querySelector('input#ini')
    var fim = document.querySelector('input#fim')
    var passo = document.querySelector('input#passo')

    var res = document.querySelector('div#res')

    if(Number(passo.value)==0){
        alert('Passo 0 é que acontece no comunismo, não há progresso. Alterado para 1.')
        passo.value = '1'
    }

    res.innerHTML = ''
    for(var i=Number(ini.value);i<=Number(fim.value);i+=Number(passo.value)){
        res.innerHTML += `${i} -> `
    }
    res.innerHTML+= 'CHEGOOOOOOOOU!'

}