import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { useAuth } from "../../hooks/useAuth";
import * as S from "./styles";

interface IMenuHeader {
  setIsShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MenuHeader({ setIsShowMenu }: IMenuHeader) {
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
    <S.Wrapper>
      <S.MenuBar>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          onClick={() => setIsShowMenu(false)}
        >
          <path
            d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z"
            fill="#F6F7F8"
          />
        </svg>
      </S.MenuBar>
      <S.Container>
        <S.List>
          {menuItems.map((menuItem) => (
            <S.Item key={menuItem.id} onClick={menuItem.onclick}>
              {menuItem.name}
            </S.Item>
          ))}
        </S.List>
      </S.Container>
    </S.Wrapper>
  );
}
