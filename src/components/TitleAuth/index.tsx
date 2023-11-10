import * as S from "./styles";

interface ITitleAuth {
    children: string
}

export default function TitleAuth({ children }: ITitleAuth) {
    return (
        <S.Title>
            {children}
        </S.Title>
    )
}