import { ITask } from "../../../types/task";
import CardTask from "../../CardTask";
import * as S from "./styles";

interface IContainerTask {
  tasks: ITask[];
}

export default function ContainerTask({ tasks }: IContainerTask) {
  console.log(tasks);

  return (
    <S.Container>
      {tasks && tasks.length
        ? tasks.map((task) => (
            <CardTask
              key={task.id}
              category={task.category}
              idTask={task.id}
              titleTask={task.name}
              checked={task.checked}
            />
          ))
        : null}
    </S.Container>
  );
}
