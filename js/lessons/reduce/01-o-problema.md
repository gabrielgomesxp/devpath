# .reduce() — O Problema (Arquivo 01)

## Contexto

Você já é mestre em escolher itens com o **Segurança na Porta** (`.filter()`) e em transformar itens com a **Linha de Montagem** (`.map()`). Esses métodos sempre te devolvem um **novo array**. Mas, no dia a dia, muitas vezes precisamos de algo diferente.

---

## O Problema: O "Acumulador Braçal"

Imagine que você está criando um sistema de finanças para o seu projeto e tem uma lista de gastos representados por números em um array:

```javascript
const gastos = [120, 45, 300, 80, 150];
```

Seu objetivo é descobrir qual é o **Total de Gastos** do mês. 

Antes de conhecermos o segredo que o JavaScript esconde, você teria que fazer todo o trabalho manual usando um loop `for`:

```javascript
let totalDoMes = 0; // Você precisa criar e gerenciar essa variável fora do loop

for (let i = 0; i < gastos.length; i++) {
  // Você precisa dizer como o computador deve somar
  totalDoMes = totalDoMes + gastos[i]; 
}

console.log(totalDoMes); // 695
```

---

## Por que isso é ruim?

1.  **Exposição de Dados:** Você criou uma variável `totalDoMes` que fica "viva" e exposta. Qualquer outro código no seu arquivo pode alterá-la por engano, estragando seu cálculo.
2.  **Verboso e Manual:** Você gasta 4 ou 5 linhas de código apenas para somar números. Você precisa cuidar do índice `i`, do tamanho do array `length` e de como incrementar. 
3.  **Chance de Erro:** Se você começar o `totalDoMes` com `undefined` por engano, ou errar o sinal de `>`, o código quebra e o erro é difícil de achar.

---

## Pergunta Reflexiva

> O `.map()` gera um novo array do mesmo tamanho. O `.filter()` gera um novo array menor. 
> 
> **Se você pudesse "esmagar" ou "reduzir" todos esses números em uma única prensa até sobrar apenas um resultado final, como você chamaria esse processo?**

---

## Próximo passo

Abra o arquivo **02-a-solucao.md** para conhecer a prensa oficial do JavaScript.
