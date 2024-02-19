import { useContext } from "react";
import { TasksContext } from "../../contexts/TasksContext";
import { Itasks } from "../../pages/DashboardPage";
import { IAddTaskForm } from "../FormTask";
import * as S from "./styles";
export interface AddTaskProps {
  data: IAddTaskForm;
  tasks: Itasks[];
}

export interface EditTaskProps {
  data: IAddTaskForm;
  id: number;
}

export interface DeleteTaskProps {
  id: number;
}

interface IConfirmAction {
  children: string;
  setIsDeleteTaskOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsTaskOpen: React.Dispatch<React.SetStateAction<boolean>>;
  crudTask:
    | ((props: AddTaskProps) => Promise<Itasks>)
    | ((props: EditTaskProps) => Promise<Itasks[]>)
    | ((props: DeleteTaskProps) => Promise<Itasks>);
  dataTask: IAddTaskForm;
}

export default function ConfirmAction({
  children,
  setIsDeleteTaskOpen,
  crudTask,
  dataTask,
  setIsTaskOpen,
}: IConfirmAction) {
  const { setTasks, tasks, tempTask, taskId, setTempTask } = useContext(TasksContext);

  const handleClick = async (operation: "yes" | "not") => {
    const id = tempTask?.id || taskId || 0;
    console.log("id", tempTask?.id);

    const props = { data: dataTask, tasks, id };
    switch (operation) {
      case "yes":
        const task = await crudTask({ ...props });

        task && task instanceof Array ? setTasks(task) : setTasks((prevstate) => [...prevstate, task]);

        setIsTaskOpen(false);
        setTempTask(null);
        break;

      case "not":
        break;
    }
    setIsDeleteTaskOpen(false);
  };

  return (
    <S.Wrapper>
      <S.Container>
        <S.Paragraph>{children}</S.Paragraph>
        <S.ContainerButton>
          <S.ButtonYes onClick={() => handleClick("yes")}>Sim</S.ButtonYes>
          <S.ButtonNot onClick={() => handleClick("not")}>Não</S.ButtonNot>
        </S.ContainerButton>
      </S.Container>
    </S.Wrapper>
  );
}
