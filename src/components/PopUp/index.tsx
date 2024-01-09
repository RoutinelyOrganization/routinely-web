import React from "react";
import Header from "../Header";
import ButtonFooter from "../buttons/ButtonFooter";
import * as S from "./styles";

interface IPopCustomProps {
  children: React.ReactNode;
  setIsTaskOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function PopUpCustom({ children, setIsTaskOpen }: IPopCustomProps) {
  return (
    <S.Modal>
      <Header setIsTaskOpen={setIsTaskOpen} />
      {children}
      <ButtonFooter />
    </S.Modal>
  );
}
