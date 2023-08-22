import { TaskTitleStyle } from "./TaskTitleStyle";

interface ITaskTitleProps {
  title: string;
}

export default function TaskTitle({ title }: ITaskTitleProps) {
  return <TaskTitleStyle>{title}</TaskTitleStyle>;
}
