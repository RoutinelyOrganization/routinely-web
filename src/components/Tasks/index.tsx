import ContainerTask from "../containers/ContainerTask";
import * as S from "./styles";

interface ITasksProps {
  setIsTaskOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsDeleteTaskOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setCrudTasksOptions: React.Dispatch<
    React.SetStateAction<"addTask" | "editTask" | "deleteTask" | "duplicateTask" | null>
  >;
}

export default function Tasks({ setIsDeleteTaskOpen, setIsTaskOpen, setCrudTasksOptions }: ITasksProps) {
  return (
    <S.Container>
      <ContainerTask
        setIsTaskOpen={setIsTaskOpen}
        setIsDeleteTaskOpen={setIsDeleteTaskOpen}
        setCrudTasksOptions={setCrudTasksOptions}
      />
      <S.Button onClick={() => setIsTaskOpen(true)}>Adicionar nova tarefa</S.Button>
    </S.Container>
  );
}
