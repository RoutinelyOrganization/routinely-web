import ButtonSocialComponent from "../../components/ButtonSocial";
import HeaderComponent from "../../components/Header";
import ImageAuthComponent from "../../components/ImageAuth";
import LinkAuthComponent from "../../components/LinkAuth";
import LogoComponent from "../../components/Logo";
import SignUpFormComponent from "../../components/SignUpForm";
import TitleAuthComponent from "../../components/TitleAuth";
import { SignUpPageStyle, SignUpPageWrapper } from "./SignUpPageStyles";

export default function SignUpPage() {
  return (
    <>
      <HeaderComponent />
      <SignUpPageStyle>
        <SignUpPageWrapper>
          <LogoComponent />
          <TitleAuthComponent />
          <SignUpFormComponent />
          <ButtonSocialComponent>Continuar com Google</ButtonSocialComponent>
          <LinkAuthComponent />
        </SignUpPageWrapper>
        <ImageAuthComponent />
      </SignUpPageStyle>
    </>
  );
}
