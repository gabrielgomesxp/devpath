# Higher Order Functions — Como Usar

## Contexto

Agora que você sabe que HOFs são máquinas que facilitam sua vida, vamos aprender a operar as duas mais famosas: `.filter()` e `.map()`.

---

## 1. .filter() (O Filtro de Café)

O `filter` cria um NOVO array com todos os elementos que passaram em um teste (retornaram `true`).

**Sintaxe:**
```javascript
const novoArray = arrayOriginal.filter(function(item) {
  return item > 10; // Se for true, o item entra no novo array
});
```

**Com Arrow Function (Mais comum):**
```javascript
const maioresQueDez = numeros.filter(n => n > 10);
```

---

## 2. .map() (O Transformador)

O `map` cria um NOVO array com os resultados da função aplicada a CADA elemento. Ele não muda o tamanho do array, apenas o conteúdo.

**Sintaxe:**
```javascript
const novoArray = arrayOriginal.map(function(item) {
  return item * 2; // O novo array terá os valores dobrados
});
```

**Com Arrow Function:**
```javascript
const dobrados = numeros.map(n => n * 2);
```

---

## Casos Comuns de Erro

1. **Esquecer o `return`:** Se você usar chaves `{}` na arrow function sem o `return`, o resultado será `undefined`.
   - ❌ `arr.map(n => { n * 2 })` // retorna [undefined, undefined...]
   - ✅ `arr.map(n => n * 2)` // retorno implícito
   - ✅ `arr.map(n => { return n * 2 })` // retorno explícito

2. **Achar que altera o array original:** HOFs como `filter` e `map` **não alteram** o array original. Elas sempre retornam um novo.

---

## 🔍 Pesquise no Google

> Quando você terminar esta lição e quiser se aprofundar, pesquise:
> **"javascript array methods mdn"**
> Sugestão: [MDN Web Docs - Array.prototype.filter()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

---

## Próximo passo

Você está pronto! Abra o arquivo `04-exercicios-progressivos.js` para colocar a mão na massa.
