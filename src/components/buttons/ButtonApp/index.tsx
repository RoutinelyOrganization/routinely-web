import DownlodIcon from "../../../assets/icons/download.svg";
import * as S from "./styles";

export default function ButtonDownloadApp() {
  return (
    <S.ButtonApp>
      <img src={DownlodIcon} alt="Icone de download" />
      Baixe o aplicativo do Routinely
    </S.ButtonApp>
  );
}
