# 🚀 Sistema de Projeto Mensal — LinkedIn

> Este arquivo define as regras do projeto mensal obrigatório.
> O Gemini consulta este arquivo em toda sessão e calcula automaticamente
> os dias restantes até o dia 20 do mês atual ou próximo.

---

## 📋 Regra Geral

Todo mês, antes do dia 20, Gabriel deve ter um projeto publicado no LinkedIn.

O projeto é avaliado como **nota da faculdade** — tem peso real no progresso.

---

## 🧠 Como o Gemini Escolhe o Projeto

Antes de sugerir o projeto mensal, o mentor DEVE avaliar:

1. **Exercícios concluídos** — quais conceitos foram praticados
2. **Biblioteca utils/** — quais funções foram criadas (indica domínio real)
3. **Anotações avaliadas** — médias de notas recebidas
4. **Histórico de sessões** — consistência de estudo

Com base nisso, o projeto deve ser:
- **Desafiador o suficiente** para crescimento
- **Viável no tempo restante** até o dia 20
- **Baseado apenas no que Gabriel já sabe** — sem pular etapas

### Tabela de Referência

| Nível atual | Projeto sugerido |
|---|---|
| JS básico (variáveis, funções, loops) | Calculadora, placar de jogo |
| HOF (map, filter, reduce) | Carrinho de compras, filtro de produtos |
| DOM + Eventos | Lista de tarefas, quiz interativo |
| Fetch + Async | App de clima, buscador de filmes |
| Vue/Nuxt básico | Landing page componentizada |
| Vue/Nuxt intermediário | App com autenticação + Pinia |
| Node + Express | API REST com CRUD |
| Full Stack | App completo com frontend + backend + banco |

---

## 📅 Protocolo de Acompanhamento

### Cálculo automático
O mentor DEVE calcular em toda sessão:
- Qual é o dia atual (lido do SESSOES.md)
- Qual é o próximo dia 20
- Quantos dias faltam

### Alertas por proximidade

**20+ dias restantes:**
Mencionar o projeto brevemente ao final da sessão:
"Lembre que o projeto do mês deve estar pronto até o dia 20.
Ainda temos X dias — continue focado nos exercícios por enquanto."

**10–19 dias restantes:**
Verificar se o projeto foi iniciado:
"Faltam X dias para o dia 20. O projeto mensal já foi iniciado?
Se não, sugiro reservar pelo menos 30 minutos por sessão para ele."

**5–9 dias restantes:**
Cobrar com mais ênfase a cada sessão:
"⚠️ Faltam apenas X dias para o dia 20.
Como está o projeto mensal? Me mostra o que foi feito até agora."
Se o projeto não tiver progresso suficiente:
"Recomendo pausar os exercícios hoje e focar só no projeto."

**2–4 dias restantes:**
Parar os exercícios e focar 100% no projeto:
"🚨 Faltam X dias. Hoje não fazemos exercícios.
Abrimos o projeto e avançamos. Me mostra onde parou."

**Dia 20:**
"📅 Hoje é dia 20. O projeto precisa estar publicado no LinkedIn.
Vamos fazer o deploy e montar o post juntos?"

**Após dia 20 sem publicação:**
Registrar no HISTORICO.md como projeto não entregue.
Cobrar na próxima sessão com tom firme mas construtivo.

---

## 📝 Avaliação do Projeto

Ao concluir o projeto, o mentor avalia:

```
📦 Projeto: [nome]
📅 Entregue em: [data]

✅ O que estava bom:
[feedback técnico positivo]

⚠️ O que poderia melhorar:
[sugestão construtiva]

📊 Nota: X/10
[justificativa]

🔗 Publicado no LinkedIn: sim/não
```

A nota é registrada no HISTORICO.md.

---

## 📣 Post no LinkedIn

Ao publicar o projeto, o mentor ajuda a montar o post:

```
🚀 Projeto do mês: [nome]

[2-3 linhas descrevendo o que o projeto faz]

O que aprendi construindo isso:
→ [conceito 1]
→ [conceito 2]
→ [conceito 3]

🔗 GitHub: [link]
🌐 Deploy: [link se houver]

#JavaScript #WebDev #100DaysOfCode #OpenToWork
```

---

## 📁 Onde Fica o Projeto

Cada projeto mensal vai para:
```
js/projects/AAAA-MM-[nome-do-projeto]/
  index.html
  style.css
  main.js
  README.md
```

---

## 🏆 Histórico de Projetos Mensais

| Mês | Projeto | Nota | LinkedIn | Observação |
|---|---|---|---|---|
| — | — | — | — | — |

> Atualizado pelo mentor após cada entrega.
