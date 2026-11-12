"use client";

import { useState } from "react";
import { tarefasIniciais } from "./dados";
import TarefaItem from "./TarefaItem";

export default function ListaDeTarefas() {
  const [tarefas, setTarefas] = useState(tarefasIniciais);

  const concluir = (id) => {
    setTarefas(
      tarefas.map((tarefa) => tarefa.id === id ? {...tarefa, concluida: !tarefa.concluida}
      :
      tarefa)
    )
  }
  return (
    <ul className="lista">
      {tarefas.map((tarefa) => (
        <TarefaItem 
        key={tarefa.id} 
        tarefa={tarefa}  
        aoConcluir={concluir}/>
      ))}
    </ul>
  );
}