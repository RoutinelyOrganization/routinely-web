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

interface ICalendar {
  version?: "expanded" | "compact";
  setReturnDateValue?: React.Dispatch<React.SetStateAction<Dayjs | null>>;
}

const customDayOfWeekFormatter = (day: string) => {
  const daysMap: { [key: string]: string } = {
    Do: "D",
    "2ª": "S",
    "3ª": "T",
    "4ª": "Q",
    "5ª": "Q",
    "6ª": "S",
    Sá: "S",
  };

  return daysMap[day];
};

export default function DateCalendar({ version = "expanded", setReturnDateValue }: ICalendar) {
  const [openCalendar, setOpenCalendar] = useState(false);
  const { setDate } = useContext(CalendarContext);
  const [valueDate, setValueDate] = useState<Dayjs>(dayjs());

  const handleChangeDate = (selectedValue: Dayjs) => {
    version === "expanded" && setDate(selectedValue);
    setValueDate(selectedValue);
    setReturnDateValue && setReturnDateValue(selectedValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <SComponents.CustonExibitionCalendar version={version}>
        <SComponents.Button onClick={() => setOpenCalendar(!openCalendar)} open={openCalendar}>
          <img src={ArrowDown} alt="" />
        </SComponents.Button>
        <SCalendar.CustomDemoItem label={dayjs().format("dddd, DD MMMM")}>
          <SComponents.MobileChangeDisplay open={openCalendar}>
            <SCalendar.StyledDateCalendar
              openTo="day"
              onChange={(event) => handleChangeDate(event as Dayjs)}
              value={valueDate}
              views={["day", "month", "year"]}
              dayOfWeekFormatter={customDayOfWeekFormatter}
              disablePast
            />
          </SComponents.MobileChangeDisplay>
        </SCalendar.CustomDemoItem>
      </SComponents.CustonExibitionCalendar>
    </LocalizationProvider>
  );
}
