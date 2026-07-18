# TaskFlow

Organizador de tarefas simples, rápido e sem fricção — construído com HTML, CSS e JavaScript puro.

## Descrição

TaskFlow é uma aplicação de lista de tarefas que roda 100% no navegador, sem necessidade de cadastro ou servidor. Ideal para quem quer organizar o dia a dia de forma leve e imediata.

## Tecnologias

- HTML5
- CSS3
- JavaScript (ES6+)
- LocalStorage API
- Playwright (testes E2E)

## Funcionalidades

- Layout responsivo
- Background com imagem de fundo

> Nota: funcionalidades de CRUD de tarefas estão em desenvolvimento.

## Estrutura do Projeto

```
taskflow/
├── index.html
├── README.md
├── LICENSE
├── .gitignore
├── package.json
├── playwright.config.js
├── assets/
│   ├── icons/
│   │   └── list-todo.svg
│   └── img/
│       └── fundo-bg.jpg
├── css/
│   ├── geral.css           → ponto de entrada (importa os demais)
│   ├── reset.css
│   ├── variables.css
│   └── style.css
├── js/
│   ├── app.js
│   ├── storage.js
│   ├── taskManager.js
│   └── ui.js
├── tests/
│   ├── example.spec.js
│   └── taskflow.spec.js
└── docs/
    ├── api.md
    ├── banco-de-dados.md
    ├── casos-de-uso.md
    ├── manual-do-usuario.md
    ├── requisitos.md
    └── regras-de-negocio.md
```

## Como executar

1. Clone o repositório:
   ```bash
   git clone <url>
   ```
2. Abra o arquivo `index.html` no navegador.
   - Ou use a extensão **Live Server** no VS Code.

## Testes

```bash
npx playwright test
```

## Melhorias Futuras

- Adicionar tarefas
- Marcar como concluída
- Remover tarefas
- Persistência local dos dados
- Edição de tarefas
- Filtros (pendentes/concluídas)
- Categorias e prioridades
- Datas de vencimento
- Modo escuro

## Licença

Este projeto está sob a licença MIT.
