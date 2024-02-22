import { AxiosError } from "axios";
import { useContext, useEffect, useState } from "react";
import { CalendarContext } from "../../../contexts/CalendarContext";
import { TasksContext } from "../../../contexts/TasksContext";
import { Itasks } from "../../../pages/DashboardPage";
import { getAllTasks } from "../../../services/getAllTasks";
import CustonCheckedBox from "../../CustonCheckedBox";
import { selectOptions } from "../../FormTask";
import PriorityFlag from "../../PriorityFlag";
import DeleteButton from "../../buttons/ButtonDelete";
import ButtonEdit from "../../buttons/ButtonEdit";
import * as S from "./styles";
interface IContainerTaskProps {
  setIsTaskOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsDeleteTaskOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setCrudTasksOptions: React.Dispatch<
    React.SetStateAction<"addTask" | "editTask" | "deleteTask" | "duplicateTask" | null>
  >;
}

export enum Iterator {
  Priority,
  Category,
  Tag,
}
export const findSelectValues = (valueToFind: string, iterator: Iterator) => {
  const index = selectOptions[iterator].value.indexOf(valueToFind);
  if (index !== -1) {
    return selectOptions[iterator].options[index];
  }
};

export default function ContainerTask({
  setIsTaskOpen,
  setIsDeleteTaskOpen,
  setCrudTasksOptions,
}: IContainerTaskProps) {
  const { tasks, setTasks, setTempTask } = useContext(TasksContext);
  const { month, year } = useContext(CalendarContext);
  const [loading, setLoading] = useState(false);
  const token = window.localStorage.getItem("token");

  useEffect(() => {
    try {
      setLoading(true);
      (async () => {
        const data = await getAllTasks(token!, month, year);
        data && setTasks(data);
      })();
    } catch (error) {
      const erro = error as AxiosError;
      console.log(erro);
    } finally {
      setLoading(false);
    }
  }, [month, year, setTasks, token]);

  if (loading) {
    return <p>Carregando tarefas...</p>;
  }
  const setDataTaskTemp = (data: Itasks) => {
    setTempTask(data);
  };
  tasks.forEach((task) => {
    const hourSplit = task.hour.split(":");
    task.hour = `${hourSplit[0].padStart(2, "0")}:${hourSplit[1].padStart(2, "0")}`;
  });

  return (
    <S.Wrapper>
      {tasks &&
        tasks.length > 0 &&
        tasks.map(({ id, name, category, tag, priority, date, description, hour }) => (
          <S.ContainerTask key={id}>
            <div>
              <CustonCheckedBox id={id} />
              <S.ContainerText>{name}</S.ContainerText>
            </div>
            <S.ContainerCategory>{findSelectValues(category, Iterator.Category)}</S.ContainerCategory>
            <S.ContainerSubCategory>{findSelectValues(tag, Iterator.Tag)}</S.ContainerSubCategory>
            <S.ContainerPriority>
              <PriorityFlag priority={priority} />
            </S.ContainerPriority>
            <div>
              <ButtonEdit
                setIsEditTaskOpen={setIsTaskOpen}
                setData={() => setDataTaskTemp({ id, name, category, tag, priority, date, description, hour })}
              />
              <DeleteButton
                setIsDeleteTaskOpen={setIsDeleteTaskOpen}
                id={id}
                setCrudTasksOptions={setCrudTasksOptions}
              />
            </div>
          </S.ContainerTask>
        ))}
    </S.Wrapper>
  );
}
