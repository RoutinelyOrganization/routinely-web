import { UserContext } from "../../contexts/UserContext";
import ContainerIcons from "../ContainerIcons";
import LogoComponent from "../Logo";
import MenuHeaderComponent from "../MenuHeader";
import { HeaderStyle } from "./HeaderStyles";

import { useContext, useState } from "react";

export default function HeaderComponent() {
  const [isShowMenu, setIsShowMenu] = useState<boolean>(false);
  const { user } = useContext(UserContext);
  const token = localStorage.getItem("token");
  const hasUser = token || user.email;

  return (
    <HeaderStyle>
      <LogoComponent/>
      {hasUser && (
        <>
          <ContainerIcons setIsShowMenu={setIsShowMenu} />
          {isShowMenu && <MenuHeaderComponent setIsShowMenu={setIsShowMenu} />}
        </>
      )}
    </HeaderStyle>
  );
}
