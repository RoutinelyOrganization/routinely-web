import { IAddTaskForm } from "../components/FormTask";
import { Itasks } from "../pages/DashboardPage";
import addTask from "../services/addTask";
import deleteTask from "../services/deletTask";
import editTask from "../services/editTasks";

export const UseCRUD = () => {
  async function handleAddTask(data: IAddTaskForm, tasks: Itasks[]): Promise<Itasks> {
    console.log("crud", "data", data, "tasks", tasks);

    try {
      const [dataNameSplit] = data.name!.split("(");
      const taskRepeated = tasks.filter((task) => {
        const [taskNameSplit] = task.name.split("(");
        return taskNameSplit === dataNameSplit;
      });

      const taskRepeatedLength = taskRepeated.length;
      if (taskRepeatedLength > 4) {
        alert("Limite de tarefas repetidas atingido");
        throw new Error("Limite de tarefas repetidas atingido");
      }
      if (taskRepeatedLength) {
        data.name = `${dataNameSplit}(${taskRepeated.length})`;
      }
      const task = await addTask(data);
      console.log(task);
      return task;
    } catch (error) {
      console.log("error add", error);
      throw new Error(error instanceof Error ? error.message : "Erro no servidor");
    }
  }

  async function handleEditTask(id: number, data: IAddTaskForm): Promise<Itasks[]> {
    try {
      const response = await editTask(id, data);

      return response;
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : "Erro no servidor");
    }
  }

  async function handleDeleteTask(id: number): Promise<Itasks[]> {
    try {
      return await deleteTask(id);
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
