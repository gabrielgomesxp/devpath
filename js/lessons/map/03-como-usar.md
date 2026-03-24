# .map() — Como Usar (Arquivo 03)

## Funcionamento Interno 🔍

Diferente do `forEach`, o `.map()` **sempre retorna um novo array**. Ele não altera o array original (imutabilidade), o que é uma excelente prática no JavaScript moderno.

```javascript
const novoArray = arrayOriginal.map((item, index, array) => {
  // O que você retornar aqui será o item do novo array
  return item * 2;
});
```

---

## Comparação: .map() vs .forEach()

- **.map()**: Use quando você quer um **resultado** (um novo array transformado).
- **.forEach()**: Use quando você quer apenas um **efeito colateral** (ex: dar um console.log em cada item, ou salvar no banco de dados) e não precisa de um retorno.

---

## Erros Comuns ⚠️

1.  **Esquecer o return:** Se você não retornar nada dentro do `map`, o novo array será preenchido com `undefined`.
2.  **Tentar usar map em algo que não é array:** Se o dado não for um array, o JS vai gritar: `TypeError: map is not a function`.
3.  **Usar map para filtrar:** O `map` NÃO remove itens. Se você tentar "não retornar nada" para um item, ele retornará `undefined`, mas o array continuará com o mesmo tamanho.

---

## 🔍 Pesquise no Google

> Quando você terminar esta lição e quiser se aprofundar, pesquise:
> **"javascript array map vs foreach"**
> **"immutability in javascript map"**
> Sugestão: javascript.info (Seção de Array methods)

---

## Próximo passo

Abra o arquivo **04-exercicios-progressivos.js** para praticar!
