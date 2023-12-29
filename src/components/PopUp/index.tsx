import React from "react";
import Header from "../Header";
import ButtonFooter from "../buttons/ButtonFooter";
import * as S from "./styles";

interface IPopUpAddTaskProps {
  children: React.ReactNode;
  setIsTaskOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function PopUpTesting({ children }: IPopUpAddTaskProps) {
  return (
    <S.Modal>
      <Header />
      {children}
      <ButtonFooter />
    </S.Modal>
  );
}
