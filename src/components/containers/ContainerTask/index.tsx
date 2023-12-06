import ButtonEdit from "../../buttons/ButtonEdit";
import DeleteButton from "../../buttons/ButtonDelete";
import PriorityFlag from "../../PriorityFlag";
import * as S from "./styles";
import { useEffect, useState, useContext } from "react";
import instance from "../../../services/api";
import { AxiosError } from "axios";
import { CalendarContext } from "../../../contexts/CalendarContext";

interface IContainerTaskProps {
  setIsEditTaskOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Itasks {
  name: string;
  date: string;
  hour: string;
  description: string;
  priority: string;
  tag: string;
  category: string;
}

export default function ContainerTask({ setIsEditTaskOpen }: IContainerTaskProps) {
  const [tasks, setTasks] = useState<Itasks[]>([]);

  const { month, year } = useContext(CalendarContext);

  useEffect(() => {
    const handleFetch = async () => {
      try {
        const { data } = await instance.get(`/tasks/?month=${month}&year=${year}`);
        setTasks(data);
      } catch (error) {
        const erro = error as AxiosError;
        console.log(erro);
      }
    };
    handleFetch();
  }, [month, year]);

  return (
    <S.Wrapper>
      {tasks.length < 1
        ? null
        : tasks.map(({ name, category, tag, priority }, index) => (
            <S.ContainerTask key={index}>
              <S.ContainerCheckbox type="checkbox" />
              <S.ContainerText>{name}</S.ContainerText>
              <S.ContainerCategory>{category}</S.ContainerCategory>
              <S.ContainerSubCategory>{tag}</S.ContainerSubCategory>
              <S.ContainerPriority>
                <PriorityFlag priority={priority} />
              </S.ContainerPriority>
              <ButtonEdit setIsEditTaskOpen={setIsEditTaskOpen} />
              <DeleteButton />
            </S.ContainerTask>
          ))}
    </S.Wrapper>
  );
}
