import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/pt-br";
import { useContext, useState } from "react";
import ArrowDown from "../../assets/icons/arrowDown.svg";
import { CalendarContext } from "../../contexts/CalendarContext";
import * as SComponents from "./styledComponents";
import * as SCalendar from "./stylesCalendar";

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
  // const [date, setDate] = useState<Dayjs>(dayjs());
  const [openCalendar, setOpenCalendar] = useState(false);
  const { setDate, date } = useContext(CalendarContext);

  const handleChangeDate = (selectedValue: Dayjs) => {
    setDate(selectedValue);

    // setMonth(date.month() + 1);
    // setYear(date.year());
    // setDay(date.date());
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <SComponents.CustonExibitionCalendar>
        <SComponents.Button onClick={() => setOpenCalendar(!openCalendar)} open={openCalendar}>
          <img src={ArrowDown} alt="" />
        </SComponents.Button>
        <SCalendar.CustomDemoItem label={dayjs().format("dddd, DD MMMM")}>
          <SComponents.MobileChangeDisplay open={openCalendar}>
            <SCalendar.StyledDateCalendar
              openTo="day"
              onChange={(event) => handleChangeDate(event as Dayjs)}
              value={date}
              views={["day", "month", "year"]}
              dayOfWeekFormatter={customDayOfWeekFormatter}
            />
          </SComponents.MobileChangeDisplay>
        </SCalendar.CustomDemoItem>
      </SComponents.CustonExibitionCalendar>
    </LocalizationProvider>
  );
}
