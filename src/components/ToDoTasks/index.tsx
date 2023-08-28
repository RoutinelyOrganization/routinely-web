import ContainerTaskComponent from "../ContainerTask";
import { ButtonAddTaskStyle, ToDoTasksStyle } from "./ToDoTasksStyle";

interface ITodoTasksProps {
  setIsEditTaskOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ToDoTasksComponent({ setIsEditTaskOpen }: ITodoTasksProps) {
  return (
    <ToDoTasksStyle>
      <ContainerTaskComponent setIsEditTaskOpen={setIsEditTaskOpen} />
      <ContainerTaskComponent setIsEditTaskOpen={setIsEditTaskOpen} />
      <ContainerTaskComponent setIsEditTaskOpen={setIsEditTaskOpen} />
      <ContainerTaskComponent setIsEditTaskOpen={setIsEditTaskOpen} />
      <ContainerTaskComponent setIsEditTaskOpen={setIsEditTaskOpen} />
      <ButtonAddTaskStyle>Adicionar nova tarefa</ButtonAddTaskStyle>
      <hr />
    </ToDoTasksStyle>
  );
}
