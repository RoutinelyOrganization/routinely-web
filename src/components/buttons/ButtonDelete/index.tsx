import { useContext } from "react";
import { TasksContext } from "../../../contexts/TasksContext";
import * as S from "./styles";

interface IDeleteButtonProps {
  setIsDeleteTaskOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setCrudTasksOptions: React.Dispatch<
    React.SetStateAction<"addTask" | "editTask" | "deleteTask" | "duplicateTask" | null>
  >;
  id: number;
}

export default function ButtonDelete({ setIsDeleteTaskOpen, setCrudTasksOptions, id }: IDeleteButtonProps) {
  const { setTaskId } = useContext(TasksContext);

  const handleDeleteTaskOpen = () => {
    setCrudTasksOptions("deleteTask");
    setIsDeleteTaskOpen(true);
    setTaskId(id);
  };

  return (
    <S.Button onClick={handleDeleteTaskOpen}>
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.75 3.75V5H25V7.5H23.75V23.75C23.75 25.125 22.625 26.25 21.25 26.25H8.75C7.375 26.25 6.25 25.125 6.25 23.75V7.5H5V5H11.25V3.75H18.75ZM8.75 23.75H21.25V7.5H8.75V23.75ZM11.25 10H13.75V21.25H11.25V10ZM18.75 10H16.25V21.25H18.75V10Z"
          fill="#5C59BB"
        />
      </svg>
    </S.Button>
  );
}
