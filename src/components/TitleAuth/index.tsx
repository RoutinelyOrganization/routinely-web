import * as S from "./styles";

interface ITitleAuth {
    children: string
}

export default function TitleAuthComponent({ children }: ITitleAuth) {
    return (
        <S.Title>
            {children}
        </S.Title>
    )
}