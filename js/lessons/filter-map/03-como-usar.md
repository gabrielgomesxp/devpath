# filter + map — Como Usar (Arquivo 03)

## A "Regra da Verticalidade" 📏

Embora você possa escrever tudo em uma linha, o ideal para a leitura é colocar cada método em uma nova linha, alinhado pelo ponto `.`.

```javascript
const resultado = array
  .filter(item => item.ok)
  .map(item => item.valor);
```

---

## A Ordem Importa! ⚠️

**Filtrar primeiro, transformar depois.**
Se você tem 1.000 itens e quer transformar apenas 10, é muito mais rápido filtrar os 10 primeiro e depois fazer o `map`. Se você fizer o `map` primeiro, vai transformar 1.000 itens para depois jogar 990 fora.

---

## Posso colocar mais coisas?

Sim! Você pode encadear quantos métodos quiser:
`array.filter().map().sort().reduce()`... o limite é a lógica do seu problema.

---

## Erros Comuns ⚠️

1.  **Quebrar o Pipeline:** Se um método no meio do caminho (como o `forEach`) não retornar um array, o próximo método vai dar erro.
2.  **Filtrar o que não existe:** Se você fez um `map` e mudou o nome das propriedades, o `filter` seguinte precisa usar os nomes novos, não os antigos.

---

## 🔍 Pesquise no Google

> Quando você terminar esta lição e quiser se aprofundar, pesquise:
> **"javascript array method chaining performance"**
> **"functional programming pipelines javascript"**

---

## Próximo passo

Abra o arquivo **04-exercicios-progressivos.js** para o desafio final!
