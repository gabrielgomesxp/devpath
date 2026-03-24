# .filter() — O Problema (Arquivo 01)

## Contexto

Você já sabe como percorrer um array. Mas, muitas vezes, o que precisamos não é de todos os itens, mas apenas daqueles que atendem a uma condição específica.

---

## O Desafio: Apenas os Maiores de Idade

Imagine que você tem uma lista de idades e precisa criar uma nova lista apenas com quem tem 18 anos ou mais.

```javascript
const idades = [12, 18, 22, 15, 40, 10];
```

Modo Manual (For Loop):

```javascript
const maioresDeIdade = [];

for (let i = 0; i < idades.length; i++) {
  if (idades[i] >= 18) {
    maioresDeIdade.push(idades[i]);
  }
}

console.log(maioresDeIdade); // [18, 22, 40]
```

---

## O Problema do "Modo Manual"

1.  **Lógica Espalhada:** Você tem que misturar a lógica de percorrer (o `for`) com a lógica de decidir (o `if`).
2.  **Variáveis Temporárias:** Você precisa de um array vazio externo e gerenciar o `push`.
3.  **Foco no "Como":** Você está escrevendo os passos do computador em vez de declarar a **regra de negócio** (maior que 18).

---

## Pergunta Reflexiva

> E se você pudesse delegar essa tarefa para um "Segurança" que ficasse na porta e só deixasse passar quem você autorizasse?

---

## Próximo passo

Abra o arquivo **02-a-solucao.md** para conhecer o segurança oficial do JavaScript!
