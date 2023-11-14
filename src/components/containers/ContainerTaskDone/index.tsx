import PriorityFlag from "../../PriorityFlag";
import * as S from "./styles";

export default function ContainerTaskDone() {
  return (
    <S.Wrapper>
      <S.Container>
        <S.ContainerCheckbox type="checkbox" />
        <S.ContainerText>afawdawdawdawadawadwdawdawdaw</S.ContainerText>
        <S.ContainerCategory>pessoal</S.ContainerCategory>
        <S.ContainerSubCategory>contas</S.ContainerSubCategory>
        <S.ContainerPriority>
          <PriorityFlag />
        </S.ContainerPriority>
      </S.Container>
    </S.Wrapper>
  );
}
