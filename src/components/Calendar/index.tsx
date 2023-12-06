import { useContext, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { CustomDemoItem, StyledDateCalendar } from "./styles";
import "dayjs/locale/pt-br";
import { CalendarContext } from "../../contexts/CalendarContext";

dayjs.locale("pt-br");

const customDayOfWeekFormatter = (day: string) => {
  const daysMap: { [key: string]: string } = {
    Sunday: "D",
    Monday: "S",
    Tuesday: "T",
    Wednesday: "Q",
    Thursday: "Q",
    Friday: "S",
    Saturday: "S",
  };

  return daysMap[day];
};

export default function DateCalendar() {
  const [date, setDate] = useState<Dayjs>(dayjs());
  const { setMonth, setYear } = useContext(CalendarContext);

  const handleChangeDate = (selectedValue: Dayjs) => {
    setDate(selectedValue);

    setMonth(date.month() + 1);
    setYear(date.year());
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <CustomDemoItem label={dayjs().format("dddd, DD MMMM")}>
        <StyledDateCalendar
          openTo="day"
          onChange={(event) => handleChangeDate(event as Dayjs)}
          value={date}
          views={["day", "month", "year"]}
          dayOfWeekFormatter={customDayOfWeekFormatter}
        />
      </CustomDemoItem>
    </LocalizationProvider>
  );
}
