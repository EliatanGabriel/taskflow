# TaskFlow

Organizador de tarefas simples, rápido e sem fricção — construído com HTML, CSS e JavaScript puro.

## 🚀 Descrição

TaskFlow é uma aplicação de lista de tarefas que roda 100% no navegador, sem necessidade de cadastro ou servidor. Ideal para quem quer organizar o dia a dia de forma leve e imediata.

## 🛠 Tecnologias

- HTML5
- CSS3
- JavaScript (ES6+)
- LocalStorage API

## ✅ Funcionalidades

- Adicionar tarefas
- Marcar como concluída
- Remover tarefas
- Persistência local dos dados
- Layout responsivo

## 📁 Estrutura do Projeto

```
taskflow/
├── index.html
├── README.md
├── LICENSE
├── .gitignore
├── /assets
│   ├── /icons
│   └── /img
├── /css
│   ├── reset.css
│   ├── variables.css
│   └── style.css
├── /js
│   ├── app.js         → ponto de entrada
│   ├── storage.js     → funções de localStorage
│   ├── taskManager.js → lógica de CRUD das tarefas
│   └── ui.js          → funções de renderização/DOM
└── /docs
    └── documentação, prints, roadmap
```

## ▶️ Como executar

1. Clone o repositório:
   ```bash
   git clone <url>
   ```
2. Abra o arquivo `index.html` no navegador.
   - Ou use a extensão **Live Server** no VS Code.

## 🔮 Melhorias Futuras

- Edição de tarefas
- Filtros (pendentes/concluídas)
- Categorias e prioridades
- Datas de vencimento
- Modo escuro
- Versão com backend e autenticação

## 📄 Licença

Este projeto está sob a licença MIT.
