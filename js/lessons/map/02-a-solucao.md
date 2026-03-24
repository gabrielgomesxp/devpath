# .map() — A Solução (Arquivo 02)

## O Conceito

O `.map()` é o método usado para **transformar** arrays. Ele percorre cada item do array original, aplica uma função de transformação e te devolve um **novo array** com os resultados, mantendo exatamente o mesmo tamanho do original.

---

## Por que foi inventado?

Ele foi criado para facilitar a vida do desenvolvedor que precisa transformar dados (como converter uma lista de IDs em uma lista de nomes, ou números em strings) sem ter que escrever loops manuais.

---

## Analogia: A Linha de Montagem 🏭

Imagine uma fábrica de camisetas.
1.  **Entrada:** Uma esteira com 10 camisetas brancas lisas.
2.  **A Máquina (`map`):** Uma máquina de estampar.
3.  **A Operação:** Para cada camiseta que passa, a máquina coloca um desenho.
4.  **Saída:** Uma nova esteira com 10 camisetas estampadas.

A quantidade é a mesma, mas o **estado** de cada item mudou.

---

## Antes vs Depois

### Antes (For Loop):
```javascript
const dobro = [];
for(let n of numeros) {
  dobro.push(n * 2);
}
```

### Depois (.map):
```javascript
const dobro = numeros.map(n => n * 2);
```

---

## Sintaxe

### Function Normal:
```javascript
const nomesMaiusculos = nomes.map(function(nome) {
  return nome.toUpperCase();
});
```

### Arrow Function:
```javascript
const nomesMaiusculos = nomes.map(nome => nome.toUpperCase());
```

---

## Exemplos Progressivos

### 1. Números (Dobro)
```javascript
[1, 2, 3].map(n => n * 2); // [2, 4, 6]
```

### 2. Objetos para Strings (Nomes)
```javascript
const users = [{nome: "Gabi"}, {nome: "Ana"}];
users.map(u => u.nome); // ["Gabi", "Ana"]
```

### 3. Criando novos Objetos
```javascript
precos.map(p => ({ valor: p, moeda: "BRL" }));
```

---

## Próximo passo

Abra o arquivo **03-como-usar.md** para ver os detalhes técnicos e evitar erros comuns.
