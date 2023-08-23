import HeaderComponent from "../../components/Header";
import ImageCalendar from "../../components/ImageCalendar";
import { ContainerCalendarStyle, ContainerTasksStyle, DashboardPageStyle } from "./DashboardPageStyles";
import ImageCompleteTask from '../../assets/imagens/ImageCompleteTask.svg'
import ToDoTasksComponent from "../../components/ToDoTasks";
import TaskTitle from "../../components/TaskTitle";
import DoneTasksComponent from "../../components/DoneTasks";

export default function DashboardPage() {
    return (
        <>
            <HeaderComponent />
            <DashboardPageStyle>
                <ContainerCalendarStyle>
                    <ImageCalendar />
                    <img src={ImageCompleteTask} alt="image da pagina complete Task" />
                </ContainerCalendarStyle>

                <ContainerTasksStyle>
                    <TaskTitle title="Visualizador de tarefas" />
                    <ToDoTasksComponent />
                    <TaskTitle title="Tarefas concluídas" />
                    <DoneTasksComponent />
                </ContainerTasksStyle>
            </DashboardPageStyle>
        </>
    )
}