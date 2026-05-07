let botao = document.getElementById("botao");
let resultado = document.getElementById("resultado");

botao.onclick = function(){
    
    let altura = document.getElementById("altura").value;
    let peso = document.getElementById("peso").value;
    
    let resposta;
    
    resposta = peso / (altura * altura);
    resposta = Number(resposta);
    let valor_aredondado = resposta.toFixed(2);
    resultado.innerHTML = `a resposta é ${valor_aredondado}`;

    console.log(resposta);
}