import React from "react";
import * as S from "./styles";

interface IPopUpAddTaskProps {
  children: React.ReactNode;
  setIsTaskOpen?: React.Dispatch<React.SetStateAction<boolean>>
}

export default function PopUpTesting({ children }: IPopUpAddTaskProps) {
  return <S.Modal>{children}</S.Modal>;
}
