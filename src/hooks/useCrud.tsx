import { AxiosError } from "axios";
import { IAddTaskForm, IEditTaskForm } from "../components/FormTask";
import instance from "../services/api";

export const UseCRUD = () => {
  async function handleAddTask(body: IAddTaskForm) {
    const token = window.localStorage.getItem("token");

    const headers = {
      Authorization: `Bearer ${token}`,
    };
    try {
      const response = await instance.post("/tasks", body, { headers });
      console.log(response.data);
      return response.data;
    } catch (err) {
      console.log(err)
      throw new Error();
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
  async function handleEditTask(id: number, body: IEditTaskForm) {
    const token = window.localStorage.getItem("token");

    const headers = {
      Authorization: `Bearer ${token!}`,
    };
    try {
      const response = await instance.put(`/tasks/${id}`, body, { headers });
      return response;
    } catch (err) {
      const error = err as AxiosError;
      console.log(error);
    }
  }

  return {
    handleAddTask,
    handleDeleteTask,
    handleEditTask,
  };
};
