import HeaderComponent from "../../components/Header";
import ImageCalendar from "../../components/ImageCalendar";
import { ButtonEditTask, ContainerCalendarStyle, ContainerTasksStyle, DashboardPageStyle } from "./DashboardPageStyles";
import ImageCompleteTask from "../../assets/imagens/ImageCompleteTask.svg";
import ToDoTasksComponent from "../../components/ToDoTasks";
import TaskTitle from "../../components/TaskTitle";
import DoneTasksComponent from "../../components/DoneTasks";
import PopUpComponent from "../../components/PopUp";
import PopUpAddTaskComponent from "../../components/PopUpAddTask";
import PopUpEditTaskComponent from "../../components/PopUpEditTask";

import { useState } from "react";
import { ScrollToTop } from "../../helpers/ScrollToTop";

export default function DashboardPage() {
  const [isAddTaskOpen, setIsAddTaskOpen] = useState<boolean>(false);
  const [isEditTaskOpen, setIsEditTaskOpen] = useState<boolean>(false);

  function handleIsAddTask() {
    setIsAddTaskOpen(true);
  }
  return (
    <>
      <ScrollToTop />
      {isAddTaskOpen && (
        <PopUpComponent>
          <PopUpAddTaskComponent setIsAddTaskOpen={setIsAddTaskOpen} />
        </PopUpComponent>
      )}
      {isEditTaskOpen && (
        <PopUpComponent>
          <PopUpEditTaskComponent setIsEditTaskOpen={setIsEditTaskOpen} />
        </PopUpComponent>
      )}
      <HeaderComponent />
      <DashboardPageStyle>
        <ContainerCalendarStyle>
          <ImageCalendar />
          <img src={ImageCompleteTask} alt="imagem da pagina complete Task" />
        </ContainerCalendarStyle>

        <ContainerTasksStyle>
          <ButtonEditTask onClick={handleIsAddTask}>+</ButtonEditTask>
          <TaskTitle title="Visualizador de tarefas" />
          <ToDoTasksComponent setIsEditTaskOpen={setIsEditTaskOpen} setIsAddTaskOpen={setIsAddTaskOpen} />
          <TaskTitle title="Tarefas concluídas" />
          <DoneTasksComponent />
        </ContainerTasksStyle>
      </DashboardPageStyle>
    </>
  );
}
