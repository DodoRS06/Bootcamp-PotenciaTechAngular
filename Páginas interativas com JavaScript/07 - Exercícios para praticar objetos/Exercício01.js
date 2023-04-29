/*
1 - Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustível por km rodado. 
Crie um método que dado a quantidade de quilômetros e o preço do combustível nos dê o valor gasto em reais para realizar este percurso.
*/

class Carro{
    marca;
    cor;
    gastoMedio;

    constructor(marca, cor, gastoMedio){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedio = gastoMedio;
    }

    calcularGastoDePercurso(distancia, precoCombustivel){
        return distancia * this.gastoMedio * precoCombustivel;
    }
}


const pulse = new Carro('Fiat', 'Preto', 0.1);
console.log(pulse.calcularGastoDePercurso(100, 5));