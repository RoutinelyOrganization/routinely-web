export interface ITask {
  id: number;
  name: string;
  category: "habit" | "project" | "task";
  checked: boolean;
}