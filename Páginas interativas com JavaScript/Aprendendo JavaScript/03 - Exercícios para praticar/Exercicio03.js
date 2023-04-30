/* 
Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal da etiqueta e a escolha da condição de pagamento.
Utilize códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista débito, recebe 10% de desconto;
- À visa no Dinheiro ou pix, recebe 15% de desconto;
- Em duas vezes, preço normal da etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%.
*/

const precoEtiqueta = 100;
const formaPagamento = 1;

if(formaPagamento === 1){
    console.log('Total: R$', (precoEtiqueta*0.9).toFixed(2));
} else if(formaPagamento === 2){
    console.log('Total: R$', (precoEtiqueta*0.85).toFixed(2));
} else if(formaPagamento === 3){
    console.log('Total: R$', precoEtiqueta.toFixed(2));
} else{
    console.log('Total: R$', (precoEtiqueta*1.1).toFixed(2));
}

