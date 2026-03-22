// ═══════════════════════════════════════════════════════════
// 📦 UTILS — Arrays
// Biblioteca pessoal de funções de manipulação de arrays.
// Gerenciada pelo bibliotecário (Gemini).
// Não editar manualmente — usar os comandos de biblioteca.
// ═══════════════════════════════════════════════════════════

// ─────────────────────────────────────────────
// FUNÇÃO: filtrarPorPropriedade
// CATEGORIA: Arrays
// APRENDIDA EM: Exercício array_methods_01.js
// ─────────────────────────────────────────────
// O QUE FAZ:
// Filtra um array de objetos por uma propriedade específica e seu valor.
//
// PARÂMETROS:
// @param {Array} arr — o array de objetos
// @param {string} chave — o nome da propriedade (ex: 'categoria')
// @param {any} valor — o valor a ser filtrado (ex: 'Periféricos')
// @returns {Array} — o array filtrado
//
// LEGOS USADOS:
// 🧩 .filter() — aprendido em HOF (seleciona os itens)
//
// EXEMPLO DE USO:
// filtrarPorPropriedade(produtos, 'categoria', 'Monitores') // → [{nome: 'Monitor 4K', ...}]
// ─────────────────────────────────────────────
function filtrarPorPropriedade(arr, chave, valor) {
  return arr.filter(item => item[chave] === valor);
}

// ─────────────────────────────────────────────
// FUNÇÃO: filtrarETransformar
// CATEGORIA: Arrays
// APRENDIDA EM: Exercício array_methods_01.js
// ─────────────────────────────────────────────
// O QUE FAZ:
// Filtra um array por uma condição e transforma os resultados em seguida.
//
// PARÂMETROS:
// @param {Array} arr — array de entrada
// @param {Function} funcaoFiltro — função de condição do filter
// @param {Function} funcaoMapa — função de transformação do map
// @returns {Array} — array filtrado e transformado
//
// LEGOS USADOS:
// 🧩 .filter() — aprendido em HOF (seleciona os itens)
// 🧩 .map()    — aprendido em HOF (transforma os itens)
// 💡 Combinação: filter primeiro, map depois = chaining
//
// EXEMPLO DE USO:
// filtrarETransformar(nums, n => n > 2, n => n * 10)
// → [30, 40]
// ─────────────────────────────────────────────
function filtrarETransformar(arr, funcaoFiltro, funcaoMapa) {
  return arr.filter(funcaoFiltro).map(funcaoMapa);
}
