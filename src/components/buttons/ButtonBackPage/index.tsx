import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TasksContext } from "../../../contexts/TasksContext";
import * as S from "./styles";

interface IButtonBackPage {
  setIsTaskOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ButtonBackPage({ setIsTaskOpen }: IButtonBackPage) {
  const { setTempTask } = useContext(TasksContext);
  const navigation = useNavigate();
  const handleBack = () => {
    setIsTaskOpen ? setIsTaskOpen(false) : navigation(-1);
    setTempTask(null);
  };

  return (
    <S.ButtonBackPage onClick={handleBack}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z" fill="#F6F7F8" />
      </svg>
      <p className="mobile">Voltar</p>
    </S.ButtonBackPage>
  );
}
