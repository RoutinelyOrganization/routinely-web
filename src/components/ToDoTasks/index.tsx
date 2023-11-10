import ContainerTask from "../ContainerTask";
import * as S from "./styles";

interface ITodoTasksProps {
  setIsEditTaskOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsAddTaskOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ToDoTasksComponent({ setIsEditTaskOpen, setIsAddTaskOpen }: ITodoTasksProps) {
  const handleAddTask = () => {
    setIsAddTaskOpen(true);
  };
  return (
    <S.Container>
      <ContainerTask setIsEditTaskOpen={setIsEditTaskOpen} />
      <ContainerTask setIsEditTaskOpen={setIsEditTaskOpen} />
      <ContainerTask setIsEditTaskOpen={setIsEditTaskOpen} />
      <ContainerTask setIsEditTaskOpen={setIsEditTaskOpen} />
      <ContainerTask setIsEditTaskOpen={setIsEditTaskOpen} />
      <S.Button onClick={handleAddTask}>Adicionar nova tarefa</S.Button>
      <hr />
    </S.Container>
  );
}
