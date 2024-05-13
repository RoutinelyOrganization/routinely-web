import { TypeTask } from "./typeTasks";

export interface Task  extends TypeTask {
  id: number;
  name: string;
  checked: boolean;
}