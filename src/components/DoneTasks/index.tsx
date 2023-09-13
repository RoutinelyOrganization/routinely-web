import ContainerTaskDoneComponent from "../ContainerTaskDone";
import { DoneTasksStyle } from "./DoneTasksStyle";

export default function DoneTasksComponent() {
    return (
        <DoneTasksStyle>
            <ContainerTaskDoneComponent />
            <ContainerTaskDoneComponent />
            <ContainerTaskDoneComponent />
            <ContainerTaskDoneComponent />
            <ContainerTaskDoneComponent />
            <ContainerTaskDoneComponent />
        </DoneTasksStyle>
    )
}