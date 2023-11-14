import ImageCompleteTask from "../../assets/imagens/ImageCompleteTask.svg";
import ImageCalendar from "../../components/ImageCalendar";
import * as S from "./styles";

import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DoneTasks from "../../components/DoneTasks";
import Header from "../../components/Header";
import PopUpTesting from "../../components/PopUp";
import ToDoTasks from "../../components/ToDoTasks";
import TaskTitle from "../../components/titles/TaskTitle";
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
        <PopUpTesting setIsTaskOpen={setIsAddTaskOpen} actionForm="add"/>
      )}
      {isEditTaskOpen && (
        <PopUpTesting setIsTaskOpen={setIsEditTaskOpen} actionForm="edit"/>
      )}
      <Header />
      <S.Main>
        <S.ContainerCalendar>
          <ImageCalendar />
          <img src={ImageCompleteTask} alt="imagem da pagina complete Task" />
        </S.ContainerCalendar>

        <S.ContainerTasks>
          <S.ButtonEditTask onClick={handleIsAddTask}>+</S.ButtonEditTask>
          <TaskTitle title="Visualizador de tarefas" />
          <ToDoTasks setIsEditTaskOpen={setIsEditTaskOpen} setIsAddTaskOpen={setIsAddTaskOpen} />
          <TaskTitle title="Tarefas concluídas" />
          <DoneTasks />
        </S.ContainerTasks>
      </S.Main>
    </>
  );
}
