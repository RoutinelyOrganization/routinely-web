import * as S from "./styles";

import { useState } from "react";
import CardTask from "../../components/CardTask";
import FormTask, { IAddTaskForm } from "../../components/FormTask";
import Header from "../../components/Header";
import PopUpCustom from "../../components/PopUp";
import PopupAlert from "../../components/PopupAlert";
import ConfirmAction, { AddTaskProps, DeleteTaskProps, EditTaskProps } from "../../components/confirmAction";
import { CalendarProvider } from "../../contexts/CalendarContext";
import { TasksProvider } from "../../contexts/TasksContext";
import { UseCRUD } from "../../hooks/useCrud";
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
  checked?: boolean;
}

export default function DashboardPage() {
  const { handleAddTask, handleEditTask, handleDeleteTask } = UseCRUD();
  const [isTaskOpen, setIsTaskOpen] = useState<boolean>(false);
  const [isConfirmActionOpen, setIsConfirmActionOpen] = useState<boolean>(false);
  const [crudTasksOptions, setCrudTasksOptions] = useState<
    "addTask" | "editTask" | "deleteTask" | "duplicateTask" | null
  >(null);
  const [dataTask, setDataTask] = useState<IAddTaskForm | null>(null);

  // const { user } = useContext(UserContext);
  // const token = localStorage.getItem("token");
  // const navigate = useNavigate();
  // const { authorization } = useAuth();

  const crudTasks = {
    addTask: {
      name: "adicionar",
      execute: async (props: AddTaskProps) => {
        const task = await handleAddTask(props.data);
        return task;
      },
    },

    duplicateTask: {
      name: "duplicar",
      execute: async (props: AddTaskProps) => {
        const task = await handleAddTask(props.data);
        return task;
      },
    },

    editTask: {
      name: "editar",
      execute: async (props: EditTaskProps) => {
        const task = await handleEditTask(props.id, props.data, props.tasks);
        return task;
      },
    },

    deleteTask: {
      name: "excluir",
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
          <PopupAlert>
            <ConfirmAction
              setIsDeleteTaskOpen={setIsConfirmActionOpen}
              crudTask={crudTasks[crudTasksOptions!].execute}
              dataTask={dataTask!}
              setIsTaskOpen={setIsTaskOpen}
            >
              {`Tem certeza que deseja ${crudTasks[crudTasksOptions!].name} a tarefa?`}
            </ConfirmAction>
          </PopupAlert>
        )}
        <S.Container $visible={isTaskOpen}>
          <Header />
          <S.Main>
            <CardTask />
            {/* <S.ContainerCalendar>
              <DateCalendar />
              <img className="desktop" src={ImageCompleteTask} alt="imagem da pagina complete Task" />
              <img className="tablet" src={ImageCompleteTask2} alt="imagem da pagina complete Task" />
            </S.ContainerCalendar> */}
          </S.Main>
        </S.Container>
      </CalendarProvider>
    </TasksProvider>
  );
}
