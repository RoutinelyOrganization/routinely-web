import Start from "../../../assets/imagens/início.svg";
import * as S from "./styles";

interface IButtonFooterProps {
  children?: React.ReactNode;
  onClick?: () => void;
}
export default function ButtonFooter({ children, onClick }: IButtonFooterProps) {
  return <S.ButtonFooter onClick={onClick}>{children || <img src={Start} alt="" />}</S.ButtonFooter>;
}
