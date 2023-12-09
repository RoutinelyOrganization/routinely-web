import { createContext, useState } from "react";

interface ICalendarProps {
  children: React.ReactNode;
}

interface ICalendarContext {
  month: number;
  setMonth: React.Dispatch<React.SetStateAction<number>>;
  year: number;
  setYear: React.Dispatch<React.SetStateAction<number>>;
}
export const CalendarContext = createContext<ICalendarContext>({} as ICalendarContext);
CalendarContext.displayName = "calendar context";

export const CalendarProvider: React.FC<ICalendarProps> = ({ children }) => {
  const DateNow = new Date();
  const monthCurrent = DateNow.getMonth() + 1;
  const yearCurrent = DateNow.getFullYear();

  const [month, setMonth] = useState(monthCurrent);
  const [year, setYear] = useState(yearCurrent);
  return <CalendarContext.Provider value={{ month, setMonth, year, setYear }}>{children}</CalendarContext.Provider>;
};
