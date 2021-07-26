function fechar_pedido(){ 
    if(prato !== undefined){
        if (bebida !== undefined){
            if (sobremesa !== undefined){
            const texto = document.querySelector(".primeiro-botão p");
            texto.innerHTML = "";
               
            const mudar = document.querySelector(".primeiro-botão");
            mudar.classList.remove("esconder-link");
            mudar.classList.remove("começar");
            mudar.classList.add("finalizar");  
            }
        }
    }
}
function enviar_pedido(){
    
    const mensagem = encodeURIComponent(`Olá, gostaria de fazer o pedido:
    - Prato: ${prato} 
    - Bebida: ${bebida}
    - Sobremesa: ${sobremesa}
    - Valor: ${valor}`);
    window.location.href = `https://wa.me/5511977505769?text=${mensagem}`;

}


let prato;
let bebida;
let sobremesa;
let valor = (valor_comida + valor_bebida + valor_sobremesa);

function selecionarAlmoço(tipoPrato){
    //dermarcar 
    const botaoMarcado = document.querySelector(".conteiner_almoço > .selecionar") //localiza se tem selecionar no conteiner
    const nomeComida = document.querySelector(".nome_comida")
    const stringComida = document.querySelector(".valor_comida")

    if (botaoMarcado !== null){ //se está selecionado, botao marcado n é nulo
        botaoMarcado.classList.remove("selecionar"); 
        botaoMarcado.classList.add("escondido"); 
    }   
          
    //marcar
	tipoPrato.classList.add("selecionar"); 
    tipoPrato.classList.remove("escondido"); //remover escondido = aparecer check

    prato = nomeComida.innerText;

    //passando String para Number
    let stringComidaR$ = stringComida.innerText;
    let removerR$ = stringComidaR$.replace('R$', '');
    let valor_comida = removerR$.replace(',', '.');

    return(valor_comida)
}


function selecionarBebida(tipoBebida){
    //dermarcar 
    const botaoMarcado = document.querySelector(".conteiner_bebida >.selecionar")
    const nomeBebida = document.querySelector(".nome_bebida")
    const stringBebida = document.querySelector(".valor_bebida")

    if (botaoMarcado !== null){
        botaoMarcado.classList.remove("selecionar") 
        botaoMarcado.classList.add("escondido"); }
    
    //marcar
	tipoBebida.classList.add("selecionar");
    tipoBebida.classList.remove("escondido");

    bebida = nomeBebida.innerText;

    //passando String para Number
    let stringBebidaR$ = stringBebida.innerText;
    let removerR$ = stringBebidaR$.replace('R$', '');
    let valor_bebida = removerR$.replace(',', '.');

    return(valor_bebida)
    
} 
function selecionarSobremesa(tipoSobremesa){
    //dermarcar 
    const botaoMarcado = document.querySelector(".conteiner_sobremesa >.selecionar")
    const nomeSobremesa = document.querySelector(".nome_sobremesa")
    const stringSobremesa = document.querySelector(".valor_sobremesa")


    if (botaoMarcado !== null){
        botaoMarcado.classList.remove("selecionar")
        botaoMarcado.classList.add("escondido");  }
    
    //marcar
	tipoSobremesa.classList.add("selecionar");
    tipoSobremesa.classList.remove("escondido");

    sobremesa = nomeSobremesa.innerText;

    //passando String para Number
    let stringSobremesaR$ = stringSobremesa.innerText;
    let removerR$ = stringSobremesaR$.replace('R$', '');
    let valor_sobremesa = removerR$.replace(',', '.');

    return(valor_sobremesa)
} 
