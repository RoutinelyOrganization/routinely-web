import React from "react";
import * as S from "./styles";

type IButton = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: string
}

export default function ButtonComponent({ children }: IButton) {
    return (
        <S.Button>{children}</S.Button>
    )
}