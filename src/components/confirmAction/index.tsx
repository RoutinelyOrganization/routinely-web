import { useContext } from "react";
import { TasksContext } from "../../contexts/TasksContext";
import { Itasks } from "../../pages/DashboardPage";
import { IAddTaskForm } from "../FormTask";
import ButtonDanger from "../buttons/ButtonDanger";
import ButtonPrincipal from "../buttons/ButtonPrincipal";
import * as S from "./styles";

export interface AddTaskProps {
  data: IAddTaskForm;
}

export interface EditTaskProps extends AddTaskProps {
  id: number;
  tasks: Itasks[];
}

export interface DeleteTaskProps {
  id: number;
  tasks: Itasks[];
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

    const props = { data: dataTask, tasks, id };
    switch (operation) {
      case "yes":
        console.log("test");

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
    <>
      <p>{children}</p>
      <S.ContainerButton>
        <ButtonPrincipal onClick={() => handleClick("yes")}>Sim</ButtonPrincipal>
        <ButtonDanger onClick={() => handleClick("not")}>Não</ButtonDanger>
      </S.ContainerButton>
    </>
  );
}
