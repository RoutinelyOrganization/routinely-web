import { AxiosError } from "axios";
import { IAddTaskForm } from "../components/FormTask";
import { Itasks } from "../pages/DashboardPage";
import instance from "./api";
import { getAllTasks } from "./getAllTasks";

const editTask = async (id: number, body: IAddTaskForm): Promise<Itasks[]> => {
  console.log("edit");
  
  const token = window.localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  try {
     await instance.put(`/tasks/${id}`, body, { headers });
    const response = await getAllTasks(token!);

    return response;
  } catch (err) {
    const error = err as AxiosError;
    console.log(error);
    throw new Error(error.message);
  }
}

export default editTask