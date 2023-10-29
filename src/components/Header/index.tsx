import { UserContext } from "../../contexts/UserContext";
import ButtonBackPage from "../ButtonBackPage";
import ContainerIcons from "../ContainerIcons";
import MenuHeaderComponent from "../MenuHeader";
import { HeaderStyle } from "./HeaderStyles";

import { useState, useContext } from "react";

export default function HeaderComponent() {
  const [isShowMenu, setIsShowMenu] = useState<boolean>(false);
  const { user } = useContext(UserContext);
  const token = localStorage.getItem("token");
  const hasUser = token || user.email;

  return (
    <HeaderStyle>
      <ButtonBackPage />
      {hasUser && (
        <>
          <ContainerIcons setIsShowMenu={setIsShowMenu} />
          {isShowMenu && <MenuHeaderComponent setIsShowMenu={setIsShowMenu} />}
        </>
      )}
    </HeaderStyle>
  );
}
