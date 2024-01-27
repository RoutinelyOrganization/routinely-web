import { useContext } from "react";
import { CalendarContext } from "../../contexts/CalendarContext";
import { TasksContext } from "../../contexts/TasksContext";
import { UseCRUD } from "../../hooks/useCrud";
import { getAllTasks } from "../../utils/functions/getAllTasks";
import * as S from "./styles";
interface IConfirmAction {
  children: string;
  setIsDeleteTaskOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ConfirmAction({ children, setIsDeleteTaskOpen }: IConfirmAction) {
  const { taskId, setTasks } = useContext(TasksContext);
  const { handleDeleteTask } = UseCRUD();
  const { month, year } = useContext(CalendarContext);
  const token = window.localStorage.getItem("token");

  const handleClick = async (operation: "yes" | "not") => {
    switch (operation) {
      case "yes":
        await handleDeleteTask(taskId);
        const data = await getAllTasks(token!, month, year);
        data && setTasks(data);
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
