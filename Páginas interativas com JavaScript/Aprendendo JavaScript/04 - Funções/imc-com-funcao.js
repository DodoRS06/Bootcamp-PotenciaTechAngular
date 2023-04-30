function calcularIMC(peso, altura){
    return peso / (Math.pow(altura, 2))
}

function classificarimc(imc){
    if (imc < 18.5) {
        return 'Abaixo do peso!';
    } else if (imc >= 18.5 && imc < 25) {
        return 'Peso Normal!';
    } else if (imc >= 25 && imc < 30) {
        return 'Acima do peso!';
    } else if (imc >= 30 && imc < 40) {
        return 'Obeso!';
    } else {
        return 'Obesidade grave!';
    } 
}

//Main
(function (){
    const peso = 92.00;
    const altura = 1.78;
    const imc = calcularIMC(peso, altura);
    
    console.log('IMC: ', imc.toFixed(2))
    console.log(classificarimc(imc));
})();
