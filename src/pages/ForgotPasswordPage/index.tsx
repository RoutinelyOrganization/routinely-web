import HeaderComponent from "../../components/Header";
import LogoSharedComponent from "../../components/LogoShared";
import TitleAuthComponent from "../../components/TitleAuth";
import { ForgotPasswordPageStyle, ForgotPasswordPageWrapper } from "./ForgotPasswordPageStyles";

export default function ForgotPasswordPage() {
  return (
    <>
    <HeaderComponent />
      <ForgotPasswordPageStyle>
        <ForgotPasswordPageWrapper>
          <LogoSharedComponent />
          <TitleAuthComponent>Esqueceu sua Senha?</TitleAuthComponent>
        </ForgotPasswordPageWrapper>
      </ForgotPasswordPageStyle>
    </>
  );
}
