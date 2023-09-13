import { PopupButtonStyle } from "./PopupButtonStyle";

interface IPopupButton {
    children: string
}

export default function PopupButtonComponent({ children }: IPopupButton) {
    return (
        <PopupButtonStyle>
            {children}
        </PopupButtonStyle>
    )
}