// Exercício 8: Celsius para Fahrenheit
// Crie uma função `celsiusParaFahrenheit(c)` que converta a temperatura de Celsius para Fahrenheit.
// Fórmula: `F = C * 1.8 + 32`
// Peça a temperatura em Celsius e mostre o resultado em Fahrenheit.

function celsiusParaFahrenheit(c) {
    return c * 1.8 + 32;
}

let tempC = parseFloat(prompt("Diga quantos graus Celsius está fazendo:"));
alert("Essa temperatura em Fahrenheit é: " + celsiusParaFahrenheit(tempC) + "ºF");
