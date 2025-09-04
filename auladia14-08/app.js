const fruta = [
    {nome:"TATU", uso:"agua"},
    {nome:"Abacaxi", uso:"doce"},
    {nome:"Limão", uso:"azeda"},
    {nome:"Laranja", uso:"doce"},
    {nome:"Tanjerina", uso:"azeda"},
    {nome:"Melão", uso:"doce"},
    {nome:"Laranja", uso:"doce"},
    {nome:"Atemoia", uso:"doce"},
    {nome:"Kwi", uso:"azeda"},
    {nome:"Morango", uso:"azeda"}
]

let frutaDoce="";
let frutaAzeda="";

    function adicionar(){
        const nome = document.getElementById("nome").value;
        const uso = document.getElementById("uso").value;
        if(nome && uso){
            fruta.push({nome, uso});
            atualizarLista();  
            document.getElementById("nome").value = "";
            document.getElementById("uso").value = "";
        }else{
            alert("Por favor, preencha ambos os campos!");
        }
    }
    function atualizarLista(){
        const lista = document.getElementById("fruta1");
        const lista2 = document.getElementById("fruta2");
        lista.innerHTML = "";
        lista2.innerHTML = "";
        fruta.forEach(copiaFruta1=>{
            const p = document.createElement("p");
            p.textContent = `Nome: ${copiaFruta1.nome}`;
            if(copiaFruta1.uso ==='doce'){
                lista2.appendChild(p);
            }
            else if(copiaFruta1.uso ==='azeda'){
                lista.appendChild(p);
            }else{
                alert(copiaFruta1.nome + " não existe")
            }
        })
    }
fruta.forEach(copiaFruta=>{
    if(copiaFruta.uso ==='doce'){
        frutaDoce += `Nome: ${copiaFruta.nome}<br>`
    }
    else if(copiaFruta.uso ==='azeda'){
        frutaAzeda += `Nome: ${copiaFruta.nome}<br>`
    }else{
        alert(copiaFruta.nome + " não existe")
    }
})

document.getElementById("fruta2").innerHTML = frutaDoce
document.getElementById("fruta1").innerHTML = frutaAzeda