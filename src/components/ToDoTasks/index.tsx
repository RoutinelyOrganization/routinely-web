import ContainerTaskComponent from "../ContainerTask";
import { ToDoTasksStyle } from "./ToDoTasksStyle";

export default function ToDoTasksComponent() {
    return (
        <ToDoTasksStyle>
            <ContainerTaskComponent />
            <ContainerTaskComponent />
            <hr />
        </ToDoTasksStyle>
    )
}