import { AxiosError } from "axios";
import { Itasks } from "../../pages/DashboardPage";
import instance from "../../services/api";

export const getAllTasks = async (token:string, month?: number, year?: number) => {
  const date = new Date()
  const monthCurrent = month || date.getMonth()+1 
  const yearCurrent = year || date.getFullYear() 
  try {
    const { data } = await instance.get(`/tasks/?month=${monthCurrent}&year=${yearCurrent}`,{
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return data as Itasks[];
  } catch (error) {
    const erro = error as AxiosError;
    console.log(erro);
  }
};
