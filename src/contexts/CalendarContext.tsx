import dayjs, { Dayjs } from "dayjs";
import { createContext, useEffect, useState } from "react";

interface ICalendarProps {
  children: React.ReactNode;
}

dayjs.locale("pt-br");
interface ICalendarContext {
  date: Dayjs;
  setDate: React.Dispatch<React.SetStateAction<Dayjs>>;
  nameMonth: string;
  setNameMonth: React.Dispatch<React.SetStateAction<string>>;
  weekDay: string;
  setWeekDay: React.Dispatch<React.SetStateAction<string>>;
  day: number;
  setDay: React.Dispatch<React.SetStateAction<number>>;
  month: number;
  setMonth: React.Dispatch<React.SetStateAction<number>>;
  year: number;
  setYear: React.Dispatch<React.SetStateAction<number>>;
}
export const CalendarContext = createContext<ICalendarContext>({} as ICalendarContext);
CalendarContext.displayName = "calendar context";

export const CalendarProvider: React.FC<ICalendarProps> = ({ children }) => {
  const [date, setDate] = useState<Dayjs>(dayjs());

  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);
  const [day, setDay] = useState(0);
  const [weekDay, setWeekDay] = useState("");
  const [nameMonth, setNameMonth] = useState("");

  useEffect(() => {
    const nameWeekDay = [
      "Domingo",
      "Segunda-feira",
      "Terça-feira",
      "Quarta-feira",
      "Quinta-feira",
      "Sexta-feira",
      "Sábado",
    ];
    const namesMonths = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ];

    setDay(date.date());
    setMonth(date.month() + 1);
    setYear(date.year());
    setWeekDay(nameWeekDay[date.day()]);
    setNameMonth(namesMonths[date.month()]);
  }, [date]);

  return (
    <CalendarContext.Provider
      value={{
        month,
        setMonth,
        year,
        setYear,
        day,
        setDay,
        weekDay,
        setWeekDay,
        nameMonth,
        setNameMonth,
        date,
        setDate,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
};
