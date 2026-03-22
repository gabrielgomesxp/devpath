# Higher Order Functions — O Problema

## Contexto

Você já sabe como usar loops `for` para percorrer arrays e fazer coisas com os elementos. Mas, conforme seus projetos crescem, você vai perceber que escrever o mesmo loop repetidamente começa a ficar cansativo e propenso a erros.

---

## O Problema

Imagine que você tem uma lista de números e quer apenas os números que são maiores que 10. 

Atualmente, você faria algo assim:

```javascript
const numeros = [5, 12, 8, 130, 44];
const maioresQueDez = [];

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] > 10) {
    maioresQueDez.push(numeros[i]);
  }
}

console.log(maioresQueDez); // [12, 130, 44]
```

Agora imagine que você também quer:
1. Uma lista com o dobro de cada número.
2. A soma de todos os números.
3. Encontrar o primeiro número maior que 100.

Para cada uma dessas tarefas, você teria que escrever um loop `for` completo, gerenciar o índice `i`, verificar o `length` e garantir que não errou nada na sintaxe do loop.

---

## Analogia

Imagine que você é o dono de uma **Fábrica de Camisetas**. 

Se você não tem máquinas especializadas (Higher Order Functions), você mesmo tem que:
1. Pegar a camiseta da pilha.
2. Conferir se ela tem defeito (se tiver, separa; se não, descarta).
3. Dobrar a camiseta.
4. Colocar na caixa.
5. Repetir isso manualmentepara CADA uma das 1.000 camisetas.

É muito trabalho manual e repetitivo, certo? Você está focado no **COMO** fazer (o passo a passo do loop) em vez de focar no **O QUE** quer (separar camisetas boas).

---

## Pergunta Reflexiva

Como você resolveria isso de forma mais simples, sem ter que gerenciar o loop `i++` toda vez? E se existissem "máquinas" que já soubessem como percorrer a pilha de camisetas e só te perguntassem: "O que eu devo fazer com cada uma?"

---

## Próximo passo

Abra o arquivo `02-a-solucao.md` para descobrir as máquinas automáticas do JavaScript!
