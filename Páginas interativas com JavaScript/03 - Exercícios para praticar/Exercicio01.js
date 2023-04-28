/* 
Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprime a sua média e sua classificação conforme a tabela abaixo:

Média = (nota1 + nota2 + nota3) / 3;

Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7. recuperação;
- Média acima de 7, aprovação.
*/

const nota1 = 10;
const nota2 = 5;
const nota3 = 7;

media = (nota1 + nota2 + nota3) / 3

console.log('Média: ', media.toFixed(2));

if(media < 5){
    console.log('Reprovado!');
} else if (media > 7){
    console.log('Aprovado!');
} else{
    console.log('Recuperação!');
}