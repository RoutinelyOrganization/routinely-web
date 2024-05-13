import { Task } from "../../../types/task";
import CardTask from "../../CardTask";
import * as S from "./styles";

interface IContainerTask {
  tasks: Task[];
}

export default function ContainerTask({ tasks }: IContainerTask) {
  return (
    <S.Container>
      {tasks && tasks.length
        ? tasks.map((task) => (
            <CardTask
              key={task.id}
              category={task.type}
              idTask={task.id}
              titleTask={task.name}
              checked={task.checked}
            />
          ))
        : null}
    </S.Container>
  );
}
