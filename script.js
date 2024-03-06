window.onbeforeunload = function(event) {
    var message = 'Deseja sair desta página?';
    if (typeof event == 'undefined') {
        event = window.event;
    }
    if (event) {
        event.returnValue = message;
    }
    return message;
}


function imc(){

    let nome = document.getElementById("nome").value;
    let altura = document.getElementById("altura").value;
    let peso = document.getElementById("peso").value;

    let parametro = "bom"
    let resultado =  peso / (altura * altura)

    if (resultado < 18.5){
        parametro = "Baixo Peso"
    }else if(resultado > 18.5 && resultado < 24.9){
        parametro = "Peso Normal"
    }else if(resultado > 24.9 && resultado < 29.9){
        parametro = "Sobrepeso"
    }else if(resultado > 29.9 && resultado < 34.9){
        parametro = "Obesidade grau I"
    }else if(resultado > 34.9 && resultado < 39.9){
        parametro = "Obesidade grau II"
    }else if(resultado > 39.9){
        parametro = "Obesidade grau III"
    }
    
    document.getElementById("resultado").innerHTML = nome + ""+ ", seu resultado deu: " + resultado.toFixed(2) + ", e seu diagnostico é " + parametro

    if (parametro == "Baixo Peso"){
        document.getElementById("resultado").style.color = "blue"
    }else if(parametro == "Peso Normal"){
        document.getElementById("resultado").style.color = "green"
    }else if(parametro == "Sobrepeso"){
        document.getElementById("resultado").style.color = "orange"
    }else if(parametro == "Obesidade grau I"){
        document.getElementById("resultado").style.color = "red"
    }else if(parametro == "Obesidade grau II"){
        document.getElementById("resultado").style.color = "brown"
    }else if(parametro == "Obesidade grau III"){
        document.getElementById("resultado").style.color = "violet"
    }
}