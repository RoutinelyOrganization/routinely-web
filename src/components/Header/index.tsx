import { UserContext } from "../../contexts/UserContext";
import ButtonBackPage from "../buttons/ButtonBackPage";
import ContainerIcons from "../containers/ContainerIcons";
import Logo from "../Logo";
import MenuHeader from "../MenuHeader";
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
        <Logo /> :
        <ButtonBackPage/>
      }
      {hasUser && (
        <>
          <ContainerIcons setIsShowMenu={setIsShowMenu} />
          {isShowMenu && <MenuHeader setIsShowMenu={setIsShowMenu} />}
        </>
      )}
    </S.Header>
  );
}