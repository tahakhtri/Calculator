var a = document.getElementById('input')

function show(ab){
a.value += ab
console.log(a)
}

function result(){
    var b = eval(a.value)
    a.value = b
}

function clr(){
    a.value = ''
}

function sqr(){
    var squar = a.value* a.value
    a.value = squar
}

function zakat(){
    var z = a.value*0.025
    a.value = z
}

function del(){
    var newval = a.value.slice(0,a.value.length-1)
    a.value = newval
}