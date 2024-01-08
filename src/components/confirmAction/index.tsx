import { TasksContext } from "../../contexts/TasksContext";
import { useContext } from "react";
import * as S from "./styles";
import { UseCRUD } from "../../hooks/useCrud";
import { CalendarContext } from "../../contexts/CalendarContext";
import { getAllTasks } from "../../utils/functions/getAllTasks";
interface IConfirmAction {
  children: string;
  setIsDeleteTaskOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ConfirmAction({ children, setIsDeleteTaskOpen }: IConfirmAction) {
  const { taskId, setTasks } = useContext(TasksContext);
  const { handleDeleteTask } = UseCRUD();
  const { month, year } = useContext(CalendarContext);

  const handleClick = async (operation: "cancel" | "not" | "yes") => {
    switch (operation) {
      case "not":
        break;

      case "yes":
        await handleDeleteTask(taskId);
        const data = await getAllTasks(month, year);
        setTasks(data);
        break;

      case "cancel":
        break;
    }
    setIsDeleteTaskOpen(false);
  };

  return (
    <S.Container>
      <S.Paragraph>{children}</S.Paragraph>
      <S.ContainerButton>
        <S.ButtonCancel onClick={() => handleClick("cancel")}>Cancelar</S.ButtonCancel>
        <S.ButtonNot onClick={() => handleClick("not")}>Não</S.ButtonNot>
        <S.ButtonYes onClick={() => handleClick("yes")}>Sim</S.ButtonYes>
      </S.ContainerButton>
    </S.Container>
  );
}
