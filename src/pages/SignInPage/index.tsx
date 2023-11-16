/* eslint-disable @typescript-eslint/no-misused-promises */
import { AxiosError, AxiosResponse } from "axios";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import infoErro from "../../assets/icons/infoErro.svg";
import signInPageImage from "../../assets/imagens/signInPageImage.svg";
import ErrorMessage from "../../components/ErrorMessage";
import Header from "../../components/Header";
import Input from "../../components/Input";
import LinkAuth from "../../components/LinkAuth";
import LogoShared from "../../components/LogoShared";
import Button from "../../components/buttons/Button";
import ButtonSocial from "../../components/buttons/ButtonSocial";
import { UserContext } from "../../contexts/UserContext";
import { ScrollToTop } from "../../helpers/ScrollToTop";
import { useAuth } from "../../hooks/useAuth";
import * as S from "./styles";
export interface ISingInProps {
  email: string;
  password: string;
  remember?: boolean;
}

interface IAuthorization {
  token: string,
  refreshToken: string,
  expiresIn: string
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

  const handleSubmitSignIn = async(Data: ISingInProps) => {
    try {
      setLoading(true);
      const response: AxiosResponse<IAuthorization > | undefined = await login(Data);
      console.log(response);
      
      if (response!.status === 200) {
        setUser(Data);
        if (Data.remember) {
          const {refreshToken,token} = response!.data;
          window.localStorage.setItem("token", response! && token);
          window.localStorage.setItem("refreshToken", response! && refreshToken);

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
      <Header header="secundary" />
      <S.Wrapper>
        <S.Form onSubmit={handleSubmit(handleSubmitSignIn)}>
          <LogoShared />
          <S.Title>Acessar conta</S.Title>
          <S.InputWrapper>
          <Input
                label="E-mail"
                hasError={erroEmail}
                type="email"
                id="E-mail"
                required
                register={register("email", {
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
              >
                <>
                  {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
                  {erroEmail && <img src={infoErro} alt="icone de info erro" />}
                </>
            </Input>
            
            
            <Input
                  label="Senha"
                  type={showPassord ? "text" : "password"}
                  hasError={erroPassword}
                  id="Password"
                  required
                  register={register("password", {
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
                >
                  <S.ShowPassword onClick={() => setShowPassword(!showPassord)}>
                  <>
                    {erroPassword ? (
                      <img src={infoErro} alt="icone de info erro" />
                    ) : showPassord ? (
                      "ESCONDER"
                    ) : (
                      "EXIBIR"
                    )}
                  </>
                </S.ShowPassword>
            </Input>
            {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
          </S.InputWrapper>
          <S.CheckboxAndForgetPasswordWrapper>
            <S.CheckboxWrapper>
              <label htmlFor="checkboxSignIn">Lembrar meu acesso</label>
              <S.Checkbox type="checkbox" id="checkboxSignIn" {...register("remember")} />
            </S.CheckboxWrapper>
            <S.ForgetPassword>
              {<Link to={"/forgotPasswordPage"}>Esqueci minha senha</Link>}
            </S.ForgetPassword>
          </S.CheckboxAndForgetPasswordWrapper>

          <S.ButtonWrapper>
            {loading ? (
              <Button disabled>Carregando...</Button>
            ) : (
              <Button>Fazer login</Button>
            )}

            {showError && <ErrorMessage>email ou senha inválidos</ErrorMessage>}

            <ButtonSocial disabled>Continuar com Google</ButtonSocial>
            <LinkAuth path="/signUpPage" linkText="Crie a sua.">
              Não tem uma conta?
            </LinkAuth>
          </S.ButtonWrapper>
        </S.Form>
        <img src={signInPageImage} alt="Imagem da página acessar conta" />
      </S.Wrapper>
    </>
  );
}
