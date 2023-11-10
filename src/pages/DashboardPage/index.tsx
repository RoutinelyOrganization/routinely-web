import ImageCompleteTask from "../../assets/imagens/ImageCompleteTask.svg";
import DoneTasksComponent from "../../components/DoneTasks";
import HeaderComponent from "../../components/Header";
import ImageCalendar from "../../components/ImageCalendar";
import PopUpComponent from "../../components/PopUp";
import PopUpAddTaskComponent from "../../components/PopUpAddTask";
import PopUpEditTaskComponent from "../../components/PopUpEditTask";
import TaskTitle from "../../components/TaskTitle";
import ToDoTasksComponent from "../../components/ToDoTasks";
import * as S from "./styles";

import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { ScrollToTop } from "../../helpers/ScrollToTop";

export default function DashboardPage() {
  const [isAddTaskOpen, setIsAddTaskOpen] = useState<boolean>(false);
  const [isEditTaskOpen, setIsEditTaskOpen] = useState<boolean>(false);
  const { user } = useContext(UserContext);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleIsAddTask = () => {
    setIsAddTaskOpen(true);
  }

  useEffect(() => {
    if (!user.email && !token) {
      navigate("/signInPage");
    }
  }, [token, user.email, navigate]);

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
      <S.Main>
        <S.ContainerCalendar>
          <ImageCalendar />
          <img src={ImageCompleteTask} alt="imagem da pagina complete Task" />
        </S.ContainerCalendar>

        <S.ContainerTasks>
          <S.ButtonEditTask onClick={handleIsAddTask}>+</S.ButtonEditTask>
          <TaskTitle title="Visualizador de tarefas" />
          <ToDoTasksComponent setIsEditTaskOpen={setIsEditTaskOpen} setIsAddTaskOpen={setIsAddTaskOpen} />
          <TaskTitle title="Tarefas concluídas" />
          <DoneTasksComponent />
        </S.ContainerTasks>
      </S.Main>
    </>
  );
}
