import { AxiosError } from "axios";
import instance from "./api";

 const deleteTask= async (id: number): Promise<void> => {
  const token = window.localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  try {
    await instance.delete(`/tasks/${id}`, { headers });

    return ;
  } catch (err) {
    const error = err as AxiosError;
    console.log(error);
    throw new Error(error.message);
  }
 }

 export default deleteTask