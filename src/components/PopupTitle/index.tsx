import * as S from "./styles";

interface IPopupTitle {
    children: string
}

export default function PopupTitle({ children }: IPopupTitle) {
    return (
        <S.Title>{children}</S.Title>
    )
}