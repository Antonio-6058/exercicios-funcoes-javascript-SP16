// Exercício 10: Maioridade
// Crie uma função `verificarIdade(idade)` que retorne `"Maior de idade"` se a idade for 18 ou mais, e `"Menor de idade"` caso contrário.
// Peça a idade ao usuário e mostre o resultado.

function verificarIdade(idade) {
    if (idade >= 18) {
        alert("Você é maior de idade");
    } else {
        alert("Você é menor de idade");
    }
}

let userAge = parseInt(prompt("Quantos anos você tem?"));
verificarIdade(userAge);