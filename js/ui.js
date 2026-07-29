const listaCompleta = document.querySelector('#task-adicionada')

export function mostrarTarefas(tarefas) {
  let novaLi = ''

  tarefas.forEach((item, posicao) => {
    novaLi += `
      <li class="${item.concluida ? 'concluida' : ''}">

        <button class="btn-concluir" data-id="${posicao}">
          ${item.concluida ? '✓ Feito' : 'Concluir'}
        </button>

        <span class="titulo-tarefa">
          ${item.tarefa}
        </span>

        <button class="btn-apagar" data-id="${posicao}">
          🗑 Apagar
        </button>

      </li>
    `
  })

  listaCompleta.innerHTML = novaLi
}
