import { IAddTaskForm } from "../components/FormTask";
import { Itasks } from "../pages/DashboardPage";
import addTask from "../services/addTask";
import deleteTask from "../services/deletTask";
import editTask from "../services/editTasks";
import { dateFormat } from "../utils/formats/dateAndTime";

export const UseCRUD = () => {
  async function handleAddTask(data: IAddTaskForm, tasks: Itasks[]): Promise<Itasks> {
    try {
      const cleanData = await validateRepeatedTask(data, tasks);
      const task = await addTask(cleanData);
      return task;
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : "Erro no servidor");
    }
  }

  async function handleEditTask(id: number, data: IAddTaskForm, tasks: Itasks[]): Promise<Itasks[]> {
    try {
      const cleanData = await validateRepeatedTask(data, tasks);
      await editTask(id, cleanData);
      const response = tasks.map((task) => {
        if (task.id === id) {
          return { ...task, ...cleanData };
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

  async function validateRepeatedTask(data: IAddTaskForm, tasks: Itasks[]) {
    const [dataNameSplit] = data.name!.split("(");

    const taskRepeated = tasks.filter((task) => {
      const [taskNameSplit] = task.name.split("(");

      return (
        taskNameSplit === dataNameSplit &&
        task.category === data.category &&
        task.date === dateFormat(data.date as unknown as string) &&
        task.hour === data.hour &&
        task.priority === data.priority &&
        task.tag === data.tag &&
        task.description === data.description
      );
    });

    data.name = dataNameSplit;
    const taskRepeatedLength = taskRepeated.length;

    if (taskRepeatedLength > 4) {
      alert("Limite de tarefas repetidas atingido");
      throw new Error("Limite de tarefas repetidas atingido");
    }
    if (taskRepeatedLength) {
      data.name = `${dataNameSplit}(${taskRepeated.length})`;
    }

    return data;
  }

  return {
    handleAddTask,
    handleDeleteTask,
    handleEditTask,
  };
};
