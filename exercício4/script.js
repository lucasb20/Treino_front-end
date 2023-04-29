function gerar(){
    var num = document.querySelector('input#num')
    var tab = document.querySelector('select#tabu')

    var n = Number(num.value)
    

    tab.innerHTML = ''
    for(var i=1;i<=10;i++){
        var item = document.createElement('option')
        item.text = `${n} x ${i} = ${n*i}`
        tab.appendChild(item)
    }
}