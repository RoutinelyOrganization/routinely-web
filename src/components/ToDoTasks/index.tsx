import ContainerTask from "../containers/ContainerTask";
import * as S from "./styles";

interface ITodoTasksProps {
  setIsEditTaskOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsAddTaskOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsDeleteTaskOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ToDoTasks({ setIsEditTaskOpen, setIsAddTaskOpen, setIsDeleteTaskOpen }: ITodoTasksProps) {
  const handleAddTask = () => {
    setIsAddTaskOpen(true);
  };
  return (
    <S.Container>

      <ContainerTask setIsEditTaskOpen={setIsEditTaskOpen} />      

      <S.Button onClick={handleAddTask}>Adicionar nova tarefa</S.Button>
      <hr />
    </S.Container>
  );
}
