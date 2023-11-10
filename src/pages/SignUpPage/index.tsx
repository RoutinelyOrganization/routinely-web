import signUpPageImage from "../../assets/imagens/signUpPageImage.svg";
import ButtonSocial from "../../components/ButtonSocial";
import Header from "../../components/Header";
import LinkAuth from "../../components/LinkAuth";
import LogoShared from "../../components/LogoShared";
import SignUpForm from "../../components/SignUpForm";
import TitleAuth from "../../components/TitleAuth";
import { ScrollToTop } from "../../helpers/ScrollToTop";
import * as S from "./styles";

export default function SignUpPage() {
  return (
    <>
      <ScrollToTop />
      <Header header="secundary"/>
      <S.Main>
        <S.Wrapper>
          <LogoShared />
          <TitleAuth>Crie sua conta</TitleAuth>
          <SignUpForm />
          <ButtonSocial>Continuar com Google</ButtonSocial>
          <LinkAuth path="/signinpage" linkText="Entrar">
            Já possui uma conta?
          </LinkAuth>
        </S.Wrapper>
        <img src={signUpPageImage} alt="Imagem da página de criar conta" />
      </S.Main>
    </>
  );
}
