import React from 'react';
import IconGoogle from '../../../assets/icons/IconGoogle';
import * as S from "./styles";

type IButtonSocial = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: string
}

export default function ButtonSocial({ children }: IButtonSocial) {
    return (
        <S.ButtonSocial type='button'>
            <IconGoogle />
            {children}
        </S.ButtonSocial>
    )
}