import { AxiosError } from "axios";
// import { Itasks } from "../pages/DashboardPage";
import instance from "./api";
// import { getAllTasks } from "./getAllTasks";

 const deleteTask= async (id: number): Promise<void> => {
  const token = window.localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  try {
    await instance.delete(`/tasks/${id}`, { headers });
    // const response = await getAllTasks(token!);

    return ;
  } catch (err) {
    const error = err as AxiosError;
    console.log(error);
    throw new Error(error.message);
  }
 }

 export default deleteTask