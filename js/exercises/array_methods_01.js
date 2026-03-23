/*
O QUE ESTÁ ACONTECENDO:
Excelente trabalho nos Exercícios 1 e 2! Você dominou o básico e até usou 
desestruturação. No Exercício 3 (o Combo), temos dois detalhes:
1. O objetivo era retornar um OBJETO e você retornou uma STRING (template string).
2. O precoComDesconto ainda está mostrando o preço original e a função de 
cálculo não foi usada.

DICA:
Para retornar um objeto direto em uma arrow function de uma linha, você precisa 
envolver as chaves do objeto em parênteses: (item) => ({ novoObjeto: item }). 
Se não colocar os parênteses (), o JS acha que as chaves {} são o corpo da função.

EXEMPLO SIMPLIFICADO:
const promo = produtos.map(p => ({
  nome: p.nome,
  desconto: p.preco * 0.9
}));

O QUE VOCÊ DEVE FAZER:
1. No .map() do Exercício 3, mude de string para objeto { }.
2. Aplique o cálculo do desconto (preco * 0.9) na propriedade precoComDesconto.
3. Você pode usar sua função calcularDesconto90 ou fazer o cálculo direto ali.
*/

const produtos = [
  { id: 1, nome: "Teclado Mecânico", categoria: "Periféricos", preco: 450, emEstoque: true },
  { id: 2, nome: "Monitor 24'", categoria: "Monitores", preco: 900, emEstoque: false },
  { id: 3, nome: "Mouse Gamer", categoria: "Periféricos", preco: 250, emEstoque: true },
  { id: 4, nome: "Notebook Pro", categoria: "Computadores", preco: 5500, emEstoque: true },
  { id: 5, nome: "Headset Wireless", categoria: "Áudio", preco: 600, emEstoque: true },
  { id: 6, nome: "Cadeira Gamer", categoria: "Móveis", preco: 1200, emEstoque: false },
  { id: 7, nome: "Webcam Full HD", categoria: "Periféricos", preco: 350, emEstoque: true },
];

// ─────────────────────────────────────────────────────────────────────────
// EXERCÍCIO 1: O FILTRO SEGURANÇA (.filter)
// Objetivo: Criar um novo array chamado 'produtosDisponiveis' 
// que contenha apenas os produtos que estão 'emEstoque'.
// ─────────────────────────────────────────────────────────────────────────

let produtosDisponiveis = produtos.filter((produto) => produto.emEstoque === true)
console.log(produtosDisponiveis)


// ─────────────────────────────────────────────────────────────────────────
// EXERCÍCIO 2: A LINHA DE MONTAGEM (.map)
// Objetivo: Criar um novo array chamado 'produtosFormatados'.
// Cada item deve ser uma string no formato: "Produto: [NOME] - R$ [PRECO]"
// ─────────────────────────────────────────────────────────────────────────

let produtosFormatados = produtos.map(({nome, preco}) => `Produto: ${nome} - R$ ${preco}`)
console.log(produtosFormatados)


// ─────────────────────────────────────────────────────────────────────────
// EXERCÍCIO 3: O COMBO (Chaining)
// Objetivo: A loja quer dar 10% de desconto APENAS nos "Periféricos".
// 1. Filtre apenas os periféricos.
// 2. Mapeie os resultados para um novo objeto contendo apenas:
//    { nome: [NOME], precoOriginal: [PRECO], precoComDesconto: [PRECO * 0.9] }
// 3. Salve no array 'promocaoPerifericos'.
// ─────────────────────────────────────────────────────────────────────────

let promocaoPerifericos = produtos
  .filter((produto) => produto.categoria === 'Periféricos')
  .map(
    ({nome,preco}) => ({nome: nome, precoOriginal: preco, precoComDesconto: preco * 0.9})
  )
console.log(promocaoPerifericos)


// ─────────────────────────────────────────────────────────────────────────
// VALIDAÇÃO:
// Use console.log() para verificar se os resultados estão corretos.
// ─────────────────────────────────────────────────────────────────────────

