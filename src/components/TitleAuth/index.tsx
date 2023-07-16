import { TitleAuthStyle } from "./TitleAuthStyles";

interface TitleAuthProps {
    children: string
}

export default function TitleAuthComponent({ children }: TitleAuthProps) {
    return (
        <TitleAuthStyle>
            {children}
        </TitleAuthStyle>
    )
}