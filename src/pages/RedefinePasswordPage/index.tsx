import ButtonComponent from "../../components/Button";
import HeaderComponent from "../../components/Header";
import LinkAuthComponent from "../../components/LinkAuth";
import LogoSharedComponent from "../../components/LogoShared";
import SubTitleAuthComponent from "../../components/SubTitleAuth";
import TitleAuthComponent from "../../components/TitleAuth";
import { ForgotPasswordImageContainer } from "../ForgotPasswordPage/ForgotPasswordPageStyles";
import { RedefinePasswordPageStyle, RedefinePasswordPageWrapper } from "./RedefinePasswordPageStyle";
import forgotPasswordImage from "../../assets/imagens/forgotPasswordImage.svg";
import { InputStyle } from "../../components/Input/InputStyles";
import { ScrollToTop } from "../../helpers/ScrollToTop";

export default function RedefinePasswordPage() {
  return (
    <>
      <ScrollToTop />
      <HeaderComponent />
      <RedefinePasswordPageStyle>
        <RedefinePasswordPageWrapper>
          <LogoSharedComponent />
          <TitleAuthComponent>Redefinir senha</TitleAuthComponent>
          <SubTitleAuthComponent>Insira o código de verificação enviado no email.</SubTitleAuthComponent>
          <form>
            <InputStyle type="text" placeholder="Código de verificação" />
            <LinkAuthComponent path="#" linkText="Enviar Novamente">
              Não recebeu?
            </LinkAuthComponent>
            <ButtonComponent>Confirmar</ButtonComponent>
          </form>
        </RedefinePasswordPageWrapper>
        <ForgotPasswordImageContainer>
          <img src={forgotPasswordImage} alt="Imagem da página redefinir senha" />
        </ForgotPasswordImageContainer>
      </RedefinePasswordPageStyle>
    </>
  );
}
