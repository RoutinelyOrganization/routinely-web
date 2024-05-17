import { useEffect, useState } from "react";
import { type Task } from "../../types/task";
import ContainerTask from "../containers/ContainerTaskNew";
import * as S from "./styles";

interface ITask {
  tasks: Task[];
}

export default function Task({ tasks }: ITask) {
  const [isTask, setIsTask] = useState<Task[]>(tasks);
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

    const tasksForCategory = tasks.filter((task) => task.type === selected && task.checked === false);
    setIsTask(tasksForCategory);
  }, [selected, tasks]);

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
