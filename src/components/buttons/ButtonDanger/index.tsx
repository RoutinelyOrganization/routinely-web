import React from "react";
import * as S from "./styles";

type IButton = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: string;
  whidth?: string;
};

export default function ButtonDanger({ children, whidth, ...props }: IButton) {
  return (
    <S.Button {...props} $width={whidth}>
      {children}
    </S.Button>
  );
}
