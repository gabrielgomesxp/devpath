# filter + map — O Problema (Arquivo 01)

## Contexto

Você já sabe filtrar e já sabe transformar. Mas no mundo real, raramente fazemos apenas uma coisa. Quase sempre precisamos **escolher** alguns itens e depois **mudar** como eles aparecem.

---

## O Desafio: Nomes dos Produtos Caros

Imagine que você tem uma lista de produtos e quer apenas o **NOME** dos produtos que custam mais de **R$ 1.000**.

```javascript
const produtos = [
  { nome: "Mouse", preco: 50 },
  { nome: "Notebook", preco: 5000 },
  { nome: "Monitor", preco: 1200 }
];
```

Modo Manual (Dois passos separados):

```javascript
// Passo 1: Filtrar
const caros = produtos.filter(p => p.preco > 1000);

// Passo 2: Transformar
const nomesDosCaros = caros.map(p => p.nome);

console.log(nomesDosCaros); // ["Notebook", "Monitor"]
```

---

## O Problema do "Modo Manual"

1.  **Variáveis Intermediárias:** Você criou a variável `caros` apenas para servir de ponte. Ela não tem utilidade depois disso.
2.  **Fluxo Interrompido:** Você tem que parar, salvar em uma variável e depois começar outra operação.
3.  **Memória:** Em arrays gigantes, criar variáveis intermediárias consome mais memória do que o necessário.

---

## Pergunta Reflexiva

> Se o `.filter()` te devolve um array... e o `.map()` é um método que roda em arrays... não seria possível conectar a saída de um direto na entrada do outro, como se fosse um cano de água?

---

## Próximo passo

Abra o arquivo **02-a-solucao.md** para conhecer o encadeamento (Chaining).
