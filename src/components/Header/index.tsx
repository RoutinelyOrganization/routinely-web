import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { useAuth } from "../../hooks/useAuth";
import Logo from "../Logo";
import MenuHeader from "../MenuHeader";
import ButtonBackPage from "../buttons/ButtonBackPage";
import ContainerIcons from "../containers/ContainerIcons";
import * as S from "./styles";

import { useContext, useState } from "react";

export interface IHeader {
  header?: "primary" | "secundary";
}

export default function Header({ header = "primary" }: IHeader) {
  const [isShowMenu, setIsShowMenu] = useState<boolean>(false);
  const { user } = useContext(UserContext);
  const token = localStorage.getItem("token");
  const hasUser = token || user.email;

  const { disconnectLogin } = useAuth();
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const closeSectionUser = async () => {
    const token = localStorage.getItem("token");
    await disconnectLogin(token || "");
    setUser({ email: "", password: "", remember: false });
    navigate("/");
  };

  const menuItems = [
    {
      name: "Configurações",
      url: "#",
      id: 1,
    },
    {
      name: "Metas",
      url: "#",
      id: 2,
    },
    {
      name: "Notificações",
      url: "#",
      id: 3,
    },
    {
      name: "Sair da conta",
      url: "#",
      id: 4,
      onclick: () => closeSectionUser(),
    },
  ];

  return (
    <S.Header $header={header}>
      {header === "primary" ? (
        <>
          <ButtonBackPage />
          <Logo />
        </>
      ) : (
        <ButtonBackPage />
      )}
      {hasUser && (
        <>
          <ContainerIcons setIsShowMenu={setIsShowMenu} />
          {isShowMenu && <MenuHeader setIsShowMenu={setIsShowMenu} menuItems={menuItems} />}
        </>
      )}
    </S.Header>
  );
}
