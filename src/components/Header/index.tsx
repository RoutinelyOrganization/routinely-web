import { UserContext } from "../../contexts/UserContext";
import ButtonBackPage from "../ButtonBackPage";
import ContainerIcons from "../ContainerIcons";
import LogoComponent from "../Logo";
import MenuHeaderComponent from "../MenuHeader";
import * as S from "./styles";

import { useContext, useState } from "react";

export interface IHeader {
  header?: 'primary' | 'secundary'
}

export default function Header({header = 'primary'}:IHeader) {
  const [isShowMenu, setIsShowMenu] = useState<boolean>(false);
  const { user } = useContext(UserContext);
  const token = localStorage.getItem("token");
  const hasUser = token || user.email;

  return (
    <S.Header header={header}>
      {header === 'primary' ?
        <LogoComponent /> :
        <ButtonBackPage/>
      }
      {hasUser && (
        <>
          <ContainerIcons setIsShowMenu={setIsShowMenu} />
          {isShowMenu && <MenuHeaderComponent setIsShowMenu={setIsShowMenu} />}
        </>
      )}
    </S.Header>
  );
}