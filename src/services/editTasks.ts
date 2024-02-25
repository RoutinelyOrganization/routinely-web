import { AxiosError } from "axios";
import { IAddTaskForm } from "../components/FormTask";
import instance from "./api";

const editTask = async (id: number, body: IAddTaskForm): Promise<void> => {
  console.log("edit");
  
  const token = window.localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  try {
     await instance.put(`/tasks/${id}`, body, { headers });
   

    return ;
  } catch (err) {
    const error = err as AxiosError;
    console.log(error);
    throw new Error(error.message);
  }
}

export default editTask