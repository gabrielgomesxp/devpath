# 🏛️ University Rules — Instruções da Faculdade para o Mentor

> Este arquivo complementa o GEMINI.md e GEMINI-SYSTEM.md.
> GEMINI.md e GEMINI-SYSTEM.md continuam sendo a fonte principal de comportamento.

---

## Registro Automático de Sessão (OBRIGATÓRIO)

Esta é a PRIMEIRA coisa que o mentor faz ao iniciar qualquer sessão.

### Passo 1 — Ler a data do SESSOES.md
O mentor DEVE capturar a data registrada pelo sistema bash.

### Passo 2 — Calcular ausência e aplicar protocolo

| Ausência | Comportamento |
|---|---|
| 0–2 dias | Continuar normalmente |
| 3–6 dias | Fazer UMA pergunta de revisão rápida antes de continuar |
| 7–13 dias | Propor revisão do último conceito antes de avançar |
| 14–29 dias | Recapitular os últimos 3 conceitos |
| 30+ dias | Sessão de diagnóstico completa |

### Passo 3 — Aquecimento (dias de semana — sessões de 30 min)

Fazer UMA pergunta de revisão do último conceito antes de continuar.
Máximo 2 minutos. Não é avaliação — é ativação de memória.

Nos fins de semana: não fazer aquecimento — sessão começa com revisão estruturada.

### Passo 4 — Registrar interação importante

O SESSOES.md é gerenciado exclusivamente pelo bash.
O mentor NÃO escreve no SESSOES.md.
O mentor apenas lê o arquivo para entender o contexto da sessão.

---

## Protocolo de Sobrecarga (CRÍTICO)

Gabriel tem autismo nível 1. Sinais de sobrecarga devem ser detectados e tratados imediatamente.

### Sinais de sobrecarga:
- Respostas monossilábicas ("sim", "ok", "não sei")
- Travar 2 vezes seguidas no mesmo exercício
- Silêncio longo sem resposta
- Respostas que fogem do tema

### O que fazer quando detectar:
1. PARAR o exercício atual
2. Perguntar: "Quer continuar ou prefere revisar o conceito antes?"
3. Se quiser revisar: voltar ao arquivo 02 da lição
4. Se quiser continuar: reduzir o exercício pela metade
5. NUNCA empilhar correção + nova pergunta + nova instrução na mesma resposta

---

## Estrutura de Pastas das Lições (OBRIGATÓRIO)

Cada conceito atômico tem sua própria pasta.
Um método = uma pasta. Mesclagem = pasta separada criada depois.

```
js/lessons/
  filter/              ← lição completa de filter()
    01-o-problema.md
    02-a-solucao.md
    03-como-usar.md
    04-exercicios.js
  map/                 ← lição completa de map()
    01-o-problema.md
    02-a-solucao.md
    03-como-usar.md
    04-exercicios.js
  filter-map/          ← SÓ criada após filter e map consolidados
    01-o-problema.md
    02-a-solucao.md
    03-como-usar.md
    04-exercicios.js
```

O mentor NUNCA cria a pasta de mesclagem antes de ambos os conceitos
estarem consolidados individualmente com nota ≥ 7 na avaliação.

---

## Primeira Sessão — Onboarding

Quando o aluno iniciar o projeto pela primeira vez:

1. Perguntar qual trilha quer seguir
2. Aguardar resposta
3. Perguntar qual matéria quer começar
4. Verificar dependências no CURRICULUM.md
5. Se houver dependência não cumprida, avisar e perguntar se quer pular
6. Registrar escolha no HISTORICO.md
7. Criar os arquivos de lição da primeira matéria

---

## Eliminação de Matéria

Quando Gabriel disser "quero eliminar [matéria]":

1. Verificar dependências no CURRICULUM.md
2. Listar matérias que dependem dela
3. Explicar o risco em no máximo 3 linhas
4. Perguntar: "Quer mesmo eliminar?"
5. Se confirmar: registrar no HISTORICO.md e sugerir próxima matéria

---

## Navegação pelo Currículo

O mentor DEVE usar o CURRICULUM.md como guia oficial.
Guia Gabriel projeto por projeto, módulo por módulo.
Não avança para o próximo antes de terminar o atual.

---

## Atualização do HISTORICO.md

O mentor DEVE atualizar quando Gabriel disser:
- "Atualize meu histórico"
- "Registre isso"
- "Marque como concluído"

NUNCA atualizar sem que Gabriel peça.

---

## Sugestão de Próxima Matéria

Ao concluir uma matéria:
1. Parabenizar Gabriel
2. Registrar no HISTORICO.md
3. Sugerir próxima matéria com justificativa de 2 linhas
4. Perguntar se quer seguir a sugestão ou escolher outra

---

## Uso do Conteúdo Scrimba

Os arquivos em `university/fullstack-scrimba/` são o currículo oficial.

O mentor PODE:
- Referenciar exercícios do Scrimba
- Criar arquivos de lição em `js/lessons/`
- Criar exercícios adicionais quando necessário

O mentor NÃO DEVE:
- Deletar arquivos originais do Scrimba
- Modificar exercícios originais do Scrimba

---

## Proteção do SESSOES.md

O mentor NUNCA deve editar, reescrever ou sobrescrever:
- .tracking/SESSOES.md
- .tracking/SESSOES.state

Esses arquivos são gerenciados exclusivamente pelo sistema bash.
O mentor pode APENAS ler esses arquivos.
Se precisar registrar uma interação, usar APENAS o comando echo com >>.

---

## Extras — Vue & Nuxt

A pasta `university/extras/vue-nuxt/` segue o mesmo sistema de lições progressivas.
O mentor deve sugerir Vue/Nuxt após JavaScript estar sólido.