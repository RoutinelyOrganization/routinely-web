import Button from "../../components/Button";
import ButtonSocial from "../../components/ButtonSocial";
import ImageAuth from "../../components/ImageAuth";
import LinkAuth from "../../components/LinkAuth";
import Logo from "../../components/Logo";
import SignUpForm from "../../components/SignUpForm";
import TermsOfUse from "../../components/TermsOfUse";
import TitleAuth from "../../components/TitleAuth";
import { SignUpPageComponent, SignUpPageWrapper } from "./SignUpPageStyles";

export default function SignUpPage() {
  return (
    <SignUpPageComponent>
      <SignUpPageWrapper>
        <Logo />
        <TitleAuth />
        <SignUpForm />
        <TermsOfUse />
        <Button>Redefinir senha</Button>
        <ButtonSocial>Continuar com Google</ButtonSocial>
        <LinkAuth />
      </SignUpPageWrapper>
      <ImageAuth />
    </SignUpPageComponent>
  );
}
