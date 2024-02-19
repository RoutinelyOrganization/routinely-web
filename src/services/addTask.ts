import { IAddTaskForm } from "../components/FormTask";
import instance from "./api";

const  addTask = async (body: IAddTaskForm) => {
  const token = window.localStorage.getItem("token");

  const headers = {
    Authorization: `Bearer ${token}`,
  };
  try {
    const response = await instance.post("/tasks", body, { headers });

    return response.data;
  } catch (err) {
    throw new Error();
  }
}

export default addTask