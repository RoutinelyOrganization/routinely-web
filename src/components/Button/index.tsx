import React from "react";
import { ButtonComponent } from "./ButtonStyles";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: string
}

export default function Button({ children }: ButtonProps) {
    return (
        <ButtonComponent type="button">{children}</ButtonComponent>
    )
}