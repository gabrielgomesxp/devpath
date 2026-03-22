// ═══════════════════════════════════════════════════════════
// 📦 UTILS — Numbers
// Biblioteca pessoal de funções matemáticas e numéricas.
// Gerenciada pelo bibliotecário (Gemini).
// Não editar manualmente — usar os comandos de biblioteca.
// ═══════════════════════════════════════════════════════════

// ─────────────────────────────────────────────
// FUNÇÃO: calcularPorcentagem
// CATEGORIA: Numbers
// APRENDIDA EM: Exercício array_methods_01.js
// ─────────────────────────────────────────────
// O QUE FAZ:
// Calcula o valor correspondente a uma porcentagem de um total.
// Útil para calcular descontos, taxas ou comissões.
//
// PARÂMETROS:
// @param {number} valor — o valor total
// @param {number} porcentagem — a porcentagem (ex: 10 para 10%)
// @returns {number} — o valor calculado (ex: 100, 10 -> 10)
//
// LEGOS USADOS:
// 🧩 Operações Matemáticas Básicas — aprendido em JS Fundamentals
// 💡 Evolução da calcularDesconto10() do Gabriel
//
// EXEMPLO DE USO:
// calcularPorcentagem(200, 15) // → 30 (15% de 200)
// ─────────────────────────────────────────────
function calcularPorcentagem(valor, porcentagem) {
  return valor * (porcentagem / 100);
}
