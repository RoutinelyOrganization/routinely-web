import closeIcon from "../../assets/icons/closeIcon.svg";
import ImageCompleteTask from "../../assets/imagens/ImageCompleteTask.svg";
import ImageCompleteTask2 from "../../assets/imagens/complete_task_versao2.svg";
import NewTask from "../../assets/imagens/nova tarefa.svg";
import * as S from "./styles";

import { useState } from "react";
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
import { ScrollToTop } from "../../utils/ScrollToTop";

export interface Itasks {
  id: number;
  name: string;
  date: Date;
  hour: string;
  description: string;
  priority: string;
  tag: string;
  category: string;
  checked?:boolean
}

export default function DashboardPage() {
  const [isAddTaskOpen, setIsAddTaskOpen] = useState<boolean>(false);
  const [isEditTaskOpen, setIsEditTaskOpen] = useState<boolean>(false);
  const [isDeleteTaskOpen, setIsDeleteTaskOpen] = useState<boolean>(false);
  // const { user } = useContext(UserContext);
  // const token = localStorage.getItem("token");
  // const navigate = useNavigate();
  // const { authorization } = useAuth();

  const handleIsAddTask = () => {
    setIsAddTaskOpen(true);
  };

  // useEffect(() => {
  //   authorization().catch(() => {
  //     navigate("/signInPage");
  //   });

  //   if (!user.email && !token) {
  //     navigate("/signInPage");
  //   }
  // }, [token, user.email, navigate, authorization]);

  return (
    <TasksProvider>
      <CalendarProvider>
        <ScrollToTop />
        {isAddTaskOpen && (
          <PopUpCustom setIsTaskOpen={setIsAddTaskOpen}>
            <FormTask setIsTaskOpen={setIsAddTaskOpen} />
          </PopUpCustom>
        )}
        {isEditTaskOpen && (
          <PopUpCustom setIsTaskOpen={setIsEditTaskOpen}>
            <FormTask setIsTaskOpen={setIsEditTaskOpen} />
          </PopUpCustom>
        )}
        {isDeleteTaskOpen && (
          <ConfirmAction setIsDeleteTaskOpen={setIsDeleteTaskOpen}>
            Tem certeza que deseja realizar a exclusão da tarefa?
          </ConfirmAction>
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
              <S.ButtonEditTask onClick={handleIsAddTask}>
                <img src={closeIcon} alt="close button" />
              </S.ButtonEditTask>
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
