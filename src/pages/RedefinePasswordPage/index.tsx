import forgotPasswordImage from "../../assets/imagens/forgotPasswordImage.svg";
import ButtonPrincipal from "../../components/buttons/ButtonPrincipal";
import Header from "../../components/Header";
import Input from "../../components/Input";
import LinkAuth from "../../components/LinkAuth";
import LogoShared from "../../components/LogoShared";
import SubTitleAuth from "../../components/titles/SubTitleAuth";
import TitleAuth from "../../components/titles/TitleAuth";
import { ScrollToTop } from "../../utils/ScrollToTop";
import { ImageContainer as ImageContainerStyle } from "../ForgotPasswordPage/styles";
import * as S from "./styles";

export default function RedefinePasswordPage() {
  return (
    <>
      <ScrollToTop />
      <Header header="secundary" />
      <S.Main>
        <S.Wrapper>
          <LogoShared />
          <TitleAuth>Redefinir senha</TitleAuth>
          <SubTitleAuth>Insira o código de verificação enviado no email.</SubTitleAuth>
          <form>
            <Input type="text" placeholder="Código de verificação" />
            <LinkAuth path="#" linkText="Enviar Novamente">
              Não recebeu?
            </LinkAuth>
            <ButtonPrincipal>Confirmar</ButtonPrincipal>
          </form>
        </S.Wrapper>
        <ImageContainerStyle>
          <img src={forgotPasswordImage} alt="Imagem da página redefinir senha" />
        </ImageContainerStyle>
      </S.Main>
    </>
  );
}
