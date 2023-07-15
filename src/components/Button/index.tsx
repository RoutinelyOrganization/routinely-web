import React from "react";
import { ButtonStyle } from "./ButtonStyles";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: string
}

export default function ButtonComponent({ children }: ButtonProps) {
    return (
        <ButtonStyle>{children}</ButtonStyle>
    )
}