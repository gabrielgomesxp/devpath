# Higher Order Functions — A Solução

## Contexto

No arquivo anterior, vimos que usar loops `for` manuais para tudo é como ser um dono de fábrica que faz todo o trabalho braçal. Agora, vamos conhecer nossos "gerentes" e "máquinas".

---

## A Solução: Higher Order Functions (HOF)

As **Higher Order Functions** (Funções de Alta Ordem) são funções que fazem pelo menos uma destas duas coisas:
1. Recebem outra função como argumento.
2. Retornam uma função.

No contexto de Arrays, elas são como "máquinas inteligentes" que já sabem como percorrer o array. Elas só precisam que você forneça uma **instrução** (uma função de callback) dizendo o que fazer com cada item.

### Antes vs Depois

**Antes (O operário):**
```javascript
// Eu controlo o índice, o limite e a ação
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 10) { ... }
}
```

**Depois (O gerente):**
```javascript
// Eu só digo a regra, a HOF cuida do loop
const resultado = arr.filter(numero => numero > 10);
```

---

## Analogia

Lembra da Fábrica de Camisetas?

As HOFs são como as **máquinas da fábrica**:
- **O Filter:** É a máquina de controle de qualidade. Ela olha cada camiseta e decide: "Passa ou não passa?".
- **O Map:** É a máquina de estamparia. Ela pega cada camiseta lisa e transforma em uma camiseta estampada.
- **O Reduce:** É a prensa de reciclagem. Ela pega várias camisetas e as transforma em um único bloco de tecido.

Você (o programador) não precisa mais pegar camiseta por camiseta. Você apenas configura a máquina e ela faz o resto.

---

## Quando usar?

- **Use HOFs** sempre que precisar transformar, filtrar ou processar dados de um array. Elas tornam o código mais legível e menos propenso a bugs de índice.
- **NÃO use HOFs** se você precisar interromper o loop no meio (tipo um `break` ou `continue`), pois a maioria das HOFs percorre o array inteiro.

---

## Próximo passo

Vamos aprender a sintaxe real dessas máquinas no arquivo `03-como-usar.md`.
