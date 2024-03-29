import { useContext } from "react";
import { TasksContext } from "../../../contexts/TasksContext";
import * as S from "./styles";

interface IPopUpCloseButton {
  setIsTaskOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function PopUpCloseButton({ setIsTaskOpen }: IPopUpCloseButton) {
  const { setTempTask } = useContext(TasksContext);

  const handleCloseButton = () => {
    setIsTaskOpen(false);
    setTempTask(null);
  };

  return (
    <S.Button onClick={handleCloseButton}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="icone/fechar">
          <mask id="mask0_565_5223" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
            <rect id="Bounding box" width="24" height="24" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_565_5223)">
            <path
              id="close"
              d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z"
              fill="#5C59BB"
            />
          </g>
        </g>
      </svg>
    </S.Button>
  );
}
