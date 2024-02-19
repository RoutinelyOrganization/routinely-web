import { Itasks } from '../pages/DashboardPage/index';
import { TimeFormat, dateFormat } from "../utils/formats/dateAndTime";
import instance from "./api";

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
    const tasks = data as Itasks[]    
    
    if (tasks.length > 0 ) {
      tasks.forEach(task => {
        task.date = dateFormat(task.date);
        task.hour = TimeFormat(task.hour);
      });
    }
    
    
    return data as Itasks[];
  } catch (error) {
    throw new Error();
  }
};
