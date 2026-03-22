/*
  PROJETO MENSAL - ABRIL/2026
  TECHSTORE DINÂMICA
  Conceitos: DOM, .filter(), .map(), Event Listeners
*/

// 1. BANCO DE DADOS (ARRAY DE OBJETOS)
const produtos = [
  { id: 1, nome: "Teclado Mecânico", categoria: "Periféricos", preco: 450, emEstoque: true },
  { id: 2, nome: "Monitor 24'", categoria: "Monitores", preco: 900, emEstoque: false },
  { id: 3, nome: "Mouse Gamer", categoria: "Periféricos", preco: 250, emEstoque: true },
  { id: 4, nome: "Notebook Pro", categoria: "Computadores", preco: 5500, emEstoque: true },
  { id: 5, nome: "Headset Wireless", categoria: "Áudio", preco: 600, emEstoque: true },
  { id: 6, nome: "Cadeira Gamer", categoria: "Móveis", preco: 1200, emEstoque: false },
  { id: 7, nome: "Webcam Full HD", categoria: "Periféricos", preco: 350, emEstoque: true },
];

// 2. REFERÊNCIAS DO DOM
const productGrid = document.getElementById('product-grid');
const filterButtons = document.querySelectorAll('.filter-btn');

/*
O QUE ESTÁ ACONTECENDO:
Você precisa criar uma função que pegue o array de produtos e transforme
cada objeto em uma string HTML de um card de produto.

DICA:
Use o .map() para criar um novo array de strings HTML.
Use o .join('') ao final para transformar esse array em uma única string gigante.

EXEMPLO SIMPLIFICADO:
const html = lista.map(item => `<div>${item.nome}</div>`).join('');
productGrid.innerHTML = html;
*/

function renderProducts(lista) {
  // SEU CÓDIGO AQUI...
  // 1. Mapeie a 'lista' para criar os cards HTML.
  // 2. Insira o resultado no 'productGrid.innerHTML'.
}

/*
O QUE VOCÊ DEVE FAZER NO FILTRO:
1. Adicione um event listener de 'click' para cada botão em 'filterButtons'.
2. Ao clicar, pegue o valor do atributo 'data-category' do botão.
3. Se a categoria for "Todos", chame renderProducts(produtos).
4. Se não for, use .filter() no array 'produtos' para pegar apenas os daquela categoria.
5. Chame renderProducts() com o resultado do filtro.
*/

// Adicione os event listeners aqui...


// INICIALIZAÇÃO: Renderiza todos os produtos ao carregar a página
renderProducts(produtos);
