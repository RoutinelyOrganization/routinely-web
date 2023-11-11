import * as S from "./styles";

interface ISubTitleAuth {
  children: string;
}

export default function SubTitleAuth({ children }: ISubTitleAuth) {
  return <S.Paragraph>{children}</S.Paragraph>;
}
