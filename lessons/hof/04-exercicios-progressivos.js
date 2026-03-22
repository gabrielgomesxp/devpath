/*
# Higher Order Functions — Exercícios Progressivos

Parabéns por chegar até aqui! Agora é hora de praticar o que você aprendeu
sobre .filter() e .map().

Lembre-se: pense na "máquina" que você precisa usar.
*/

// --- DADOS PARA OS EXERCÍCIOS ---
// const produtos = [
//  { nome: 'Teclado Mecânico', preco: 150, categoria: 'Periféricos' },
//  { nome: 'Mouse Gamer', preco: 80, categoria: 'Periféricos' },
//  { nome: 'Monitor 4K', preco: 1200, categoria: 'Monitores' },
//  { nome: 'Cabo HDMI', preco: 25, categoria: 'Acessórios' },
//  { nome: 'Headset Wireless', preco: 300, categoria: 'Periféricos' }
// ];

// --- EXERCÍCIO 1 (O Filtro de Entrada) ---
// Use o .filter() para criar um array chamado 'perifericos' 
// que contenha apenas os produtos da categoria 'Periféricos'.

/*
O QUE ESTÁ ACONTECENDO:
O código funciona perfeitamente, mas há dois pontos de atenção:
1. Nomenclatura: Você usou 'produtos' (plural) como parâmetro para um único item.
2. Estrutura de Retorno: No Exercício 2, você envolveu a string em colchetes [], criando um array de arrays, o que dificulta o uso posterior.

DICA:
- Use sempre o singular para o parâmetro do callback (ex: produto, item, p).
- O .map() já retorna um array. Se você retornar uma string direta, terá um array de strings.

EXEMPLO SIMPLIFICADO:
// Em vez de:
lista.map(item => [item.nome]) // retorna [['nome1'], ['nome2']]

// Use:
lista.map(item => item.nome) // retorna ['nome1', 'nome2']

O QUE VOCÊ DEVE FAZER:
1. Altere os parâmetros de 'produtos' para 'produto'.
2. No Exercício 2, remova os colchetes [] de volta da template string.
3. No Exercício 3, experimente usar o spread operator {...produto} se quiser manter todas as outras propriedades sem precisar digitar uma por uma.
*/

// --- DADOS PARA OS EXERCÍCIOS ---
const produtos = [
  { nome: 'Teclado Mecânico', preco: 150, categoria: 'Periféricos' },
  { nome: 'Mouse Gamer', preco: 80, categoria: 'Periféricos' },
  { nome: 'Monitor 4K', preco: 1200, categoria: 'Monitores' },
  { nome: 'Cabo HDMI', preco: 25, categoria: 'Acessórios' },
  { nome: 'Headset Wireless', preco: 300, categoria: 'Periféricos' }
];

// --- EXERCÍCIO 1 (O Filtro de Entrada) ---
// Use o .filter() para criar um array chamado 'perifericos' 
// que contenha apenas os produtos da categoria 'Periféricos'.

// ESCREVA SEU CÓDIGO ABAIXO:
// Boa lógica! Apenas ajuste o nome do parâmetro para o singular: 'produto'.
let novosProdutos = produtos.filter((produto) => produto.categoria === 'Periféricos' )
console.log(novosProdutos)


// --- EXERCÍCIO 2 (A Vitrine de Preços) ---
// Use o .map() para criar um array chamado 'nomesEPrecos' 
// que contenha apenas o nome e o preço formatado (ex: "Teclado Mecânico - R$ 150").

// ESCREVA SEU CÓDIGO ABAIXO:
// Aqui você criou um array de arrays. Removendo os [], você terá um array limpo de strings!
let nomesEPrecos = produtos.map(({nome, preco}) => `${nome} - R$ ${preco}`)
console.log(nomesEPrecos)

// --- EXERCÍCIO 3 (O Desafio do Gerente) ---
// Combine .filter() e .map()! 
// Crie um array chamado 'promocaoMonitores' que:
// 1. Filtre apenas os produtos da categoria 'Monitores'.
// 2. Aplique um desconto de 10% no preço desses monitores.
// 3. Retorne o objeto do monitor com o novo preço.

// ESCREVA SEU CÓDIGO ABAIXO:
function calcularDesconto10(valor) {return valor * 0.1;}
let promocaoMonitores = produtos
  .filter((produto) => produto.categoria === 'Monitores')
  .map((produto) => { 
    return { 
      ...produto, // Isso é o Spread Operator! Ele copia todas as propriedades originais
      preco: produto.preco - calcularDesconto10(produto.preco) 
    }
  })
console.log(promocaoMonitores)

/*
QUANDO TERMINAR:
1. Salve o arquivo.
2. Peça ao mentor: "Revise meu código do exercício de HOF".
*/
