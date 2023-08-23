import PriorityFlag from "../PriorityFlag";
import {
  ContainerTaskCategoryStyle,
  ContainerTaskCheckboxStyle,
  ContainerTaskPriorityStyle,
  ContainerTaskStyle,
  ContainerTaskSubCategoryStyle,
  ContainerTaskTextStyle,
  ContainerTaskWrapper,
} from "./ContainerTaskDoneStyle";

export default function ContainerTaskDoneComponent() {
  return (
    <ContainerTaskWrapper>
      <ContainerTaskStyle>
        <ContainerTaskCheckboxStyle type="checkbox" />
        <ContainerTaskTextStyle>afawdawdawdawadawadwdawdawdaw</ContainerTaskTextStyle>
        <ContainerTaskCategoryStyle>pessoal</ContainerTaskCategoryStyle>
        <ContainerTaskSubCategoryStyle>contas</ContainerTaskSubCategoryStyle>
        <ContainerTaskPriorityStyle>
          <PriorityFlag />
        </ContainerTaskPriorityStyle>
      </ContainerTaskStyle>
    </ContainerTaskWrapper>
  );
}
