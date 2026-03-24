# .map() — O Problema (Arquivo 01)

## Contexto

Você já sabe usar loops `for` para percorrer um array. Mas, no dia a dia, muitas vezes o que queremos não é apenas "passar" pelos itens, mas sim **transformar** cada um deles em algo novo, mantendo a mesma quantidade de itens no final.

---

## O Desafio: A Lista de Preços em Reais

Imagine que você tem uma lista de preços em um array de números:

```javascript
const precos = [10, 20, 30, 40];
```

Seu objetivo é criar um **novo array** onde cada preço seja uma string formatada como moeda: `"R$ 10,00"`, `"R$ 20,00"`, etc.

Atualmente, você faria algo assim (Modo Manual):

```javascript
const precosFormatados = []; // Criar um array vazio fora

for (let i = 0; i < precos.length; i++) {
  // Transformar e empurrar manualmente
  const formatado = "R$ " + precos[i].toFixed(2).replace(".", ",");
  precosFormatados.push(formatado);
}

console.log(precosFormatados); 
// ["R$ 10,00", "R$ 20,00", "R$ 30,00", "R$ 40,00"]
```

---

## O Problema do "Modo Manual"

1.  **Trabalho Repetitivo:** Você tem que criar um array vazio, gerenciar o índice `i`, o `length` e dar o `.push()`. Muita cerimônia para uma tarefa simples.
2.  **Risco de Efeitos Colaterais:** Você está modificando (mutando) o estado do seu script ao criar variáveis externas e preenchê-las manualmente.
3.  **Foco no "Como":** Você está perdendo tempo explicando o loop em vez de focar na **transformação**.

---

## Pergunta Reflexiva

> Se você tem 4 itens na entrada e quer exatamente 4 itens na saída, mas transformados... não seria mais fácil ter uma "máquina" que pegasse cada item e te devolvesse a versão nova dele automaticamente?

---

## Próximo passo

Abra o arquivo **02-a-solucao.md** para conhecer a linha de montagem do JavaScript!
