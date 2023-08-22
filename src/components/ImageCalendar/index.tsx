import { ImageCalendarStyle } from "./ImageCalendarStyle";
import calendarImage from "../../assets/imagens/calendarImage.svg";

export default function ImageCalendar() {
    return (
        <ImageCalendarStyle>
            <img src={calendarImage} alt="calendar image" />
        </ImageCalendarStyle>
    )
}