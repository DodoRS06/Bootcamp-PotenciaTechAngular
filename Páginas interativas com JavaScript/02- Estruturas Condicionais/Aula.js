/* 
Faça um programa para calcular o valor gasto em uma viagem.

Você terá 5 variáveis. Sendo elas:
1 - Preço do etanol;
2 - Preço da gasolina;
3 - O tipo de combustível que está no seu carro;
4 - Gasto médio de combustível do carro por Km;
5 - Distância em Km da viagem.

Imprima no console o valor que será gasto para realizar essa viagem.
*/

const precoEtanol = 5.00;
const precoGasolina = 6.00;
const precoKmPorL = 10;
const distanciaEmKm = 100;
const tipoCombustivel = 'Gasolina';

consumo = distanciaEmKm / precoKmPorL;

if (tipoCombustivel === 'Etanol') {
    resultado = consumo * precoEtanol;
    console.log(resultado.toFixed(2));
} else if (tipoCombustivel === 'Gasolina') {
    resultado = consumo * precoGasolina;
    console.log(resultado.toFixed(2));
} else {
    console.log('Tipo inválido!');
}
