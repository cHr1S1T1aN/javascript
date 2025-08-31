
//document.getElementById("teste").innerHTML = carro[0];
//vai ao arquivo main.js pega o javascript e cria uma insercao de html

//enumeracao
/*const tipo ={
    a : 'Novo',
    b : 'Usado'
}
const carro =[
    {
    nome : 'corsa',
    cor : 'verde',
    uso : tipo.b
    }
]
document.getElementById("teste").innerHTML = carro[0];
*/


const gosto ={
    a : 'azedo',
    b : 'doce'
}
const fruta =[
    {
    nome : 'abacaxi',
    cor : 'verde',
    uso : gosto.c
    }
]
if(fruta[0].uso === gosto.a){
    alert("A fruta é azeda")
    }else if(fruta[0].uso === gosto.b){
    alert("A fruta é doce")
    }else{
    alert("A fruta tem gosto de nada")
}
    //converte para string
//converte para string
document.getElementById("teste").innerHTML = JSON.stringify(fruta[0]);