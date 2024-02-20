import closeIcon from "../../assets/icons/closeIcon.svg";
import ImageCompleteTask from "../../assets/imagens/ImageCompleteTask.svg";
import ImageCompleteTask2 from "../../assets/imagens/complete_task_versao2.svg";
import NewTask from "../../assets/imagens/nova tarefa.svg";
import * as S from "./styles";

import { useState } from "react";
import DateCalendar from "../../components/Calendar";
import DoneTasks from "../../components/DoneTasks";
import FormTask, { IAddTaskForm } from "../../components/FormTask";
import Header from "../../components/Header";
import PopUpCustom from "../../components/PopUp";
import Tasks from "../../components/Tasks";
import ButtonFooter from "../../components/buttons/ButtonFooter";
import ConfirmAction, { AddTaskProps, DeleteTaskProps, EditTaskProps } from "../../components/confirmAction";
import TaskTitle from "../../components/titles/TaskTitle";
import { CalendarProvider } from "../../contexts/CalendarContext";
import { TasksProvider } from "../../contexts/TasksContext";
import { UseCRUD } from "../../hooks/useCrud";
import { ScrollToTop } from "../../utils/ScrollToTop";

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
  const { handleAddTask, handleEditTask, handleDeleteTask } = UseCRUD();
  const [isTaskOpen, setIsTaskOpen] = useState<boolean>(false);
  const [isConfirmActionOpen, setIsConfirmActionOpen] = useState<boolean>(false);
  const [crudTasksOptions, setCrudTasksOptions] = useState<"addTask" | "editTask" | "deleteTask" | null>(null);
  const [dataTask, setDataTask] = useState<IAddTaskForm | null>(null);

  // const { user } = useContext(UserContext);
  // const token = localStorage.getItem("token");
  // const navigate = useNavigate();
  // const { authorization } = useAuth();

  const crudTasks = {
    addTask: {
      name: "adição",
      execute: async (props: AddTaskProps) => {
        const task = await handleAddTask(props.data, props.tasks);
        return task;
      },
    },

    editTask: {
      name: "edição",
      execute: async (props: EditTaskProps) => {
        const task = await handleEditTask(props.id, props.data, props.tasks);
        return task;
      },
    },

    deleteTask: {
      name: "exclusão",
      execute: async (props: DeleteTaskProps) => {
        const task = await handleDeleteTask(props.id, props.tasks);
        return task;
      },
    },
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
        {isTaskOpen && (
          <PopUpCustom setIsTaskOpen={setIsTaskOpen}>
            <FormTask
              setIsTaskOpen={setIsTaskOpen}
              setCrudTasksOptions={setCrudTasksOptions}
              setDataTask={setDataTask}
              setIsConfirmActionOpen={setIsConfirmActionOpen}
            />
          </PopUpCustom>
        )}

        {isConfirmActionOpen && (
          <ConfirmAction
            setIsDeleteTaskOpen={setIsConfirmActionOpen}
            crudTask={crudTasks[crudTasksOptions!].execute}
            dataTask={dataTask!}
            setIsTaskOpen={setIsTaskOpen}
          >
            {`Tem certeza que deseja realizar a ${crudTasks[crudTasksOptions!].name} da tarefa?`}
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
              <S.ButtonEditTask onClick={() => setIsTaskOpen(true)}>
                <img src={closeIcon} alt="close button" />
              </S.ButtonEditTask>
              <TaskTitle title="Visualizador de tarefas" />
              <Tasks
                setIsDeleteTaskOpen={setIsConfirmActionOpen}
                setIsTaskOpen={setIsTaskOpen}
                setCrudTasksOptions={setCrudTasksOptions}
              />
              <hr />
              <TaskTitle title="Tarefas concluídas" />
              <DoneTasks />
            </S.ContainerTasks>
          </S.Main>
          {isTaskOpen ? (
            <ButtonFooter />
          ) : (
            <ButtonFooter onClick={() => setIsTaskOpen(true)}>
              <img src={NewTask} alt="" />
            </ButtonFooter>
          )}
        </S.Container>
      </CalendarProvider>
    </TasksProvider>
  );
}
