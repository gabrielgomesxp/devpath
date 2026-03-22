# 📚 Utils Library — Regras do Bibliotecário

> Este arquivo instrui o Gemini a gerenciar a pasta `js/utils/` como uma
> biblioteca pessoal de funções reutilizáveis de Gabriel.
> O Gemini atua como bibliotecário: organiza, cataloga e nunca duplica.

---

## Estrutura da Biblioteca

```
js/utils/
  README.md           ← índice geral de todas as funções
  arrays.js           ← funções de manipulação de arrays
  strings.js          ← funções de manipulação de strings
  numbers.js          ← funções matemáticas e numéricas
  objects.js          ← funções de manipulação de objetos
  dom.js              ← funções utilitárias de DOM (quando chegar lá)
  async.js            ← funções de async/fetch (quando chegar lá)
```

Novos arquivos são criados conforme Gabriel aprende novos domínios.

---

## Quando o Bibliotecário Age

O Gemini deve avaliar se uma função merece ir para `utils/` quando:

1. Gabriel conclui um exercício e o mentor faz a revisão
2. Gabriel pede explicitamente: "adiciona isso na utils"
3. O mentor identifica uma função genérica e reutilizável no código de Gabriel

**Critério para adicionar:**
- A função resolve um problema genérico (não específico de um projeto)
- Pode ser usada em contextos diferentes
- Foi escrita pelo próprio Gabriel (não copiada)

**Nunca adicionar:**
- Funções específicas demais para um único contexto
- Funções que Gabriel não entendeu ainda
- Duplicatas de funções já existentes na biblioteca

---

## Formato Obrigatório de Cada Função na Utils

Cada função adicionada DEVE seguir este formato de comentário:

```javascript
// ─────────────────────────────────────────────
// FUNÇÃO: nomeDaFuncao
// CATEGORIA: Arrays / Strings / Numbers / Objects
// APRENDIDA EM: [nome do exercício ou lição]
// ─────────────────────────────────────────────
// O QUE FAZ:
// [descrição clara em 1-2 linhas]
//
// PARÂMETROS:
// @param {tipo} nome — descrição
// @returns {tipo} — descrição
//
// LEGOS USADOS:
// [se for combinação de conceitos, listar quais]
// Ex: "Combina .filter() + .map() aprendidos em HOF"
//
// EXEMPLO DE USO:
// nomeDaFuncao([1, 2, 3]) // → [resultado esperado]
// ─────────────────────────────────────────────
function nomeDaFuncao(parametro) {
  // implementação
}
```

---

## Regra de Combinação de Legos

Quando uma função combinar dois ou mais conceitos já aprendidos,
o mentor DEVE registrar isso na seção `LEGOS USADOS` e adicionar
um comentário explicando a combinação:

```javascript
// ─────────────────────────────────────────────
// FUNÇÃO: filterAndTransform
// CATEGORIA: Arrays
// APRENDIDA EM: Exercício array_methods_01.js
// ─────────────────────────────────────────────
// O QUE FAZ:
// Filtra um array por condição e transforma os resultados.
//
// PARÂMETROS:
// @param {Array} arr — array de entrada
// @param {Function} filterFn — função de filtro
// @param {Function} mapFn — função de transformação
// @returns {Array} — array filtrado e transformado
//
// LEGOS USADOS:
// 🧩 .filter() — aprendido em HOF (seleciona os itens)
// 🧩 .map()    — aprendido em HOF (transforma os itens)
// 💡 Combinação: filter primeiro, map depois = chaining
//
// EXEMPLO DE USO:
// filterAndTransform([1,2,3,4], n => n > 2, n => n * 10)
// → [30, 40]
// ─────────────────────────────────────────────
function filterAndTransform(arr, filterFn, mapFn) {
  return arr.filter(filterFn).map(mapFn);
}
```

---

## Regra Anti-Duplicata

Antes de adicionar qualquer função, o mentor DEVE:

1. Ler o arquivo correspondente na utils/
2. Verificar se já existe função com o mesmo propósito
3. Se existir: NÃO duplicar — apenas comentar que já existe
4. Se for parecida mas diferente: adicionar com nome distinto
   e comentar a diferença

---

## Atualização do README da Utils

Toda vez que uma função for adicionada, o mentor DEVE atualizar
o `js/utils/README.md` com a nova entrada na tabela de índice.

---

## Como Gabriel Aciona o Bibliotecário

```
"Adiciona essa função na utils"
"Salva isso na biblioteca"
"Isso merece virar um lego?"
"Revisa a utils e vê se tem duplicata"
```

O mentor também pode sugerir proativamente após uma revisão:
"Essa função que você escreveu é genérica o suficiente para ir
para a utils. Quer que eu adicione?"
