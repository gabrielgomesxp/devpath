/*
  DESAFIO HOF - HIGHER ORDER FUNCTIONS
  Foco: .filter(), .map() e Chaining
  
  CONTEXTO: 
  Você recebeu uma lista de produtos de uma loja de tecnologia.
  Seu objetivo é processar esses dados para uma campanha de marketing.
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

// Seu código aqui...


// ─────────────────────────────────────────────────────────────────────────
// EXERCÍCIO 2: A LINHA DE MONTAGEM (.map)
// Objetivo: Criar um novo array chamado 'produtosFormatados'.
// Cada item deve ser uma string no formato: "Produto: [NOME] - R$ [PRECO]"
// ─────────────────────────────────────────────────────────────────────────

// Seu código aqui...


// ─────────────────────────────────────────────────────────────────────────
// EXERCÍCIO 3: O COMBO (Chaining)
// Objetivo: A loja quer dar 10% de desconto APENAS nos "Periféricos".
// 1. Filtre apenas os periféricos.
// 2. Mapeie os resultados para um novo objeto contendo apenas:
//    { nome: [NOME], precoOriginal: [PRECO], precoComDesconto: [PRECO * 0.9] }
// 3. Salve no array 'promocaoPerifericos'.
// ─────────────────────────────────────────────────────────────────────────

// Seu código aqui...


// ─────────────────────────────────────────────────────────────────────────
// VALIDAÇÃO:
// Use console.log() para verificar se os resultados estão corretos.
// ─────────────────────────────────────────────────────────────────────────
