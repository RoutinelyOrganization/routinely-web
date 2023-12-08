import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { CustomDemoItem, StyledDateCalendar } from "./styles";
import "dayjs/locale/pt-br";

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

  const handleChangeDate = (selectedValue: Dayjs | null) => {
    if (selectedValue) {
      setDate(selectedValue);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <CustomDemoItem label={dayjs().format("dddd, DD MMMM")}>
        <StyledDateCalendar
          openTo="day"
          onChange={(value: Dayjs) => handleChangeDate(value)}
          value={date}
          views={["day", "month"]}
          dayOfWeekFormatter={customDayOfWeekFormatter}
        />
      </CustomDemoItem>
    </LocalizationProvider>
  );
}
