/*
  filter + map — EXERCÍCIOS PROGRESSIVOS
*/

// ─────────────────────────────────────────────────────────────────────────
// EXERCÍCIO 1: O COMBO BÁSICO
// ─────────────────────────────────────────────────────────────────────────
/*
  PANORAMA: Temos números e queremos o DOBRO apenas dos que são MAIORES que 5.
  RESULTADO ESPERADO: [12, 20] (porque 6 e 10 são > 5)
  ALGORITMO PEQUENO:
  1. ...
  
  GEMINI AVALIA:
  
  CÓDIGO:
*/

const numeros = [2, 6, 3, 10, 4];
// Seu código aqui...


// ─────────────────────────────────────────────────────────────────────────
// EXERCÍCIO 2: NOMES DOS VIPS
// ─────────────────────────────────────────────────────────────────────────
/*
  PANORAMA: Pegar apenas o NOME dos usuários que são VIPs.
  RESULTADO ESPERADO: ["GABRIEL", "ANA"]
  DICA: Combine .filter() para pegar vips e .map() para o nome em maiúsculo.
  ALGORITMO PEQUENO:
  1. ...
  
  GEMINI AVALIA:
  
  CÓDIGO:
*/

const convidados = [
  { nome: "Gabriel", vip: true },
  { nome: "Beto", vip: false },
  { nome: "Ana", vip: true }
];
// Seu código aqui...


// ─────────────────────────────────────────────────────────────────────────
// EXERCÍCIO 3: PREÇOS PROMOCIONAIS
// ─────────────────────────────────────────────────────────────────────────
/*
  PANORAMA: Filtrar produtos da categoria "Tech" e retornar uma string: "Tech: [NOME] custa R$ [PRECO]"
  RESULTADO ESPERADO: ["Tech: Mouse custa R$ 50"]
  ALGORITMO PEQUENO:
  1. ...
  
  GEMINI AVALIA:
  
  CÓDIGO:
*/

const itens = [
  { nome: "Mouse", preco: 50, categoria: "Tech" },
  { nome: "Cadeira", preco: 500, categoria: "Móveis" }
];
// Seu código aqui...
