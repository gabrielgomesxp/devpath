# filter + map — A Solução (Arquivo 02)

## O Conceito

O **Encadeamento (Chaining)** é a técnica de conectar vários métodos de array em uma única linha de comando. Como o `.filter()` devolve um array, você pode chamar o `.map()` logo em seguida, sem precisar de variáveis intermediárias.

---

## Analogia: A Esteira com Filtro 🏭🚿

Imagine uma esteira de separação de frutas.
1.  **A Esteira:** O array original.
2.  **O Filtro (`filter`):** Uma grade que só deixa passar as frutas maduras.
3.  **A Transformação (`map`):** Um braço mecânico que descasca apenas as frutas que passaram pelo filtro.
4.  **O Resultado:** Você recebe uma cesta apenas com frutas maduras e descascadas.

Tudo acontece em um fluxo contínuo (Pipeline).

---

## Antes vs Depois

### Antes (Separado):
```javascript
const ativos = users.filter(u => u.ativo);
const nomes = ativos.map(u => u.nome);
```

### Depois (Chaining):
```javascript
const nomesAtivos = users
  .filter(u => u.ativo)
  .map(u => u.nome);
```

---

## Por que usar?

1.  **Legibilidade:** O código conta uma história: "Filtre os ativos E DEPOIS pegue os nomes".
2.  **Código Limpo:** Menos variáveis inúteis no seu arquivo.
3.  **Padrão de Mercado:** É assim que desenvolvedores sêniores escrevem.

---

## Próximo passo

Abra o arquivo **03-como-usar.md** para ver a melhor forma de organizar esse código.
