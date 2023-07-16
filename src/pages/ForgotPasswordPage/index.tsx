import ButtonComponent from "../../components/Button";
import HeaderComponent from "../../components/Header";
import InputComponent from "../../components/Input";
import LogoSharedComponent from "../../components/LogoShared";
import SubTitleAuthComponent from "../../components/SubTitleAuth";
import { NoticeSpanStyle } from "../../components/SubTitleAuth/SubTitleAuthStyles";
import TitleAuthComponent from "../../components/TitleAuth";
import { ForgotPasswordImageContainer, ForgotPasswordPageStyle, ForgotPasswordPageWrapper } from "./ForgotPasswordPageStyles";
import forgotPasswordImage from "../../assets/imagens/forgotPasswordImage.svg";

export default function ForgotPasswordPage() {
  return (
    <>
      <HeaderComponent />
      <ForgotPasswordPageStyle>
        <ForgotPasswordPageWrapper>
          <LogoSharedComponent />
          <TitleAuthComponent>Esqueceu sua Senha?</TitleAuthComponent>
          <SubTitleAuthComponent>
            Digite o e-mail cadastrado na sua conta Routinely
          </SubTitleAuthComponent>
          <InputComponent type="email" placeholder="Email" />
          <NoticeSpanStyle>
            Você receberá um código de verificação no seu e-mail
          </NoticeSpanStyle>
          <ButtonComponent>Enviar</ButtonComponent>
        </ForgotPasswordPageWrapper>
        <ForgotPasswordImageContainer>
        <img src={forgotPasswordImage} alt="Imagem da página de esqueci senha" />
        </ForgotPasswordImageContainer>
      </ForgotPasswordPageStyle>
    </>
  );
}
