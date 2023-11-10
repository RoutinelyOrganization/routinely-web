import ContainerTask from "../ContainerTask";
import { ButtonAddTaskStyle, ToDoTasksStyle } from "./ToDoTasksStyle";

interface ITodoTasksProps {
  setIsEditTaskOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsAddTaskOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ToDoTasksComponent({ setIsEditTaskOpen, setIsAddTaskOpen }: ITodoTasksProps) {
  const handleAddTask = () => {
    setIsAddTaskOpen(true);
  };
  return (
    <ToDoTasksStyle>
      <ContainerTask setIsEditTaskOpen={setIsEditTaskOpen} />
      <ContainerTask setIsEditTaskOpen={setIsEditTaskOpen} />
      <ContainerTask setIsEditTaskOpen={setIsEditTaskOpen} />
      <ContainerTask setIsEditTaskOpen={setIsEditTaskOpen} />
      <ContainerTask setIsEditTaskOpen={setIsEditTaskOpen} />
      <ButtonAddTaskStyle onClick={handleAddTask}>Adicionar nova tarefa</ButtonAddTaskStyle>
      <hr />
    </ToDoTasksStyle>
  );
}
