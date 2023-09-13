import ButtonBackPage from "../ButtonBackPage";
import ContainerIcons from "../ContainerIcons";
import MenuHeaderComponent from "../MenuHeader";
import { HeaderStyle } from "./HeaderStyles";

import { useState } from 'react'

export default function HeaderComponent() {

    const [isShowMenu, setIsShowMenu] = useState<boolean>(false)

    return (
        <HeaderStyle>
            <ButtonBackPage />
            <ContainerIcons setIsShowMenu={setIsShowMenu} />
            {isShowMenu && <MenuHeaderComponent setIsShowMenu={setIsShowMenu} />}
        </HeaderStyle>
    )
}