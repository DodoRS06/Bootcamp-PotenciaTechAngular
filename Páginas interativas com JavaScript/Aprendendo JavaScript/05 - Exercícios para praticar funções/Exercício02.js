/* 
Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal da etiqueta e a escolha da condição de pagamento.
Utilize códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
1 - À vista débito, recebe 10% de desconto;
2 - À visa no Dinheiro ou pix, recebe 15% de desconto;
3 - Em duas vezes, preço normal da etiqueta sem juros;
4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%.
*/

function aplicarDesconto(precoEtiqueta, desconto){
    return precoEtiqueta - (precoEtiqueta * (desconto / 100));
}

function aplicarAcrescimo(precoEtiqueta, acrescimo){
    return precoEtiqueta + (precoEtiqueta * (acrescimo / 100));
}

function calcularTotal(precoEtiqueta,formaPagamento){

    if(formaPagamento === 1){
        console.log('Total: R$', aplicarDesconto(precoEtiqueta, 10).toFixed(2));
    } else if(formaPagamento === 2){
        console.log('Total: R$', aplicarDesconto(precoEtiqueta, 15).toFixed(2));
    } else if(formaPagamento === 3){
        console.log('Total: R$', aplicarDesconto(precoEtiqueta, 0).toFixed(2));
    } else{
        console.log('Total: R$', aplicarAcrescimo(precoEtiqueta, 10).toFixed(2));
    }
}

const precoEtiqueta = 100;
const formaPagamento = 4;

calcularTotal(precoEtiqueta, formaPagamento);




