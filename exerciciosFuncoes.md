# Exercícios: Funções e Entrada de Dados com `prompt()`

**Instruções:** em cada exercício, crie uma função, peça os dados ao usuário com `prompt()` e mostre o resultado com `console.log()`.

**Dica importante:** o `prompt()` sempre devolve texto (string). Para fazer contas, converta com `parseInt()` ou `parseFloat()`:

```javascript
let idade = parseInt(prompt("Digite sua idade:"));
```

---

## Exercício 1: Saudação
Crie uma função `saudacao(nome)` que mostre a mensagem `Olá, [nome]! Bem-vindo(a) à aula!`.
Peça o nome do usuário com `prompt()` e chame a função.

## Exercício 2: O dobro
Crie uma função `dobro(numero)` que **retorne** o dobro de um número.
Peça um número ao usuário e mostre o resultado.

## Exercício 3: Soma de dois números
Crie uma função `soma(a, b)` que **retorne** a soma de dois números.
Peça os dois números ao usuário com dois `prompt()`.

## Exercício 4: Par ou ímpar
Crie uma função `ehPar(numero)` que retorne `true` se o número for par e `false` se for ímpar.
Peça um número ao usuário e mostre o resultado.

## Exercício 5: Maior de dois
Crie uma função `maiorDeDois(a, b)` que retorne o maior entre dois números.
Peça os dois números ao usuário e mostre qual é o maior.

## Exercício 6: Média de notas
Crie uma função `calcularMedia(n1, n2, n3)` que retorne a média de três notas.
Peça as três notas ao usuário e mostre a média.

## Exercício 7: Área do retângulo
Crie uma função `areaRetangulo(base, altura)` que retorne a área do retângulo.
Peça a base e a altura ao usuário e mostre a área.

## Exercício 8: Celsius para Fahrenheit
Crie uma função `celsiusParaFahrenheit(c)` que converta a temperatura de Celsius para Fahrenheit.
Fórmula: `F = C * 1.8 + 32`
Peça a temperatura em Celsius e mostre o resultado em Fahrenheit.

## Exercício 9: Desconto
Crie uma função `calcularDesconto(preco, percentual)` que retorne o valor final do produto após o desconto.
Exemplo: preço 200 com 10% de desconto = 180.
Peça o preço e o percentual de desconto ao usuário.

## Exercício 10: Maioridade
Crie uma função `verificarIdade(idade)` que retorne `"Maior de idade"` se a idade for 18 ou mais, e `"Menor de idade"` caso contrário.
Peça a idade ao usuário e mostre o resultado.