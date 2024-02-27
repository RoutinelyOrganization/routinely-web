import { useContext, useState } from "react";
import image from "../../assets/icons/check.svg";
import * as S from "./styles";
import { TasksContext } from "../../contexts/TasksContext";
import { UseCRUD } from "../../hooks/useCrud";

interface ICheckBox {
  id: number;
  checked: boolean;
}
export default function CustonCheckedBox({ id, checked }: ICheckBox) {
  const [isChecked, setIsChecked] = useState<boolean>(checked);
  const { handleEditTask } = UseCRUD();
  const { tasks, setTasks } = useContext(TasksContext);

  async function handleChecked() {
    const newCheckedValue = !isChecked;
    setIsChecked(newCheckedValue);

    const findTask = tasks.find((task) => task.id === id);
    const taskDone = { ...findTask, checked: newCheckedValue };

    const newTasks = await handleEditTask(id, taskDone, tasks);

    setTasks(newTasks);
  }

  return (
    <S.CustonCheckedBox htmlFor={`checkbox-${id}`}>
      <input
        disabled={isChecked}
        id={`checkbox-${id}`}
        type="checkbox"
        checked={isChecked}
        onChange={() => handleChecked()}
      />
      <span>
        <img src={image} alt="" />
      </span>
    </S.CustonCheckedBox>
  );
}
