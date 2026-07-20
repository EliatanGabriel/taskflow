# TaskFlow

Organizador de tarefas simples, rápido e sem fricção — construído com HTML, CSS e JavaScript puro.

## Descrição

TaskFlow é uma aplicação de lista de tarefas que roda 100% no navegador, sem necessidade de cadastro ou servidor. Ideal para quem quer organizar o dia a dia de forma leve e imediata.

## Tecnologias

- HTML5
- CSS3 (Glassmorphism, Custom Properties, Flexbox)
- JavaScript (ES6+)
- LocalStorage API
- Playwright (testes E2E)

## Status do Projeto

O projeto está em fase inicial de desenvolvimento. A camada visual (HTML/CSS) está concluída, incluindo um design glassmorphism responsivo com imagem de fundo. A lógica JavaScript (CRUD de tarefas, persistência) está em implementação.

## Funcionalidades

### Implementadas
- Layout responsivo
- Design glassmorphism com backdrop-filter
- Background com imagem de fundo
- Estrutura HTML semântica
- Prevenção de recarregamento da página no formulário

### Em desenvolvimento
- Adicionar tarefas
- Marcar como concluída
- Remover tarefas
- Edição de tarefas
- Persistência com LocalStorage
- Filtros (pendentes/concluídas)
- Categorias e prioridades
- Datas de vencimento
- Modo escuro

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
│   ├── app.js              → entrada da aplicação
│   ├── storage.js          → camada de persistência
│   ├── taskManager.js      → lógica de CRUD
│   └── ui.js               → manipulação do DOM
├── tests/
│   └── taskflow.spec.js
└── docs/                   → documentação do projeto
```

## Como executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/EliatanGabriel/taskflow.git
   ```
2. Abra o arquivo `index.html` no navegador.
   - Ou use a extensão **Live Server** no VS Code.

## Testes

```bash
npm install
npx playwright test
```

## Licença

Este projeto está sob a licença MIT.
