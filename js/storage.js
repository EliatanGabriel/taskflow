export function salvarTarefas(tarefas) {
  localStorage.setItem('taskflow', JSON.stringify(tarefas))
}

export function carregarTarefas() {
  return JSON.parse(localStorage.getItem('taskflow')) || []
}
