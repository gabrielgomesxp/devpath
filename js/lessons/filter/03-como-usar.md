# .filter() — Como Usar (Arquivo 03)

## Funcionamento Interno 🔍

O segredo do `.filter()` é que a sua função de callback **DEVE retornar um booleano** (`true` ou `false`).

```javascript
const selecionados = array.filter((item) => {
  return item.preco < 100; // Isso retorna true ou false
});
```

Se retornar `true`, o item vai para o novo array. Se retornar `false`, ele fica de fora.

---

## Comparação: .filter() vs .find()

- **.filter()**: Retorna um **ARRAY** com todos os itens que passaram no teste. Se ninguém passar, retorna um array vazio `[]`.
- **.find()**: Retorna apenas o **PRIMEIRO** item que passar no teste. Se ninguém passar, retorna `undefined`.

---

## Erros Comuns ⚠️

1.  **Esquecer o return:** Se você não der `return` (ou não usar a sintaxe curta da arrow function), a função retornará `undefined`. Como `undefined` é "falsy", seu novo array virá **vazio**.
2.  **Tentar transformar o item:** O `filter` NÃO muda o item. Se você tentar fazer `n => n * 2` dentro do filter, ele apenas verá que o resultado é um número (que é `true`) e incluirá o número original no novo array, sem dobrar.

---

## 🔍 Pesquise no Google

> Quando você terminar esta lição e quiser se aprofundar, pesquise:
> **"javascript array filter multiple conditions"**
> **"filter vs find javascript"**
> Sugestão: MDN Web Docs

---

## Próximo passo

Abra o arquivo **04-exercicios-progressivos.js** para praticar!
