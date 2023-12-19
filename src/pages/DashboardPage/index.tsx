import ImageCompleteTask from "../../assets/imagens/ImageCompleteTask.svg";
import * as S from "./styles";

import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DoneTasks from "../../components/DoneTasks";
import FormTask from "../../components/FormTask";
import Header from "../../components/Header";
import PopUpTesting from "../../components/PopUp";
import Tasks from "../../components/Tasks";
import ConfirmAction from "../../components/confirmAction";
import TaskTitle from "../../components/titles/TaskTitle";
import { UserContext } from "../../contexts/UserContext";
import { ScrollToTop } from "../../helpers/ScrollToTop";
import DateCalendar from "../../components/Calendar";
import { CalendarProvider } from "../../contexts/CalendarContext";
import { TasksProvider } from "../../contexts/TasksContext";
import { useAuth } from "../../hooks/useAuth";

export interface Itasks {
  name: string;
  date: string;
  hour: string;
  description: string;
  priority: string;
  tag: string;
  category: string;
}

export default function DashboardPage() {
  const [isAddTaskOpen, setIsAddTaskOpen] = useState<boolean>(false);
  const [isEditTaskOpen, setIsEditTaskOpen] = useState<boolean>(false);
  const [isDeleteTaskOpen, setIsDeleteTaskOpen] = useState<boolean>(false);
  const { user } = useContext(UserContext);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { authorization } = useAuth();
  
  const handleIsAddTask = () => {
    setIsAddTaskOpen(true);
  };

  useEffect(() => {
    (async () => {
      authorization();     
    })();

    if (!user.email && !token) {
      navigate("/signInPage");
    }
  }, [token, user.email, navigate, authorization]);

  return (
    <>
      <TasksProvider>
        <CalendarProvider>
          <ScrollToTop />
          {isAddTaskOpen && (
            <PopUpTesting setIsTaskOpen={setIsAddTaskOpen}>
              <FormTask actionForm="add" setIsTaskOpen={setIsAddTaskOpen} />
            </PopUpTesting>
          )}
          {isDeleteTaskOpen && (
            <PopUpTesting>
              <ConfirmAction setIsDeleteTaskOpen={setIsDeleteTaskOpen}>
                Tem certeza que deseja realizar a exclusão da tarefa?
              </ConfirmAction>
            </PopUpTesting>
          )}
          <Header />
          <S.Main>
            <S.ContainerCalendar>
              <DateCalendar />
              <img src={ImageCompleteTask} alt="imagem da pagina complete Task" />
            </S.ContainerCalendar>

            <S.ContainerTasks>
              <S.ButtonEditTask onClick={handleIsAddTask}>+</S.ButtonEditTask>
              <TaskTitle title="Visualizador de tarefas" />
              <Tasks
                setIsEditTaskOpen={setIsEditTaskOpen}
                setIsAddTaskOpen={setIsAddTaskOpen}
                setIsDeleteTaskOpen={setIsDeleteTaskOpen}
              />
              <TaskTitle title="Tarefas concluídas" />
              <DoneTasks />
            </S.ContainerTasks>
          </S.Main>
        </CalendarProvider>
      </TasksProvider>
    </>
  );
}
