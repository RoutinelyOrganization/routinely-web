import React from 'react';
import IconGoogle from '../../assets/IconGoogle'
import { ButtonSocialStyle } from "./ButtonSocialStyles";

type IButtonSocial = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: string
}

export default function ButtonSocialComponent({ children }: IButtonSocial) {
    return (
        <ButtonSocialStyle type='button'>
            <IconGoogle />
            {children}
        </ButtonSocialStyle>
    )
}