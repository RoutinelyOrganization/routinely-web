/* eslint-disable @typescript-eslint/no-misused-promises */
import { useForm } from "react-hook-form";
import HeaderComponent from "../../components/Header";
import { InputContainer, InputStyle, LabelInput } from "../../components/Input/InputStyles";
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
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ButtonComponent from "../../components/Button";
import ButtonSocialComponent from "../../components/ButtonSocial";
import LinkAuthComponent from "../../components/LinkAuth";
import signInPageImage from "../../assets/imagens/signInPageImage.svg";
import { ScrollToTop } from "../../helpers/ScrollToTop";
import { UserContext } from "../../contexts/UserContext";
import { useAuth } from "../../hooks/useAuth";
import { AxiosError, AxiosResponse } from "axios";
import infoErro from "../../assets/icons/infoErro.svg";
export interface ISingInProps {
  email: string;
  password: string;
  remember?: boolean;
}

export function SignInPage() {
  const [showPassord, setShowPassword] = useState<boolean>(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const { showError, setShowError, loading, setLoading, setUser } = useContext(UserContext);
  const [erroEmail, setErrorEmail] = useState(false);
  const [erroPassword, setErrorPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISingInProps>();

  async function handleSubmitSignIn(Data: ISingInProps) {
    try {
      setLoading(true);
      const response: AxiosResponse<{ token: string }> | undefined = await login(Data);

      if (response!.status === 200) {
        setUser(Data);
        if (Data.remember) {
          const token = response!.data.token;
          window.localStorage.setItem("token", response! && token);
        }
        navigate("/dashboardpage");
        setShowError(false);
      }
    } catch (error) {
      const erro = error as AxiosError;
      console.error(erro.message);
      setErrorEmail(true);
      setErrorPassword(true);
      setShowError(true);
    } finally {
      setLoading(false);
    }
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
            <InputContainer>
              <InputStyle
                $hasErro={erroEmail}
                type="email"
                id="E-mail"
                required
                {...register("email", {
                  required: "Campo de preenchimento obrigatório",
                  onChange(event: React.ChangeEvent<HTMLInputElement>) {
                    if (event.target.value) {
                      setErrorEmail(false);
                      setErrorPassword(false);
                      setShowError(false);
                    }
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "preencha um e-mail válido",
                  },
                })}
              />
              <LabelInput $hasErro={erroEmail} htmlFor="E-mail">
                E-mail
              </LabelInput>
              {errors.email && <ErrorMessageStyle>{errors.email.message}</ErrorMessageStyle>}
              {erroEmail && <img src={infoErro} alt="icone de info erro" />}
            </InputContainer>

            <PasswordContainerStyle>
              <InputContainer>
                <InputStyle
                  type={showPassord ? "text" : "password"}
                  $hasErro={erroPassword}
                  id="Password"
                  required
                  {...register("password", {
                    required: "campo de preenchimento obrigatório",
                    onChange(event: React.ChangeEvent<HTMLInputElement>) {
                      if (event.target.value) {
                        setErrorPassword(false);
                        setShowError(false);
                        setErrorEmail(false);
                      }
                    },
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&*=])[a-zA-Z\d!@#$%&*=]{6,}$/,
                      message:
                        "A senha deve ter o mínimo de 6 caracteres e conter letras maiúsculas e minúsculas, números e símbolos como ! @ # $ % & * =",
                    },
                  })}
                />
                <LabelInput $hasErro={erroEmail} htmlFor="Password">
                  Senha
                </LabelInput>

                <ShowPasswordSignInPageStyle onClick={() => setShowPassword(!showPassord)}>
                  <>
                    {erroPassword ? (
                      <img src={infoErro} alt="icone de info erro" />
                    ) : showPassord ? (
                      "ESCONDER"
                    ) : (
                      "EXIBIR"
                    )}
                  </>
                </ShowPasswordSignInPageStyle>
              </InputContainer>
            </PasswordContainerStyle>
            {errors.password && <ErrorMessageStyle>{errors.password.message}</ErrorMessageStyle>}
          </InputWrapperSignInStyle>
          <CheckboxAndForgetPasswordWrapperSignInStyle>
            <CheckboxWrapperSignInStyle>
              <label htmlFor="checkboxSignIn">Lembrar meu acesso</label>
              <CheckboxSignInStyle type="checkbox" id="checkboxSignIn" {...register("remember")} />
            </CheckboxWrapperSignInStyle>
            <ForgetPasswordSignInStyle>
              {<Link to={"/forgotPasswordPage"}>Esqueci minha senha</Link>}
            </ForgetPasswordSignInStyle>
          </CheckboxAndForgetPasswordWrapperSignInStyle>

          <ButtonWrapperSignInStyle>
            {loading ? (
              <ButtonComponent disabled>Carregando...</ButtonComponent>
            ) : (
              <ButtonComponent>Fazer login</ButtonComponent>
            )}

            {showError && <ErrorMessageStyle>email ou senha inválidos</ErrorMessageStyle>}

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
