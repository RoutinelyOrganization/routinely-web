import React from 'react';
import IconGoogle from '../../assets/IconGoogle'
import { ButtonSocialStyle } from "./ButtonSocialStyles";

type ButtonSocialProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: string
}

export default function ButtonSocialComponent({ children }: ButtonSocialProps) {
    return (
        <ButtonSocialStyle type='button'>
            <IconGoogle />
            {children}
        </ButtonSocialStyle>
    )
}