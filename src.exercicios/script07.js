// Exercício 7: Área do retângulo
// Crie uma função `areaRetangulo(base, altura)` que retorne a área do retângulo.
// Peça a base e a altura ao usuário e mostre a área.

function areaRetangulo(b, a) {
    return b * a;
}

let base = parseFloat(prompt("Digite a base do retângulo:"));
let altura = parseFloat(prompt("Digite a altura do retângulo:"));
alert("O tamanho do espaço (área) é: " + areaRetangulo(base, altura));