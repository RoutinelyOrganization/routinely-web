import { IAddTaskForm } from "../../components/FormTask";
import { Itasks } from "../../pages/DashboardPage";
import { dateFormat } from "../formats/dateAndTime";

const validateRepeatedTask =  (data: IAddTaskForm, tasks: Itasks[]): IAddTaskForm | string => {
  const [dataNameSplit] = data.name!.split("(");

  const taskRepeated = tasks.filter((task) => {
    const [taskNameSplit] = task.name.split("(");

    return (
      taskNameSplit === dataNameSplit &&
      task.category === data.category &&
      task.date === dateFormat(data.date as unknown as string) &&
      task.hour === data.hour &&
      task.priority === data.priority &&
      task.tag === data.tag &&
      task.description === data.description
    );
  });

  data.name = dataNameSplit;
  const taskRepeatedLength = taskRepeated.length;

  if (taskRepeatedLength > 4) {
    return 'Repeated task limit reached';
  }
  if (taskRepeatedLength) {
    data.name = `${dataNameSplit}(${taskRepeated.length})`;
  }

  return data;
}

export default validateRepeatedTask;