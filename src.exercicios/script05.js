// Exercício 5: Maior de dois
// Crie uma função `maiorDeDois(a, b)` que retorne o maior entre dois números.
// Peça os dois números ao usuário e mostre qual é o maior.

function maiorDeDois(a, b) {
    return(a > b ? a : b);
}

let v1 = parseFloat(prompt("Digite o primeiro número:"));
let v2 = parseFloat(prompt("Digite o segundo número:"));
alert("O número maior é: " + maiorDeDois(v1, v2));

