import * as S from "./styles";

interface IPopUpAddTaskProps {
  children: React.ReactNode;
}

export default function PopUpTesting({ children }: IPopUpAddTaskProps) {
  return <S.Modal>{children}</S.Modal>;
}
