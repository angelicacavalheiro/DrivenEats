function fechar_pedido(){
    // se 1 item em cada uma das 3 opçoes for escolhida, então
    // verificar se funcionada caso um íten seja desmarcado
    // quando um item é desmarcado ele volta a ser começar

    // se almoço & bebida & sobremesa contem selecionar, então adiciona finalizar
    // para isso usamos classlist.conteins e a classe selecionar
    
    const texto = document.querySelector(".primeiro-botão p");
    texto.innerHTML = "Fechar pedido";

    const background = document.querySelector(".primeiro-botão");
    background.classList.remove("começar");
	background.classList.add("finalizar");

    

}
function enviar_pedido(){

}
function selecionarAlmoço(tipoPrato){
    //dermarcar 
    const botaoMarcado = document.querySelector(".caixinha_almoço > .selecionar")
    if (botaoMarcado !== null){
        botaoMarcado.classList.remove("selecionar")  }
    
    //marcar
	tipoPrato.classList.add("selecionar");
} 
function selecionarBebida(tipoBebida){
    //dermarcar 
    const botaoMarcado = document.querySelector(".caixinha_bebida > .selecionar")
    if (botaoMarcado !== null){
        botaoMarcado.classList.remove("selecionar")  }
    
    //marcar
	tipoBebida.classList.add("selecionar");
} 
function selecionarSobremesa(tipoSobremesa){
    //dermarcar 
    const botaoMarcado = document.querySelector(".caixinha_sobremesa > .selecionar")
    if (botaoMarcado !== null){
        botaoMarcado.classList.remove("selecionar")  }
    
    //marcar
	tipoSobremesa.classList.add("selecionar");
} 


//falta um parametro para que ela faça aquilo de acordo com o prato que a pessoa clica
//ex a pessoa clicou em arroz, arroz torna-se um parametro