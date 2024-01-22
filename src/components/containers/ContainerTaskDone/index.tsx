import CustonCheckedBox from "../../CustonCheckedBox";
import PriorityFlag from "../../PriorityFlag";
import * as S from "./styles";

export default function ContainerTaskDone() {
  return (
    <S.Wrapper>
      <S.Container>
        <CustonCheckedBox id={1} checked={true} />
        <S.ContainerText>afawdawdawdawadawadwdawdawdaw</S.ContainerText>
        <S.ContainerCategory>pessoal</S.ContainerCategory>
        <S.ContainerSubCategory>contas</S.ContainerSubCategory>
        <S.ContainerPriority>
          <PriorityFlag priority="urgent" />
        </S.ContainerPriority>
      </S.Container>
    </S.Wrapper>
  );
}
