// Exercício 9: Desconto
// Crie uma função `calcularDesconto(preco, percentual)` que retorne o valor final do produto após o desconto.
// Exemplo: preço 200 com 10% de desconto = 180.
// Peça o preço e o percentual de desconto ao usuário.

function calcularDesconto(preco, percentual) {
    let valorDesconto = preco * (percentual / 100);
    return preco - valorDesconto;
}

let precoProd = parseFloat(prompt("Digite o preço normal do produto:"));
let descP = parseFloat(prompt("Digite o desconto em porcentagem (ex: 10):"));
alert("O preço final com o desconto aplicado é: " + calcularDesconto(precoProd, descP));