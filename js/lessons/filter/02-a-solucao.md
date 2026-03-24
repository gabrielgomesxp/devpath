# .filter() — A Solução (Arquivo 02)

## O Conceito

O `.filter()` serve para **selecionar** elementos de um array. Ele percorre o array original, aplica uma condição (teste) em cada item e te devolve um **novo array** contendo apenas os itens que passaram no teste.

---

## Por que foi inventado?

Para simplificar a extração de dados. Em vez de fazer loops e ifs manuais, você declara apenas a **condição de sucesso**.

---

## Analogia: O Segurança na Porta 🕴️

Imagine uma festa vip.
1.  **Entrada:** Uma fila de pessoas.
2.  **O Segurança (`filter`):** Ele tem uma lista de requisitos.
3.  **O Teste:** Ele olha para cada pessoa e pergunta: "Você tem convite?".
4.  **A Decisão:** Se `true` (verdadeiro), a pessoa entra na festa. Se `false` (falso), ela é barrada.
5.  **Saída:** Uma nova lista (quem está dentro da festa).

---

## Antes vs Depois

### Antes (For Loop):
```javascript
const pares = [];
for(let n of numeros) {
  if(n % 2 === 0) pares.push(n);
}
```

### Depois (.filter):
```javascript
const pares = numeros.filter(n => n % 2 === 0);
```

---

## Exemplos Progressivos

### 1. Números (Maiores que 10)
```javascript
[5, 12, 8, 130].filter(n => n > 10); // [12, 130]
```

### 2. Strings (Mais de 3 letras)
```javascript
["Oi", "Tudo", "Bem"].filter(s => s.length > 3); // ["Tudo"]
```

### 3. Objetos (Produtos em estoque)
```javascript
produtos.filter(p => p.emEstoque === true);
```

---

## Próximo passo

Abra o arquivo **03-como-usar.md** para ver como criar filtros poderosos.
