import { AxiosError } from "axios";
import { IAddTaskForm } from "../components/FormTask";
import instance from "../services/api";

export const UseCRUD = () => {
  async function handleAddTask(body: IAddTaskForm) {
    const token = window.localStorage.getItem("token");
    
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    try {
      const response = await instance.post("/tasks", body, { headers });
      return response.data;
    } catch (err) {
      const error = err as AxiosError;
      console.log(error.message);
    }
  }
  async function handleDeleteTask(id: number) {
    
    const token = window.localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    try {
      const response = await instance.delete(`/tasks/${id}`, { headers });
      return response.data;
    } catch (err) {
      const error = err as AxiosError;
      console.log(error);
      
    }
  }

  return {
    handleAddTask,
    handleDeleteTask
  };
};