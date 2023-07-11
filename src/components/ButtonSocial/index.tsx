import React from 'react';
import IconGoogle from '../../assets/IconGoogle'
import { ButtonSocialComponent } from "./ButtonSocialStyles";

type ButtonSocialProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: string
}

export default function ButtonSocial({ children }: ButtonSocialProps) {
    return (
        <ButtonSocialComponent type='button'>
            <IconGoogle />
            {children}
        </ButtonSocialComponent>
    )
}