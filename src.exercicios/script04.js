// Exercício 4: Par ou ímpar
// Crie uma função `ehPar(numero)` que retorne `true` se o número for par e `false` se for ímpar.
// Peça um número ao usuário e mostre o resultado.

function ehPar(numero){
    if (numero % 2 === 0) {
        alert("true");
    } else {
        alert("false");
    }
}

let nmrPar = parseInt(prompt("Digite um número inteiro:"));
ehPar(nmrPar);

