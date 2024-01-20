import ContainerTask from "../containers/ContainerTask";
import * as S from "./styles";

interface ITasksProps {
  setIsEditTaskOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsAddTaskOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsDeleteTaskOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Tasks({ setIsEditTaskOpen, setIsAddTaskOpen, setIsDeleteTaskOpen }: ITasksProps) {
  const handleAddTask = () => {
    setIsAddTaskOpen(true);
  };
  ("");
  return (
    <S.Container>
      <ContainerTask setIsEditTaskOpen={setIsEditTaskOpen} setIsDeleteTaskOpen={setIsDeleteTaskOpen} />
      <S.Button onClick={handleAddTask}>Adicionar nova tarefa</S.Button>
    </S.Container>
  );
}
