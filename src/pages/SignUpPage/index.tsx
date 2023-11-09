import signUpPageImage from "../../assets/imagens/signUpPageImage.svg";
import ButtonSocialComponent from "../../components/ButtonSocial";
import HeaderComponent from "../../components/Header";
import LinkAuthComponent from "../../components/LinkAuth";
import LogoSharedComponent from "../../components/LogoShared";
import SignUpFormComponent from "../../components/SignUpForm";
import TitleAuthComponent from "../../components/TitleAuth";
import { ScrollToTop } from "../../helpers/ScrollToTop";
import * as S from "./styles";

export default function SignUpPage() {
  return (
    <>
      <ScrollToTop />
      <HeaderComponent />
      <S.Main>
        <S.Wrapper>
          <LogoSharedComponent />
          <TitleAuthComponent>Crie sua conta</TitleAuthComponent>
          <SignUpFormComponent />
          <ButtonSocialComponent>Continuar com Google</ButtonSocialComponent>
          <LinkAuthComponent path="/signinpage" linkText="Entrar">
            Já possui uma conta?
          </LinkAuthComponent>
        </S.Wrapper>
        <img src={signUpPageImage} alt="Imagem da página de criar conta" />
      </S.Main>
    </>
  );
}
