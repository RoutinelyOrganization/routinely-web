import { IAddTaskForm } from "../components/FormTask";
import { Itasks } from "../pages/DashboardPage";
import addTask from "../services/addTask";
import deleteTask from "../services/deletTask";
import editTask from "../services/editTasks";

export const UseCRUD = () => {
  async function handleAddTask(data: IAddTaskForm): Promise<Itasks> {
    try {
      const task = await addTask(data);
      return task;
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : "Erro no servidor");
    }
  }

  async function handleEditTask(id: number, data: IAddTaskForm, tasks: Itasks[]): Promise<Itasks[]> {
    try {
      await editTask(id, data);
      const response = tasks.map((task) => {
        if (task.id === id) {
          return { ...task, ...data };
        }
        return task;
      });

      return response as Itasks[];
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : "Erro no servidor");
    }
  }

  async function handleDeleteTask(id: number, tasks: Itasks[]): Promise<Itasks[]> {
    try {
      await deleteTask(id);
      const response = tasks.filter((task) => task.id !== id);
      return response;
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : "Erro no servidor");
    }
  }

  return {
    handleAddTask,
    handleDeleteTask,
    handleEditTask,
  };
};
