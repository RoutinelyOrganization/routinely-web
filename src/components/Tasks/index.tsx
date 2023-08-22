import ToDoTasksComponent from "../ToDoTasks";
import { TasksStyle } from "./TasksStyle";

export default function TasksComponent() {
    return (
        <TasksStyle>
            <ToDoTasksComponent />
        </TasksStyle>
    )
}