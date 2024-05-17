import { useContext, useEffect, useState } from "react";
import iconCalendar from "../../assets/icons/Frame 56.svg";
import { CalendarContext } from "../../contexts/CalendarContext";
import DateCalendar from "../Calendar";
import ContainerPrevNext from "../containers/ContainerPrevNext";
import * as S from "./styles";
export default function SectionCalendar() {
  const [openCalendar, setOpenCalendar] = useState(false);
  const [changePage, setChangePage] = useState<"prev" | "next" | null>(null);
  const { day, nameMonth, weekDay, year, setDate, date } = useContext(CalendarContext);

  useEffect(() => {
    if (changePage === "next") {
      setDate(date.add(1, "day"));
      setChangePage(null);
      return;
    }
    if (changePage === "prev") {
      setDate(date.subtract(1, "day"));
      setChangePage(null);
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [changePage]);

  return (
    <>
      <S.Container>
        <h1>
          {weekDay}, {day} de {nameMonth} de {year}
        </h1>
        <S.ContainerIcons>
          <img src={iconCalendar} alt="" onClick={() => setOpenCalendar(!openCalendar)} />
          <ContainerPrevNext setChangePage={setChangePage} />
          <S.ContainerCalendar openCalendar={openCalendar}>
            <DateCalendar />
          </S.ContainerCalendar>
        </S.ContainerIcons>
      </S.Container>
      <S.SecondContainerCalendar>
        <DateCalendar />
      </S.SecondContainerCalendar>
    </>
  );
}
