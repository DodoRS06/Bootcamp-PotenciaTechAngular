function escrevaNome(nome){
    console.log('Meu nome é', nome)
}

function verificarIdade(idade){
    if(idade >=18){
        console.log('Você tem', idade, 'anos e é maior de idade.');
    } else {
        console.log('Você tem', idade, 'anos e é menor de idade.');
    }
}
verificarIdade(17);