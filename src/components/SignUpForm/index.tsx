import ButtonComponent from "../Button";
import Input from "../Input";
import TermsOfUseComponent from "../TermsOfUse";
import { SignUpFormStyle } from "./SignUpForm";

export default function SignUpFormComponent() {

  return (
    <SignUpFormStyle>
      <Input type="text" placeholder="Nome" />
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Senha" />
      <Input type="password" placeholder="Repetir senha" />
      <TermsOfUseComponent />
      <ButtonComponent>Criar Conta</ButtonComponent>
    </SignUpFormStyle>
  );
}
