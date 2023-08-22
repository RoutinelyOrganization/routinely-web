import DeleteButtonComponent from "../DeleteButton";
import EditButtonComponent from "../EditButton";
import PriorityFlag from "../PriorityFlag";
import {
  ContainerTaskCategoryStyle,
  ContainerTaskCheckboxStyle,
  ContainerTaskPriorityStyle,
  ContainerTaskStyle,
  ContainerTaskSubCategoryStyle,
  ContainerTaskTextStyle,
  ContainerTaskWrapper,
} from "./ContainerTaskStyle";

export default function ContainerTaskComponent() {
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
        <EditButtonComponent />
        <DeleteButtonComponent />
      </ContainerTaskStyle>
    </ContainerTaskWrapper>
  );
}
