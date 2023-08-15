import React from "react";
import { ButtonStyle } from "./ButtonStyles";

type IButton = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: string
}

export default function ButtonComponent({ children }: IButton) {
    return (
        <ButtonStyle>{children}</ButtonStyle>
    )
}