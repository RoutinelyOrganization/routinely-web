import { AxiosError } from "axios";
import instance from "../../services/api";

export const getAllTasks = async (month: number, year: number) => {
  try {
    const { data } = await instance.get(`/tasks/?month=${month}&year=${year}`);
    return data;
  } catch (error) {
    const erro = error as AxiosError;
    console.log(erro);
  }
};
