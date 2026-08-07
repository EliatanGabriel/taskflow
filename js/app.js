import {
  adicionarNovaTarefa,
  deletarItem,
  concluirTarefa,
  obterTarefas,
} from './taskManager.js'

import { mostrarTarefas } from './ui.js'

const form = document.querySelector('#Operionform')

const input = document.querySelector('.taskform')

form.addEventListener('submit', (evento) => {
  evento.preventDefault()

  adicionarNovaTarefa(input.value)

  input.value = ''

  mostrarTarefas(obterTarefas())
})

document.addEventListener('click', (evento) => {
  if (evento.target.classList.contains('btn-concluir')) {
    const id = evento.target.dataset.id

    concluirTarefa(id)

    mostrarTarefas(obterTarefas())
  }

  if (evento.target.classList.contains('btn-apagar')) {
    const id = evento.target.dataset.id

    deletarItem(id)

    mostrarTarefas(obterTarefas())
  }
})
