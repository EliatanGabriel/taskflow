# 📋 TaskFlow

<p align="center">
  <strong>Organize suas tarefas e seus estudos de forma simples, rápida e sem distrações.</strong>
</p>

<p align="center">
  Aplicação desenvolvida com <strong>HTML, CSS e JavaScript puro</strong>, focada em boas práticas de desenvolvimento Front-end, arquitetura modular e testes automatizados.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
  <img src="https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white">
  <img src="https://img.shields.io/badge/Status-Em%20Desenvolvimento-orange?style=for-the-badge">
  <img src="https://img.shields.io/badge/Licença-MIT-blue?style=for-the-badge">
</p>

---

# 📖 Sobre o projeto

O **TaskFlow** é uma aplicação web para gerenciamento de tarefas e organização de estudos, desenvolvida utilizando apenas tecnologias nativas da web.

O projeto tem como objetivo praticar conceitos fundamentais do desenvolvimento Front-end, como manipulação do DOM, modularização em JavaScript, persistência de dados, responsividade e testes automatizados.

Todo o processamento acontece no navegador, sem necessidade de servidor ou banco de dados.

---

# 🚀 Funcionalidades

## ✅ Implementadas

- Interface responsiva
- Design moderno utilizando Glassmorphism
- Estrutura HTML semântica
- Organização modular do JavaScript
- Prevenção de recarregamento do formulário
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
- Animações

---

# 🎯 Objetivos do projeto

Este projeto foi desenvolvido para aprimorar conhecimentos em:

- HTML5 semântico
- CSS3 moderno
- JavaScript ES6+
- Manipulação do DOM
- Organização de código
- Arquitetura modular
- Persistência de dados
- Testes End-to-End com Cypress
- Versionamento com Git e GitHub

---

# 🛠 Tecnologias

- HTML5
- CSS3
- JavaScript (ES6+)
- LocalStorage API
- Playwright

---

# 📂 Estrutura do projeto

```text
taskflow/
├── index.html
├── README.md
├── LICENSE
├── .gitignore
├── package.json
├── playwright.config.js
│
├── assets/
│   ├── icons/
│   └── img/
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
├── tests/
│   └── taskflow.spec.js
│
└── docs/
```

---

# 🏗 Arquitetura

| Arquivo | Responsabilidade |
|----------|------------------|
| app.js | Inicialização da aplicação |
| taskManager.js | Regras de negócio e gerenciamento das tarefas |
| storage.js | Persistência utilizando LocalStorage |
| ui.js | Manipulação da interface e do DOM |

---

# ⚙️ Como executar

Clone o repositório:

```bash
git clone https://github.com/EliatanGabriel/taskflow.git
```

Entre na pasta do projeto:

```bash
cd taskflow
```

Abra o arquivo **index.html** no navegador.

Ou utilize a extensão **Live Server** no Visual Studio Code.

---

# 🧪 Executando os testes

Instale as dependências:

```bash
npm install
```

Execute os testes:

```bash
npx playwright test
```

---

# 📸 Demonstração

Em breve serão adicionados:

- Screenshots
- GIF demonstrando a aplicação
- Deploy online utilizando Vercel

---

# 🗺 Roadmap

- ✅ Estrutura inicial
- ✅ Interface responsiva
- ✅ Arquitetura modular
- ✅ Testes com Playwright
- 🚧 CRUD completo
- 🚧 LocalStorage
- 🚧 Pesquisa
- 🚧 Filtros
- 🚧 Categorias
- 🚧 Prioridades
- 🚧 Datas
- 🚧 Dark Mode
- 🚧 Drag & Drop
- 🚧 Deploy

---

# 🤝 Contribuindo

Contribuições são bem-vindas.

1. Faça um Fork do projeto.
2. Crie uma branch para sua funcionalidade.

```bash
git checkout -b feature/minha-feature
```

3. Faça seus commits.

```bash
git commit -m "feat: adiciona nova funcionalidade"
```

4. Envie para seu repositório.

```bash
git push origin feature/minha-feature
```

5. Abra um Pull Request.

---

# 📄 Licença

Este projeto está licenciado sob a licença **MIT**.

---

# 👨‍💻 Autor

**Eliatan Gabriel**

💼 Desenvolvedor Front-end em formação

- GitHub: https://github.com/EliatanGabriel
- Portfólio: https://portfolio-eliatan.vercel.app/

---

⭐ Se este projeto foi útil para você, considere deixar uma estrela no repositório.
