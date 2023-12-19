import { createContext, useState } from "react";
import { Itasks } from "../pages/DashboardPage";

interface ITasksProvider {
  children: React.ReactNode;
}

interface ITasksContext {
  tasks: Itasks[];
  setTasks: React.Dispatch<React.SetStateAction<Itasks[]>>;
}

export const TasksContext = createContext<ITasksContext>({} as ITasksContext);
TasksContext.displayName = "Tasks Context";

export const TasksProvider: React.FC<ITasksProvider> = ({ children }) => {
  const [tasks, setTasks] = useState<Itasks[]>([]);

  return (
    <TasksContext.Provider
      value={{
        tasks,
        setTasks,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
