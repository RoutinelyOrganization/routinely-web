import { useForm } from "react-hook-form";
import HeaderComponent from "../../components/Header";
import { InputStyle } from "../../components/Input/InputStyles";
import LogoSharedComponent from "../../components/LogoShared";
import {
  ButtonWrapperSignInStyle,
  CheckboxAndForgetPasswordWrapperSignInStyle,
  CheckboxSignInStyle,
  CheckboxWrapperSignInStyle,
  ForgetPasswordSignInStyle,
  InputWrapperSignInStyle,
  ShowPasswordSignInPageStyle,
  SignInPageWrapperStyle,
  SingInPageFormStyle,
  TitleSignInPageStyle,
} from "./SignInPageStyles";
import { ErrorMessageStyle, PasswordContainerStyle } from "../../components/SignUpForm/SignUpFormStyles";
import { useState } from "react";
import { Link } from "react-router-dom";
import ButtonComponent from "../../components/Button";
import ButtonSocialComponent from "../../components/ButtonSocial";
import LinkAuthComponent from "../../components/LinkAuth";
import signInPageImage from "../../assets/imagens/signInpageImage.svg";
import { ScrollToTop } from "../../helpers/ScrollToTop";

interface ISingInProps {
  email: string;
  password: string;
  rememberPassword: boolean;
}

export function SignInPage() {
  const [showPassord, setShowPassword] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISingInProps>();

  function handleSubmitSignIn(Data: ISingInProps) {
    console.log(Data);
  }

  return (
    <>
      <ScrollToTop />
      <HeaderComponent />
      <SignInPageWrapperStyle>
        <SingInPageFormStyle onSubmit={handleSubmit(handleSubmitSignIn)}>
          <LogoSharedComponent />
          <TitleSignInPageStyle>Acessar conta</TitleSignInPageStyle>
          <InputWrapperSignInStyle>
            <InputStyle
              type="email"
              placeholder="E-mail"
              {...register("email", {
                required: "Campo de preenchimento obrigatório",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "preencha um e-mail válido",
                },
              })}
            />
            {errors.email && <ErrorMessageStyle>{errors.email.message}</ErrorMessageStyle>}
            <PasswordContainerStyle>
              <InputStyle
                type={showPassord ? "text" : "password"}
                placeholder="Senha"
                {...register("password", {
                  required: "campo de preenchimento obrigatório",
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&*=])[a-zA-Z\d!@#$%&*=]{6,}$/,
                    message:
                      "A senha deve ter o mínimo de 6 caracteres e conter letras maiúsculas e minúsculas, números e símbolos como ! @ # $ % & * =",
                  },
                })}
              />
              <ShowPasswordSignInPageStyle onClick={() => setShowPassword(!showPassord)}>
                {showPassord ? "ESCONDER" : "EXIBIR"}
              </ShowPasswordSignInPageStyle>
            </PasswordContainerStyle>
            {errors.password && <ErrorMessageStyle>{errors.password.message}</ErrorMessageStyle>}
          </InputWrapperSignInStyle>

          <CheckboxAndForgetPasswordWrapperSignInStyle>
            <CheckboxWrapperSignInStyle>
              <label htmlFor="checkboxSignIn">Lembrar meu acesso</label>
              <CheckboxSignInStyle type="checkbox" id="checkboxSignIn" {...register("rememberPassword")} />
            </CheckboxWrapperSignInStyle>
            <ForgetPasswordSignInStyle>
              {<Link to={"/forgotPasswordPage"}>Esqueci minha senha</Link>}
            </ForgetPasswordSignInStyle>
          </CheckboxAndForgetPasswordWrapperSignInStyle>

          <ButtonWrapperSignInStyle>
            <ButtonComponent>Fazer login</ButtonComponent>
            <ButtonSocialComponent disabled>Continuar com Google</ButtonSocialComponent>
            <LinkAuthComponent path="/signUpPage" linkText="Crie a sua.">
              Não tem uma conta?
            </LinkAuthComponent>
          </ButtonWrapperSignInStyle>
        </SingInPageFormStyle>
        <img src={signInPageImage} alt="Imagem da página acessar conta" />
      </SignInPageWrapperStyle>
    </>
  );
}
