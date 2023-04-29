function calcular(){
    var data = new Date()
    var ref_ano = data.getFullYear()
    var ano = document.querySelector('input#ano')
    var res = document.querySelector('div#res')
    if(ano.value.length == 0 || ano.value > ref_ano ){
        alert('ERRO 007')
    }
    else{
        var sexo = document.getElementsByName('sexo')
        var idade = ref_ano - Number(ano.value)
        var gender = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        img.setAttribute('width','400px')
        img.setAttribute('height','400px')
        if(sexo[0].checked){
            gender = 'homem'
            if(idade >= 0 && idade <25){
                img.setAttribute('src','imagens/jovemm.png')
            }
            else if(idade < 50){
                img.setAttribute('src','imagens/adultom.png')
            }
            else{
                img.setAttribute('src','imagens/idosom.png')
            }
        }
        else{
            gender = 'mulher'
            if(idade >= 0 && idade <25){
                img.setAttribute('src','imagens/jovemf.png')
            }
            else if(idade < 50){
                img.setAttribute('src','imagens/adultof.png')
            }
            else{
                img.setAttribute('src','imagens/idosaf.png')
            }
        }
        res.innerHTML = `A resultado foi ${gender} de ${idade} anos.`
        res.appendChild(img)
    }
}