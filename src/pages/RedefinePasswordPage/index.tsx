import ButtonComponent from "../../components/Button";
import HeaderComponent from "../../components/Header";
import InputComponent from "../../components/Input";
import LinkAuthComponent from "../../components/LinkAuth";
import LogoSharedComponent from "../../components/LogoShared";
import SubTitleAuthComponent from "../../components/SubTitleAuth";
import TitleAuthComponent from "../../components/TitleAuth";
import { ForgotPasswordImageContainer } from "../ForgotPasswordPage/ForgotPasswordPageStyles";
import { RedefinePasswordPageStyle, RedefinePasswordPageWrapper } from "./RedefinePasswordPageStyle";
import forgotPasswordImage from "../../assets/imagens/forgotPasswordImage.svg";

export default function RedefinePasswordPage() {
  return (
    <>
      <HeaderComponent />
      <RedefinePasswordPageStyle>
        <RedefinePasswordPageWrapper>
          <LogoSharedComponent />
          <TitleAuthComponent>Redefinir senha</TitleAuthComponent>
          <SubTitleAuthComponent>Insira o código de verificação enviado no email.</SubTitleAuthComponent>
          <InputComponent type="text" placeholder="Código de verificação" />
          <LinkAuthComponent path="#" linkText="Enviar Novamente">
            Não recebeu?
          </LinkAuthComponent>
          <ButtonComponent>Confirmar</ButtonComponent>
        </RedefinePasswordPageWrapper>
        <ForgotPasswordImageContainer>
          <img src={forgotPasswordImage} alt="Imagem da página redefinir senha" />
        </ForgotPasswordImageContainer>
      </RedefinePasswordPageStyle>
    </>
  );
}
