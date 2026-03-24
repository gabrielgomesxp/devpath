# .reduce() — Como Usar (Arquivo 03)

## Funcionamento Interno 🔍

O `.reduce()` é como um loop que carrega uma mochila (o acumulador). Ele percorre o array e, para cada item, ele pergunta: "O que você quer colocar na mochila desta vez?".

**O segredo está nos dois argumentos principais:**

```javascript
array.reduce(callback, valorInicial);
```

1.  **A Função Callback:** É o motor. Ela roda para cada item do array e precisa de um `return`.
2.  **O Valor Inicial:** É onde a "mochila" começa. Se você quer somar números, o valor inicial é `0`. Se você quer agrupar objetos em um novo objeto, o valor inicial é `{}`.

---

## Todas as Variações de Sintaxe

### 1. Soma Simples (Resumido)
```javascript
const soma = numeros.reduce((acc, num) => acc + num, 0);
```

### 2. Média (Com o Índice)
```javascript
const media = notas.reduce((acc, nota, index, array) => {
  acc += nota;
  if (index === array.length - 1) {
    return acc / array.length;
  }
  return acc;
}, 0);
```

---

## Comparação: .reduce() vs .map()

- **.map()**: Você tem 3 maçãs e quer descascar cada uma. Você terá 3 maçãs descascadas no final (mesma quantidade, estado diferente).
- **.reduce()**: Você tem 3 maçãs e quer fazer uma torta de maçã. Você terá **uma** torta no final (uma única coisa feita de várias).

---

## Erros Comuns: O que quebra e por quê? ⚠️

### 1. Esquecer o valor inicial com OBJETOS
```javascript
const itens = [{ preco: 10 }, { preco: 20 }];
const total = itens.reduce((acc, item) => acc + item.preco); 
// Erro! Sem o zero, o 'acc' inicial será o primeiro OBJETO { preco: 10 }. 
// Resultado bizarro: [object Object]20
```

### 2. Esquecer o Return dentro da Arrow Function com chaves
```javascript
const soma = nums.reduce((acc, n) => { acc + n }, 0); 
// Resultado: undefined. Se você usou chaves {}, o 'return' é obrigatório!
```

---

## 🔍 Pesquise no Google

> Quando você terminar esta lição e quiser se aprofundar, pesquise:
> **"javascript array reduce medium"** (para ver exemplos de casos de uso complexos)
> **"reduce vs forEach performance"**
> Sugestão: MDN Web Docs (Seção de Exemplos Práticos)

---

## Próximo passo

Abra o arquivo **04-exercicios-progressivos.js** para colocar a mão na massa!
