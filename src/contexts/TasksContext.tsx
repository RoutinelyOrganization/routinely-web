import React, { createContext, useState } from "react";
import { Task } from "../types/task";
import { TypeTask } from "../types/typeTasks";

interface ITasksProvider {
  children: React.ReactNode;
}

interface IFormTypeTask {
  type: TypeTask["type"];
  description: string;
}

interface ITasksContext {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  taskId: number;
  setTaskId: React.Dispatch<React.SetStateAction<number>>;
  tempTask: Task | null;
  setTempTask: React.Dispatch<React.SetStateAction<Task | null>>;
  formTaskOpen: boolean;
  setFormTaskOpen: React.Dispatch<React.SetStateAction<boolean>>;
  formTypeTask: TypeTask["type"];
  setFormTypeTask: React.Dispatch<React.SetStateAction<TypeTask["type"]>>;
  formTypeAndDescTask: Array<IFormTypeTask>;
}

export const TasksContext = createContext<ITasksContext>({} as ITasksContext);
TasksContext.displayName = "Tasks Context";

export const TasksProvider: React.FC<ITasksProvider> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskId, setTaskId] = useState(0);
  const [tempTask, setTempTask] = useState<Task | null>(null);
  const [formTaskOpen, setFormTaskOpen] = useState<boolean>(false);
  const [formTypeTask, setFormTypeTask] = useState<TypeTask["type"]>("habit");
  const [formTypeAndDescTask] = useState<Array<IFormTypeTask>>([
    {
      type: "habit",
      description: "descrição do habito",
    },
    {
      type: "project",
      description: "descrição do projeto",
    },
    {
      type: "task",
      description: "descrição da tarefa",
    },
  ]);

  return (
    <TasksContext.Provider
      value={{
        tasks,
        setTasks,
        taskId,
        setTaskId,
        tempTask,
        setTempTask,
        setFormTaskOpen,
        formTaskOpen,
        setFormTypeTask,
        formTypeTask,
        formTypeAndDescTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
