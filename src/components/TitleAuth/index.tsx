import { TitleAuthStyle } from "./TitleAuthStyles";

interface ITitleAuth {
    children: string
}

export default function TitleAuthComponent({ children }: ITitleAuth) {
    return (
        <TitleAuthStyle>
            {children}
        </TitleAuthStyle>
    )
}