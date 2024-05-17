import { useState } from "react";
import { DaysOfWeek } from "../../types/weekDays";
import CustonCheckedBox from "../CustonCheckedBox";
import * as S from "./styles";

interface IWeekDay {
  id: number;
  name: DaysOfWeek;
  checked: boolean;
  shortName: string;
}
interface IWeekDayProps {
  weekDays?: DaysOfWeek[];
  setWeekDays?: React.Dispatch<React.SetStateAction<DaysOfWeek[]>>;
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
export default function WeekDaysCheckBox({ weekDays, setWeekDays }: IWeekDayProps) {
  const [weekDaysDefault, setWeekDaysDefault] = useState<IWeekDay[]>(weekDaysOptions);
  const [weekDaysChecked, setWeekDaysChecked] = useState<DaysOfWeek[]>(weekDays || []);

  const handleWeekDays = (id: number, checked: boolean, name?: string) => {
    weekDaysChecked.includes(name as DaysOfWeek)
      ? weekDaysChecked.splice(weekDaysChecked.indexOf(name as DaysOfWeek), 1)
      : weekDaysChecked.push(name as DaysOfWeek);
    setWeekDaysChecked(weekDaysChecked);
    setWeekDays && setWeekDays(weekDaysChecked);

    const newWeekDaysOptions: IWeekDay[] = weekDaysDefault.map((weekDay) => {
      if (weekDay.id === id) {
        return { ...weekDay, checked };
      }
      return weekDay;
    });

    setWeekDaysDefault(newWeekDaysOptions);
  };

  return (
    <S.ContainerSelectWeekDays>
      {weekDaysDefault.map((day) => (
        <S.ContainerCustonCheckedBox key={day.id} checked={weekDaysChecked?.includes(day.name) || false}>
          <CustonCheckedBox
            id={day.id}
            text={day.shortName}
            setValue={handleWeekDays}
            checked={weekDaysChecked?.includes(day.name) || false}
            name={day.name}
          />
        </S.ContainerCustonCheckedBox>
      ))}
    </S.ContainerSelectWeekDays>
  );
}
