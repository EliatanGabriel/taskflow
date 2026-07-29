let minhaListaDeTarefas = []

export function adicionarNovaTarefa(titulo) {
  if (titulo.trim() === '') {
    return
  }

  minhaListaDeTarefas.push({
    tarefa: titulo,
    concluida: false,
  })
}

export function deletarItem(posicao) {
  minhaListaDeTarefas.splice(posicao, 1)
}

export function concluirTarefa(posicao) {
  minhaListaDeTarefas[posicao].concluida =
    !minhaListaDeTarefas[posicao].concluida
}

export function obterTarefas() {
  return minhaListaDeTarefas
}
