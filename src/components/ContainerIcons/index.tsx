import IconNotifications from "../../assets/imagens/IconNotifications.svg";
import IconMenu from "../../assets/imagens/IconMenu.svg";
import { ContainerIconsStyle } from "./ContainerIconsStyle";

export default function ContainerIcons() {
  return (
    <ContainerIconsStyle>
      <img src={IconNotifications} alt="icone de notificações" />
      <img src={IconMenu} alt="icone do menu hanburguer" />
    </ContainerIconsStyle>
  );
}
