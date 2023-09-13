import ButtonSocialComponent from "../../components/ButtonSocial";
import HeaderComponent from "../../components/Header";
import LinkAuthComponent from "../../components/LinkAuth";
import LogoSharedComponent from "../../components/LogoShared";
import SignUpFormComponent from "../../components/SignUpForm";
import TitleAuthComponent from "../../components/TitleAuth";
import { SignUpPageStyle, SignUpPageWrapper } from "./SignUpPageStyles";
import signUpPageImage from "../../assets/imagens/signUpPageImage.svg";
import { ScrollToTop } from "../../helpers/ScrollToTop";

export default function SignUpPage() {
  return (
    <>
      <ScrollToTop />
      <HeaderComponent />
      <SignUpPageStyle>
        <SignUpPageWrapper>
          <LogoSharedComponent />
          <TitleAuthComponent>Crie sua conta</TitleAuthComponent>
          <SignUpFormComponent />
          <ButtonSocialComponent>Continuar com Google</ButtonSocialComponent>
          <LinkAuthComponent path="/signinpage" linkText="Entrar">
            Já possui uma conta?
          </LinkAuthComponent>
        </SignUpPageWrapper>
        <img src={signUpPageImage} alt="Imagem da página de criar conta" />
      </SignUpPageStyle>
    </>
  );
}
