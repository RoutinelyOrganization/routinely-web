import { useState } from "react";
import ButtonEdit from "../buttons/ButtonEdit";
import CustonCheckedBox from "../CustonCheckedBox";
import * as S from "./styles";

interface IItemOptionsProps {
  title: string;
  icon: string;
}

interface IOptionsProps {
  habit: IItemOptionsProps;
  project: IItemOptionsProps;
  task: IItemOptionsProps;
}

interface ICardTask {
  category: "habit" | "project" | "task";
  titleTask: string;
  checked?: boolean;
  idTask: number;
}

export default function CardTask({
  category = "task",
  titleTask = "jbdsbuindiobndbnsdon",
  idTask = 1,
  checked = false,
}: ICardTask) {
  const options: IOptionsProps = {
    habit: {
      title: "Hábitos",
      icon: "📌",
    },
    project: {
      title: "Projeto",
      icon: "🚀",
    },
    task: {
      title: "Tarefa",
      icon: "📋",
    },
  };

  const [isChecked, setChecked] = useState<boolean>(checked);

  const { icon, title } = options[category];
  const descrptionFormated = titleTask.length > 91 ? titleTask.slice(0, 90) + "..." : titleTask;
  return (
    <S.Container category={category} checked={isChecked}>
      <S.Title>
        <i>{icon}</i>
        {title}
      </S.Title>
      <S.ContainerDescription>
        <p>{descrptionFormated}</p>
        <CustonCheckedBox checked={isChecked} id={idTask} setChecked={setChecked} />
      </S.ContainerDescription>
      <S.ContainerBtnIcon>
        <S.Button>Carreira</S.Button>
        <ButtonEdit />
      </S.ContainerBtnIcon>
    </S.Container>
  );
}
