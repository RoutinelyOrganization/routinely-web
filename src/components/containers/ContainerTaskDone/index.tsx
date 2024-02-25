import CustonCheckedBox from "../../CustonCheckedBox";
import PriorityFlag from "../../PriorityFlag";
import * as S from "./styles";

interface ITaskDoneProps {
  id: number;
  title: string;
  category: string;
  subCategory: string;
  priority: string;
}

export default function ContainerTaskDone({ id, title, category, subCategory, priority }: ITaskDoneProps) {
  return (
    <S.Wrapper>
      <S.Container>
        <CustonCheckedBox id={id} checked={true} />
        <S.ContainerText>{title}</S.ContainerText>
        <S.ContainerCategory>{category}</S.ContainerCategory>
        <S.ContainerSubCategory>{subCategory}</S.ContainerSubCategory>
        <S.ContainerPriority>
          <PriorityFlag priority={priority} />
        </S.ContainerPriority>
      </S.Container>
    </S.Wrapper>
  );
}
