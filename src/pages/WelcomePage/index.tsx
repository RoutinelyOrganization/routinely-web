import { useNavigate } from "react-router-dom";
import welcomePageImage from "../../assets/imagens/welcomePageImage.svg";
import HeaderComponent from "../../components/Header";
import LogoSharedComponent from "../../components/LogoShared";
import { ScrollToTop } from "../../helpers/ScrollToTop";
import * as S from "./styles";


export function WelcomePage() {
  const navigate = useNavigate();

  return (
    <>
      <ScrollToTop />
      <HeaderComponent />
      <S.Wrapper>
        <form>
          <LogoSharedComponent />
          <S.Title>Boas-vindas</S.Title>
          <S.Caption>Escolha uma das opções para acessar </S.Caption>
          <S.ContainerButton>
            <S.ButtonAccount onClick={() => navigate("/SignInPage")}>Já tenho conta</S.ButtonAccount>
            <S.ButtonCreateAccount onClick={() => navigate("/SignUpPage")}>Criar conta</S.ButtonCreateAccount>
          </S.ContainerButton>
        </form>
        <img src={welcomePageImage} alt="Imagem da página de boas vindas" />
      </S.Wrapper>
    </>
  );
}
