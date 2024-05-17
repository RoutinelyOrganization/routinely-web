import { TypeTask } from "./typeTasks";
import { WeekDays } from "./weekDays";



export interface Task  extends TypeTask, WeekDays {
  id: number;
  name: string;
  date: Date;
  hour: string;
  category: string;
  description: string;
  quantityPerWeek: number;
  finallyDate: Date
  checked: boolean;
}