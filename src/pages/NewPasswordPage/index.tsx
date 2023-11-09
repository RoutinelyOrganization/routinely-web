import { useState } from "react";
import { useForm } from "react-hook-form";
import NewPasswordPageImage from "../../assets/imagens/NewPasswordPageImage.svg";
import ButtonComponent from "../../components/Button";
import HeaderComponent from "../../components/Header";
import { InputStyle } from "../../components/Input/InputStyles";
import LogoSharedComponent from "../../components/LogoShared";
import { ErrorMessageStyle, PasswordContainerStyle } from "../../components/SignUpForm/SignUpFormStyles";
import { ScrollToTop } from "../../helpers/ScrollToTop";
import { ShowPassword as ShowPasswordStyle } from "../SignInPage/styles";
import * as S from "./styles";

interface INewPasswordProps {
  password: string;
  newPassword: string;
}
export function NewPasswordPage() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<INewPasswordProps>();

  const password = watch("password");

  function handleSubmitNewPassword(data: INewPasswordProps) {
    console.log(data);
  }
  return (
    <>
      <ScrollToTop />
      <HeaderComponent />

      <S.Wrapper>
        <S.Form onSubmit={handleSubmit(handleSubmitNewPassword)}>
          <LogoSharedComponent />
          <S.Title>Criar nova senha</S.Title>
          <S.Caption>
            Escolha uma nova senha abaixo ela precisa ser diferente da senha anterior
          </S.Caption>

          <S.InputContainer>
            <S.InputWrapper>
              <PasswordContainerStyle>
                <InputStyle
                  type={showPassword ? "text" : "password"}
                  placeholder="Senha"
                  {...register("password", {
                    required: "Este campo é obrigatório",
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&*=])[a-zA-Z\d!@#$%&*=]{6,}$/,
                      message:
                        "A senha deve ter o mínimo de 6 caracteres e conter letras maiúsculas e minúsculas, números e símbolos como ! @ # $ % & * =",
                    },
                  })}
                />
                <ShowPasswordStyle onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? "ESCONDER" : "EXIBIR"}
                </ShowPasswordStyle>
              </PasswordContainerStyle>
            </S.InputWrapper>

            {errors.password && <ErrorMessageStyle>{errors.password.message}</ErrorMessageStyle>}
            <S.InputWrapper>
              <PasswordContainerStyle>
                <InputStyle
                  type={showPassword ? "text" : "password"}
                  placeholder="Repetir senha"
                  {...register("newPassword", {
                    required: "Este campo é obrigatório",
                    validate: (value) => value === password || "As Senhas devem ser iguais",
                  })}
                />
                <ShowPasswordStyle onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? "ESCONDER" : "EXIBIR"}
                </ShowPasswordStyle>
              </PasswordContainerStyle>
            </S.InputWrapper>

            {errors.newPassword && <ErrorMessageStyle>{errors.newPassword.message}</ErrorMessageStyle>}
          </S.InputContainer>
          <ButtonComponent>Atualizar Senha</ButtonComponent>
        </S.Form>
        <img src={NewPasswordPageImage} alt="Imagem da Página de nova senha" />
      </S.Wrapper>
    </>
  );
}
