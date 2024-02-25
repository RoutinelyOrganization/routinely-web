import { useContext, useState } from "react";
import image from "../../assets/icons/check.svg";
import * as S from "./styles";
import { CalendarContext } from "../../contexts/CalendarContext";
import { TasksContext } from "../../contexts/TasksContext";
import { getAllTasks } from "../../utils/functions/getAllTasks";
import { UseCRUD } from "../../hooks/useCrud";

interface ICheckBox {
  id: number;
  checked?: boolean;
}
export default function CustonCheckedBox({ id }: ICheckBox) {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const token = localStorage.getItem("token");
  const { month, year } = useContext(CalendarContext);
  const { handleEditTask } = UseCRUD();
  const { tasks, setTasks } = useContext(TasksContext);

  async function handleChecked() {
    const newCheckedValue = !isChecked;
    setIsChecked(newCheckedValue);

    const findTask = tasks.find((task) => task.id === id);
    const taskDone = { ...findTask, checked: newCheckedValue };

    await handleEditTask(id, taskDone);
    const dados = await getAllTasks(token!, month, year);
    setTasks(dados);
  }

  return (
    <S.CustonCheckedBox htmlFor={`checkbox-${id}`}>
      <input id={`checkbox-${id}`} type="checkbox" checked={isChecked} onChange={() => handleChecked()} />
      <span>
        <img src={image} alt="" />
      </span>
    </S.CustonCheckedBox>
  );
}
