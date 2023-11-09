import forgotPasswordImage from "../../assets/imagens/forgotPasswordImage.svg";
import ButtonComponent from "../../components/Button";
import HeaderComponent from "../../components/Header";
import { InputStyle } from "../../components/Input/InputStyles";
import LinkAuthComponent from "../../components/LinkAuth";
import LogoSharedComponent from "../../components/LogoShared";
import SubTitleAuthComponent from "../../components/SubTitleAuth";
import TitleAuthComponent from "../../components/TitleAuth";
import { ScrollToTop } from "../../helpers/ScrollToTop";
import { ImageContainer as ImageContainerStyle } from "../ForgotPasswordPage/styles";
import * as S from "./styles";


export default function RedefinePasswordPage() {
  return (
    <>
      <ScrollToTop />
      <HeaderComponent />
      <S.Main>
        <S.Wrapper>
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
        </S.Wrapper>
        <ImageContainerStyle>
          <img src={forgotPasswordImage} alt="Imagem da página redefinir senha" />
        </ImageContainerStyle>
      </S.Main>
    </>
  );
}
