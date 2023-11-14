import ContainerTaskDone from "../containers/ContainerTaskDone";
import * as S from "./styles";

export default function DoneTasks() {
    return (
        <S.Container>
            <ContainerTaskDone />
            <ContainerTaskDone />
            <ContainerTaskDone />
            <ContainerTaskDone />
            <ContainerTaskDone />
            <ContainerTaskDone />
        </S.Container>
    )
}