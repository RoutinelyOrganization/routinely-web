import calendarImage from "../../assets/imagens/calendarImage.svg";
import * as S from "./styles";

export default function ImageCalendar() {
    return (
        <S.Container>
            <img src={calendarImage} alt="calendar image" />
        </S.Container>
    )
}