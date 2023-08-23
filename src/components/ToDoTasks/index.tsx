import ContainerTaskComponent from "../ContainerTask";
import { ButtonAddTaskStyle, ToDoTasksStyle } from "./ToDoTasksStyle";

export default function ToDoTasksComponent() {
    return (
        <ToDoTasksStyle>
            <ContainerTaskComponent />
            <ContainerTaskComponent />
            <ContainerTaskComponent />
            <ContainerTaskComponent />
            <ContainerTaskComponent />
            <ContainerTaskComponent />
            <ButtonAddTaskStyle>Adicionar nova tarefa</ButtonAddTaskStyle>
            <hr />
        </ToDoTasksStyle>
    )
}