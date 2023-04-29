// 1- Crie um programa que dado um número imprima a sua tabuada.

const numero = 7;

console.log('Tabuada do número '+ numero);

for (let i = 1; i <= 10; i++) {
    
    console.log(numero+'x'+i +' = '+ (numero*i));
}