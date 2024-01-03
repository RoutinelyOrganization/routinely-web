import ImageCompleteTask from "../../assets/imagens/ImageCompleteTask.svg";
import ImageCompleteTask2 from "../../assets/imagens/complete_task_versao2.svg";
import NewTask from "../../assets/imagens/nova tarefa.svg";
import * as S from "./styles";

import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DateCalendar from "../../components/Calendar";
import DoneTasks from "../../components/DoneTasks";
import FormTask from "../../components/FormTask";
import Header from "../../components/Header";
import PopUpCustom from "../../components/PopUp";
import Tasks from "../../components/Tasks";
import ButtonFooter from "../../components/buttons/ButtonFooter";
import ConfirmAction from "../../components/confirmAction";
import TaskTitle from "../../components/titles/TaskTitle";
import { CalendarProvider } from "../../contexts/CalendarContext";
import { TasksProvider } from "../../contexts/TasksContext";
import { UserContext } from "../../contexts/UserContext";
import { ScrollToTop } from "../../helpers/ScrollToTop";
import { useAuth } from "../../hooks/useAuth";

export interface Itasks {
  id: number;
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
    <TasksProvider>
      <CalendarProvider>
        <ScrollToTop />
        {isAddTaskOpen && (
          <PopUpCustom setIsTaskOpen={setIsAddTaskOpen}>
            <FormTask actionForm="add" setIsTaskOpen={setIsAddTaskOpen} />
          </PopUpCustom>
        )}
        {isDeleteTaskOpen && (
          <PopUpCustom>
            <ConfirmAction setIsDeleteTaskOpen={setIsDeleteTaskOpen}>
              Tem certeza que deseja realizar a exclusão da tarefa?
            </ConfirmAction>
          </PopUpCustom>
        )}
        <S.Container>
          <Header />
          <S.Main>
            <S.ContainerCalendar>
              <DateCalendar />
              <img className="desktop" src={ImageCompleteTask} alt="imagem da pagina complete Task" />
              <img className="tablet" src={ImageCompleteTask2} alt="imagem da pagina complete Task" />
            </S.ContainerCalendar>

            <S.ContainerTasks>
              <S.ButtonEditTask onClick={handleIsAddTask}>+</S.ButtonEditTask>
              <TaskTitle title="Visualizador de tarefas" />
              <Tasks
                setIsEditTaskOpen={setIsEditTaskOpen}
                setIsAddTaskOpen={setIsAddTaskOpen}
                setIsDeleteTaskOpen={setIsDeleteTaskOpen}
              />
              <hr />
              <TaskTitle title="Tarefas concluídas" />
              <DoneTasks />
            </S.ContainerTasks>
          </S.Main>
          {isAddTaskOpen || isEditTaskOpen ? (
            <ButtonFooter />
          ) : (
            <ButtonFooter onClick={handleIsAddTask}>
              <img src={NewTask} alt="" />
            </ButtonFooter>
          )}
        </S.Container>
      </CalendarProvider>
    </TasksProvider>
  );
}
