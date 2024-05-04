import { useEffect, useState } from "react";
import { ITask } from "../../types/task";
import ContainerTask from "../containers/ContainerTaskNew";
import * as S from "./styles";

const tasks: ITask[] = [
  { category: "task", id: 1, name: "Tarefa 1", checked: true },
  { category: "habit", id: 2, name: "Tarefa 2", checked: false },
  { category: "project", id: 3, name: "Tarefa 3", checked: true },
  { category: "task", id: 4, name: "Tarefa 4", checked: false },
  { category: "habit", id: 5, name: "Tarefa 5", checked: false },
  { category: "project", id: 6, name: "Tarefa 6", checked: true },
  { category: "task", id: 7, name: "Tarefa 7", checked: false },
  { category: "habit", id: 8, name: "Tarefa 8", checked: false },
  { category: "project", id: 9, name: "Tarefa 9", checked: true },
  { category: "task", id: 10, name: "Tarefa 10", checked: false },
  { category: "habit", id: 11, name: "Tarefa 11", checked: true },
  { category: "project", id: 12, name: "Tarefa 12", checked: false },
];

export default function Task() {
  const [isTask, setIsTask] = useState<ITask[]>(tasks);
  const [selected, setSelected] = useState("all tasks");

  useEffect(() => {
    if (selected === "all tasks") {
      const tasksToDo = tasks.filter((task) => task.checked === false);
      setIsTask(tasksToDo);
      return;
    }

    if (selected === "completed") {
      const completedTasks = tasks.filter((task) => task.checked === true);
      setIsTask(completedTasks);
      return;
    }

    const tasksForCategory = tasks.filter((task) => task.category === selected && task.checked === false);
    setIsTask(tasksForCategory);
  }, [selected]);

  return (
    <S.Conteiner>
      <S.Select onChange={(e) => setSelected(e.target.value)} value={selected}>
        <option value="all tasks">Todas as atividades</option>
        <option value="project">Projetos</option>
        <option value="habit">Hábitos</option>
        <option value="task">Tarefas</option>
        <option value="completed">Concluidas</option>
      </S.Select>
      <ContainerTask tasks={isTask} />
    </S.Conteiner>
  );
}
