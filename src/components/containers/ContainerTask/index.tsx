import { AxiosError } from "axios";
import { useContext, useEffect, useState } from "react";
import { CalendarContext } from "../../../contexts/CalendarContext";
import { TasksContext } from "../../../contexts/TasksContext";
import { Itasks } from "../../../pages/DashboardPage";
import { getAllTasks } from "../../../utils/functions/getAllTasks";
import CustonCheckedBox from "../../CustonCheckedBox";
import { selectOptions } from "../../FormTask";
import PriorityFlag from "../../PriorityFlag";
import DeleteButton from "../../buttons/ButtonDelete";
import ButtonEdit from "../../buttons/ButtonEdit";
import * as S from "./styles";
interface IContainerTaskProps {
  setIsEditTaskOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsDeleteTaskOpen: React.Dispatch<React.SetStateAction<boolean>>;
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

export default function ContainerTask({ setIsEditTaskOpen, setIsDeleteTaskOpen }: IContainerTaskProps) {
  const { tasks, setTasks, setTempTask } = useContext(TasksContext);
  const { month, year } = useContext(CalendarContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      setLoading(true);
      (async () => {
        const data = await getAllTasks(month, year);
        setTasks(data);
      })();
    } catch (error) {
      const erro = error as AxiosError;
      console.log(erro);
    } finally {
      setLoading(false);
    }
  }, [month, year, setTasks]);

  if (loading) {
    return <p>Carregando tarefas...</p>;
  }
  const setDataTaskTemp = (data: Itasks) => {
    setTempTask(data);
  };
  console.log(tasks);

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
              <DeleteButton setIsDeleteTaskOpen={setIsDeleteTaskOpen} id={id} />
              <ButtonEdit
                setIsEditTaskOpen={setIsEditTaskOpen}
                setData={() => setDataTaskTemp({ id, name, category, tag, priority, date, description, hour })}
              />
            </div>
          </S.ContainerTask>
        ))}
    </S.Wrapper>
  );
}
