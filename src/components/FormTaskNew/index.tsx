import { useContext, useState } from "react";
import arrow from "../../assets/icons/arrowDown.svg";
import infoIcon from "../../assets/icons/informacao.svg";
import { TasksContext } from "../../contexts/TasksContext";
import ButtonDanger from "../buttons/ButtonDanger";
import ButtonPrincipal from "../buttons/ButtonPrincipal";
import PopUpCloseButton from "../buttons/PopUpCloseButton";
import DateCalendar from "../Calendar";
import CustonCheckedBox from "../CustonCheckedBox";
import InputComponent from "../Input";
import * as S from "./styles";

interface IWeekDay {
  id: number;
  name: string;
  checked: boolean;
  shortName: string;
}
const weekDaysOptions: IWeekDay[] = [
  {
    id: 0,
    name: "Sunday",
    checked: true,
    shortName: "D",
  },
  {
    id: 1,
    name: "Monday",
    checked: false,
    shortName: "S",
  },
  {
    id: 2,
    name: "Tuesday",
    checked: false,
    shortName: "T",
  },
  {
    id: 3,
    name: "Wednesday",
    checked: false,
    shortName: "Q",
  },
  {
    id: 4,
    name: "Thursday",
    checked: false,
    shortName: "Q",
  },
  {
    id: 5,
    name: "Friday",
    checked: false,
    shortName: "S",
  },
  {
    id: 6,
    name: "Saturday",
    checked: false,
    shortName: "S",
  },
];

export default function FormTask() {
  const [isWeekFrequencyOpen, setIWeekFrequencyOpen] = useState(false);
  const [weekDays, setWeekDays] = useState<IWeekDay[]>(weekDaysOptions);
  const { formTypeTask, setFormTaskOpen, formTypeAndDescTask } = useContext(TasksContext);

  const handleWeekDays = (id: number, checked: boolean) => {
    const newWeekDaysOptions: IWeekDay[] = weekDays.map((weekDay) => {
      if (weekDay.id === id) {
        return { ...weekDay, checked };
      }
      return weekDay;
    });

    setWeekDays(newWeekDaysOptions);
  };

  const { type, description } = formTypeAndDescTask.find((task) => task.type === formTypeTask) || {};

  return (
    <S.Form>
      <PopUpCloseButton setIsTaskOpen={() => setFormTaskOpen(false)} />
      <S.Title>
        Adicionar {type}
        <span>
          <img src={infoIcon} alt="icone de exclamação" />
          <S.Description>{description}</S.Description>
        </span>
      </S.Title>

      <InputComponent label="Titulo" placeholder="Nome do Hábito" />

      <S.ContainerDateTime>
        <InputComponent label="Data" type="date" />
        <InputComponent label="Hora" type="time" />
      </S.ContainerDateTime>

      <InputComponent label="Categoria" placeholder="Categoria" />
      <InputComponent label="Descrição" placeholder="Descrição" />

      <S.ContainerOpenWeekFrequency>
        <p>Frequencia semanal</p>
        <span onClick={() => setIWeekFrequencyOpen(!isWeekFrequencyOpen)}>
          <img src={arrow} alt="Seta para baixo" />
        </span>
      </S.ContainerOpenWeekFrequency>

      {isWeekFrequencyOpen && (
        <>
          <S.QuantityPerWeekParagraph>
            Quantidade <InputComponent placeholder="0" /> Semana
          </S.QuantityPerWeekParagraph>

          <div>
            <p>Dias da semana</p>
            <S.ContainerSelectWeekDays>
              {weekDays.map((day) => (
                <S.ContainerCustonCheckedBox key={day.id} checked={day.checked}>
                  <CustonCheckedBox
                    id={day.id}
                    text={day.shortName}
                    setValue={handleWeekDays}
                    checked={day.checked}
                    name={day.name}
                  />
                </S.ContainerCustonCheckedBox>
              ))}
            </S.ContainerSelectWeekDays>
          </div>

          <S.ContainerCalendar>
            <p>Finaliza em:</p>
            <DateCalendar version="compact" />
          </S.ContainerCalendar>
        </>
      )}

      <S.ContainerButtons>
        <ButtonDanger>Excluir</ButtonDanger>
        <S.DuplicateButton>Duplicar</S.DuplicateButton>
        <ButtonPrincipal>Salvar alterações</ButtonPrincipal>
      </S.ContainerButtons>
    </S.Form>
  );
}
