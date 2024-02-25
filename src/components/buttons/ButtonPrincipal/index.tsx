import React from "react";
import * as S from "./styles";

type IButton = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: string;
  hover?: boolean;
  secondaryColor?: boolean;
};

export default function ButtonPrincipal({ children, hover = true, secondaryColor, ...props }: IButton) {
  return (
    <S.Button {...props} $hover={hover} $secondaryColor={secondaryColor}>
      {children}
    </S.Button>
  );
}
