import ButtonBackPage from "../ButtonBackPage";
import ContainerIcons from "../ContainerIcons";
import { HeaderStyle } from "./HeaderStyles";

export default function HeaderComponent() {
    return (
        <HeaderStyle>
            <ButtonBackPage />
            <ContainerIcons />
        </HeaderStyle>
    )
}