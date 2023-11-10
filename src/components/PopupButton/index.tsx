import * as S from "./styles";

interface IPopupButton {
    children: string
}

export default function PopupButton({ children }: IPopupButton) {
    return (
        <S.Button>
            {children}
        </S.Button>
    )
}