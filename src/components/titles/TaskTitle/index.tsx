import * as S from "./styles";

interface ITaskTitleProps {
  title: string;
}

export default function TaskTitle({ title }: ITaskTitleProps) {
  return <S.Title>{title}</S.Title>;
}
