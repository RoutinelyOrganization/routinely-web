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

interface IContainerTaskProps {
  setIsEditTaskOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function ContainerTaskComponent({ setIsEditTaskOpen }: IContainerTaskProps) {
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
        <EditButtonComponent setIsEditTaskOpen={setIsEditTaskOpen} />
        <DeleteButtonComponent />
      </ContainerTaskStyle>
    </ContainerTaskWrapper>
  );
}
