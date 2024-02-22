import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import ButtonFooter from "../buttons/ButtonFooter";
import * as S from "./styles";

interface IPopCustomProps {
  children: React.ReactNode;
  setIsTaskOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function PopUpCustom({ children, setIsTaskOpen }: IPopCustomProps) {
  const navigation = useNavigate();

  const handleBack = () => {
    setIsTaskOpen(false);
    navigation("/");
  };

  return (
    <S.Modal>
      <Header setIsTaskOpen={setIsTaskOpen} />
      {children}
      <ButtonFooter onClick={handleBack} />
    </S.Modal>
  );
}
