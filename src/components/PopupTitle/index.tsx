import { PopupTitleStyle } from "./PopupTitleStyle";

interface IPopupTitle {
    children: string
}

export default function PopupTitleComponent({ children }: IPopupTitle) {
    return (
        <PopupTitleStyle>{children}</PopupTitleStyle>
    )
}