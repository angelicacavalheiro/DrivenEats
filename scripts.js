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
    let valor_arredondado = valor_total.toFixed(2)
    
    const mensagem = encodeURIComponent(`Olá, gostaria de fazer o pedido:
    - Prato: ${prato} 
    - Bebida: ${bebida}
    - Sobremesa: ${sobremesa}
    - Total R$: ${valor_arredondado}`);
    window.location.href = `https://wa.me/5511977505769?text=${mensagem}`;

}
let prato;
let bebida;
let sobremesa;
let valor_comida = 0;
let valor_bebida = 0;
let valor_sobremesa = 0;
let valor_total = 0;

function selecionarAlmoço(tipoPrato, nomeComida, preco){
    //dermarcar 
    const botaoMarcado = document.querySelector(".conteiner_almoço > .selecionar") //localiza se tem selecionar no conteiner
    const stringComida = document.querySelector(".valor_comida")

    if (botaoMarcado !== null){ //se está selecionado, botao marcado n é nulo
        botaoMarcado.classList.remove("selecionar"); 
        botaoMarcado.classList.add("escondido"); 
    }   
          
    //marcar
	tipoPrato.classList.add("selecionar"); 
    tipoPrato.classList.remove("escondido"); //remover escondido = aparecer check

    prato = nomeComida;

    valor_total = valor_total + preco

}

function selecionarBebida(tipoBebida, nomeBebida, preco){
    //dermarcar 
    const botaoMarcado = document.querySelector(".conteiner_bebida >.selecionar")
    const stringBebida = document.querySelector(".valor_bebida")

    if (botaoMarcado !== null){
        botaoMarcado.classList.remove("selecionar") 
        botaoMarcado.classList.add("escondido"); }
    
    //marcar
	tipoBebida.classList.add("selecionar");
    tipoBebida.classList.remove("escondido");

    bebida = nomeBebida;

    valor_total = valor_total + preco
} 

function selecionarSobremesa(tipoSobremesa, nomeSobremesa, preco){
    //dermarcar 
    const botaoMarcado = document.querySelector(".conteiner_sobremesa >.selecionar")
    const stringSobremesa = document.querySelector(".valor_sobremesa")


    if (botaoMarcado !== null){
        botaoMarcado.classList.remove("selecionar")
        botaoMarcado.classList.add("escondido");  }
    
    //marcar
	tipoSobremesa.classList.add("selecionar");
    tipoSobremesa.classList.remove("escondido");

    sobremesa = nomeSobremesa;

    valor_total = valor_total + preco
} 
