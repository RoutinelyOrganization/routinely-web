import ImageCompleteTask from "../../assets/imagens/ImageCompleteTask.svg";
import ImageCalendar from "../../components/ImageCalendar";
import TaskTitle from "../../components/TaskTitle";
import * as S from "./styles";

import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DoneTasks from "../../components/DoneTasks";
import Header from "../../components/Header";
import PopUp from "../../components/PopUp";
import PopUpAddTask from "../../components/PopUpAddTask";
import PopUpEditTask from "../../components/PopUpEditTask";
import ToDoTasks from "../../components/ToDoTasks";
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
        <PopUp>
          <PopUpAddTask setIsAddTaskOpen={setIsAddTaskOpen} />
        </PopUp>
      )}
      {isEditTaskOpen && (
        <PopUp>
          <PopUpEditTask setIsEditTaskOpen={setIsEditTaskOpen} />
        </PopUp>
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
