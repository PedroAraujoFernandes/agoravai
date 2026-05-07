let botao = document.getElementById("botao");
let resultado = document.getElementById("resultado");


botao.onclick = function(){
    
    
    
    let altura = document.getElementById("altura").value;
    let peso = document.getElementById("peso").value;
    let resposta;
    
    
    
    if(altura <= 0 && peso <=0 ){
        
        let mar = document.getElementById("bloco");
        mar.style.height = "500px";
        
        resultado.innerHTML = "não é possivel.";
    }
    
    else{
         
        resposta = peso / (altura * altura);
        resposta = Number(resposta);
        
        let valor_aredondado = resposta.toFixed(2);
        resultado.innerHTML = valor_aredondado;
        
        
        let mar = document.getElementById("bloco");
        mar.style.height = "500px";
        
        
        console.log(resposta);
    }
}


