import { UserContext } from "../../contexts/UserContext";
import {
  MenuHeaderBarStyle,
  MenuHeaderContainerStyle,
  MenuHeaderItemStyle,
  MenuHeaderListStyle,
  MenuHeaderStyle,
} from "./MenuHeaderStyle";
import { useContext } from "react";
interface IMenuHeader {
  setIsShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MenuHeaderComponent({ setIsShowMenu }: IMenuHeader) {
  const { user , disconnectLoginContext } = useContext(UserContext);
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
      onclick: ()=> disconnectLoginContext()
    },
  ];

  return (
    <MenuHeaderContainerStyle>
      <MenuHeaderBarStyle>
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
      </MenuHeaderBarStyle>
      <MenuHeaderStyle>
        <MenuHeaderListStyle>
          {menuItems.map((menuItem) =>
            user.email || menuItem.name !== "Sair da conta" ? (
              <MenuHeaderItemStyle key={menuItem.id} onClick={menuItem.onclick}>{menuItem.name}</MenuHeaderItemStyle>
            ) : null,
          )}
        </MenuHeaderListStyle>
      </MenuHeaderStyle>
    </MenuHeaderContainerStyle>
  );
}
