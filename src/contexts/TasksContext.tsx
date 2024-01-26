import React, { createContext, useState } from "react";
import { Itasks } from "../pages/DashboardPage";

interface ITasksProvider {
  children: React.ReactNode;
}

interface ITasksContext {
  tasks: Itasks[];
  setTasks: React.Dispatch<React.SetStateAction<Itasks[]>>;
  taskId: number;
  setTaskId: React.Dispatch<React.SetStateAction<number>>;
  initialTasks: boolean;
  setInitialTasks: React.Dispatch<React.SetStateAction<boolean>>;
  tempTask: Itasks | null;
  setTempTask: React.Dispatch<React.SetStateAction<Itasks | null>>;
}

export const TasksContext = createContext<ITasksContext>({} as ITasksContext);
TasksContext.displayName = "Tasks Context";

export const TasksProvider: React.FC<ITasksProvider> = ({ children }) => {
  const [tasks, setTasks] = useState<Itasks[]>([]);
  const [taskId, setTaskId] = useState(0);
  const [tempTask, setTempTask] = useState<Itasks | null>(null);
  const [initialTasks, setInitialTasks] = useState(false);

  return (
    <TasksContext.Provider
      value={{
        tasks,
        setTasks,
        taskId,
        setTaskId,
        tempTask,
        setTempTask,
        initialTasks,
        setInitialTasks,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
