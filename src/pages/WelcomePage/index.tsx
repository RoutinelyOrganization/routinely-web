import HeaderComponent from "../../components/Header";
import LogoSharedComponent from "../../components/LogoShared";
import {
  ButtonAccount,
  ButtonCreateAccount,
  CaptionWelcomePage,
  ContainerButtonWelcomePage,
  TitleWelcomePage,
  WelcomePageWrapper,
} from "./WelcomePageStyles";
import welcomePageImage from "../../assets/imagens/welcomePageImage.svg";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../helpers/ScrollToTop";

export function WelcomePage() {
  const navigate = useNavigate();

  return (
    <>
      <ScrollToTop />
      <HeaderComponent />
      <WelcomePageWrapper>
        <form>
          <LogoSharedComponent />
          <TitleWelcomePage>Boas-vindas</TitleWelcomePage>
          <CaptionWelcomePage>Escolha uma das opções para acessar </CaptionWelcomePage>
          <ContainerButtonWelcomePage>
            <ButtonAccount onClick={() => navigate("/SignInPage")}>Já tenho conta</ButtonAccount>
            <ButtonCreateAccount onClick={() => navigate("/SignUpPage")}>Criar conta</ButtonCreateAccount>
          </ContainerButtonWelcomePage>
        </form>
        <img src={welcomePageImage} alt="Imagem da página de boas vindas" />
      </WelcomePageWrapper>
    </>
  );
}
