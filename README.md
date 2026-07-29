# 📋 TaskFlow

<p align="center">
  <strong>Organize suas tarefas e seus estudos de forma simples, rápida e sem distrações.</strong>
</p>

<p align="center">
  Aplicação desenvolvida com <strong>HTML, CSS e JavaScript puro</strong>, focada em boas práticas de desenvolvimento Front-end, arquitetura modular e testes automatizados.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=coldfusion&logoColor=white">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
  <img src="https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white">
  <img src="https://img.shields.io/badge/Status-Em%20Desenvolvimento-orange?style=for-the-badge">
  <img src="https://img.shields.io/badge/Licença-MIT-blue?style=for-the-badge">
</p>

---

# 📖 Sobre o projeto

O **TaskFlow** é uma aplicação web para gerenciamento de tarefas e organização de estudos, desenvolvida utilizando tecnologias nativas da web.

O objetivo do projeto é auxiliar usuários no controle das suas atividades diárias através de uma interface simples, intuitiva e eficiente.

A aplicação funciona totalmente no navegador, sem necessidade de cadastro, servidor ou banco de dados externo.

---

# 🚀 Funcionalidades

## ✅ Implementadas

- Interface responsiva
- Design moderno utilizando Glassmorphism
- Estrutura HTML semântica
- Organização modular do JavaScript
- Separação entre lógica, interface e armazenamento
- Estrutura preparada para testes automatizados

## 🚧 Em desenvolvimento

- Criar tarefas
- Marcar tarefas como concluídas
- Remover tarefas
- Editar tarefas
- Persistência utilizando LocalStorage
- Pesquisa de tarefas
- Filtros por status
- Categorias
- Prioridades
- Datas de vencimento
- Modo escuro
- Drag & Drop
- Animações e melhorias visuais

---

# 🎯 Objetivos do projeto

Este projeto foi desenvolvido para praticar e aprimorar conhecimentos em:

- HTML5 semântico
- CSS3 moderno
- JavaScript ES6+
- Manipulação do DOM
- Organização e modularização de código
- Persistência de dados no navegador
- Testes End-to-End com Cypress
- Versionamento utilizando Git e GitHub

---

# 🛠 Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- LocalStorage API
- Cypress

---

# 📂 Estrutura do projeto

```text
taskflow/
├── index.html
├── README.md
├── LICENSE
├── .gitignore
├── package.json
│
├── assets/
│   ├── icons/
│   │   └── list-todo.svg
│   └── img/
│       └── fundo-bg.jpg
│
├── css/
│   ├── geral.css
│   ├── reset.css
│   ├── variables.css
│   └── style.css
│
├── js/
│   ├── app.js
│   ├── storage.js
│   ├── taskManager.js
│   └── ui.js
│
├── cypress/
│   ├── e2e/
│   │   └── taskflow.cy.js
│   ├── fixtures/
│   └── support/
│
└── docs/
