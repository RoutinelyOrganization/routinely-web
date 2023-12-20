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
}

export const TasksContext = createContext<ITasksContext>({} as ITasksContext);
TasksContext.displayName = "Tasks Context";

export const TasksProvider: React.FC<ITasksProvider> = ({ children }) => {
  const [tasks, setTasks] = useState<Itasks[]>([]);
  const [taskId, setTaskId] = useState(0);

  return (
    <TasksContext.Provider
      value={{
        tasks,
        setTasks,
        taskId,
        setTaskId,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
