# 🧩 Biblioteca de Utilitários — Gabriel

Esta é minha biblioteca pessoal de funções reutilizáveis.
Cada função aqui foi escrita por mim durante os exercícios
e aprovada pelo mentor como genérica o suficiente para reutilizar.

Pense nisso como uma caixa de Legos: cada função é uma peça.
Projetos são construídos combinando essas peças.

---

## 📦 Arquivos da Biblioteca

| Arquivo | Domínio | Funções |
|---|---|---|
| `arrays.js` | Manipulação de arrays | — |
| `strings.js` | Manipulação de strings | — |
| `numbers.js` | Matemática e números | — |
| `objects.js` | Manipulação de objetos | — |
| `dom.js` | Utilitários de DOM | *(disponível após Matéria 04)* |
| `async.js` | Fetch e async | *(disponível após Matéria 09)* |

> O bibliotecário (Gemini) atualiza esta tabela automaticamente
> sempre que uma nova função é adicionada.

---

## 🧩 Índice de Funções

*(O bibliotecário preenche aqui conforme a biblioteca cresce)*

### Arrays
| Função | O que faz | Aprendida em |
|---|---|---|
| `filtrarPorPropriedade` | Filtra um array de objetos por uma propriedade específica e seu valor. | Exercício array_methods_01.js |
| `filtrarETransformar` | Filtra um array por condição e transforma os resultados. | Exercício array_methods_01.js |

### Strings
| Função | O que faz | Aprendida em |
|---|---|---|
| — | — | — |

### Numbers
| Função | O que faz | Aprendida em |
|---|---|---|
| `calcularPorcentagem` | Calcula o valor correspondente a uma porcentagem de um total. | Exercício array_methods_01.js |

### Objects
| Função | O que faz | Aprendida em |
|---|---|---|
| — | — | — |

---

## 💡 Combinações de Legos

Funções que foram criadas combinando conceitos já aprendidos:

| Função | Legos usados | Contexto |
|---|---|---|
| `filtrarETransformar` | .filter() + .map() (Chaining) | Manipulação de listas complexas |

---

## 📖 Como usar a biblioteca em um projeto

```javascript
// Importar uma função específica
import { chunk } from '../utils/arrays.js';

// Importar várias
import { capitalize, slugify } from '../utils/strings.js';
```

---

## 📏 Regras da Biblioteca

- Sem duplicatas — cada problema tem uma solução
- Sem funções que eu não entendi
- Cada função tem comentário completo
- Combinações de legos são sempre documentadas
- O índice acima é sempre atualizado pelo bibliotecário
