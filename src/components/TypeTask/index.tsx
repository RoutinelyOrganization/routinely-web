import { useContext } from "react";
import { TasksContext } from "../../contexts/TasksContext";
import { type TypeTask } from "../../types/typeTasks";
import * as S from "./styles";

export default function TypeTask() {
  const { formTypeAndDescTask, setFormTaskOpen, setFormTypeTask } = useContext(TasksContext);

  const handleTypeTask = ({ type }: TypeTask) => {
    setFormTaskOpen(true);
    setFormTypeTask(type);
  };

  return (
    <S.Container>
      {formTypeAndDescTask.map((option) => (
        <S.Option key={option.type} onClick={() => handleTypeTask({ type: option.type })}>
          {option.type}
        </S.Option>
      ))}
    </S.Container>
  );
}
