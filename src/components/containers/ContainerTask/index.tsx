import PriorityFlag from "../../PriorityFlag";
import DeleteButton from "../../buttons/ButtonDelete";
import ButtonEdit from "../../buttons/ButtonEdit";
import * as S from "./styles";
import { useEffect, useContext, useState } from "react";
import instance from "../../../services/api";
import { AxiosError } from "axios";
import { CalendarContext } from "../../../contexts/CalendarContext";
import { TasksContext } from "../../../contexts/TasksContext";
import { selectOptions } from "../../FormTask";
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
  const { tasks, setTasks } = useContext(TasksContext);
  const { month, year } = useContext(CalendarContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getAllTasks = async () => {
      try {
        setLoading(true);

        const { data } = await instance.get(`/tasks/?month=${month}&year=${year}`);
        setTasks(data);
      } catch (error) {
        const erro = error as AxiosError;
        console.log(erro);
      } finally {
        setLoading(false);
      }
    };
    getAllTasks();
  }, [month, year, setTasks]);

  if (loading) {
    return <p>Carregando tarefas...</p>;
  }

  return (
    <S.Wrapper>
      {tasks.length < 1
        ? null
        : tasks.map(({ id, name, category, tag, priority }) => (
            <S.ContainerTask key={id}>
              <div>
                <S.ContainerCheckbox type="checkbox" />
                <S.ContainerText>{name}</S.ContainerText>
              </div>
              <S.ContainerCategory>{findSelectValues(category, Iterator.Category)}</S.ContainerCategory>
              <S.ContainerSubCategory>{findSelectValues(tag, Iterator.Tag)}</S.ContainerSubCategory>
              <S.ContainerPriority>
                <PriorityFlag priority={priority} />
              </S.ContainerPriority>
              <div>
                <DeleteButton setIsDeleteTaskOpen={setIsDeleteTaskOpen} id={id} />
                <ButtonEdit setIsEditTaskOpen={setIsEditTaskOpen} />
              </div>
            </S.ContainerTask>
          ))}
    </S.Wrapper>
  );
}
