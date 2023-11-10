import * as S from "./styles";

interface IPopUpProps {
  children: React.ReactNode;
}
export default function PopUp({ children }: IPopUpProps) {
  return <S.Container>{children}</S.Container>;
}
