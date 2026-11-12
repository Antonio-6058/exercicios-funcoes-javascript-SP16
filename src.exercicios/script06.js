// Exercício 6: Média de notas
// Crie uma função `calcularMedia(n1, n2, n3)` que retorne a média de três notas.
// Peça as três notas ao usuário e mostre a média.

function calcularMedia(n1, n2, n3) {
    return parseInt(n1 + n2 + n3) / 3;
}

let nota1 = parseInt(prompt("Digite a primeira nota:"));
let nota2 = parseInt(prompt("Digite a segunda nota:"));
let nota3 = parseInt(prompt("Digite a terceira nota:"));
alert(calcularMedia(nota1, nota2, nota3));