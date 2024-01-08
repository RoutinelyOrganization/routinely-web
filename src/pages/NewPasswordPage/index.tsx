import { useState } from "react";
import { useForm } from "react-hook-form";
import NewPasswordPageImage from "../../assets/imagens/NewPasswordPageImage.svg";
import Header from "../../components/Header";
import Input from "../../components/Input";
import LogoShared from "../../components/LogoShared";
import Button from "../../components/buttons/Button";
import { ScrollToTop } from "../../utils/ScrollToTop";
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

  const handleSubmitNewPassword = (data: INewPasswordProps) => {
    console.log(data);
  };
  return (
    <>
      <ScrollToTop />
      <Header header="secundary" />

      <S.Wrapper>
        {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
        <S.Form onSubmit={handleSubmit(handleSubmitNewPassword)}>
          <LogoShared />
          <S.Title>Criar nova senha</S.Title>
          <S.Caption>Escolha uma nova senha abaixo ela precisa ser diferente da senha anterior</S.Caption>

          <S.InputContainer>
            <S.InputWrapper>
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Senha"
                register={register("password", {
                  required: "Este campo é obrigatório",
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&*=])[a-zA-Z\d!@#$%&*=]{6,}$/,
                    message:
                      "A senha deve ter o mínimo de 6 caracteres e conter letras maiúsculas e minúsculas, números e símbolos como ! @ # $ % & * =",
                  },
                })}
                errorMessage={errors.password && errors.password.message}
              >
                <>
                  <ShowPasswordStyle onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? "ESCONDER" : "EXIBIR"}
                  </ShowPasswordStyle>
                </>
              </Input>
            </S.InputWrapper>
            <S.InputWrapper>
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Repetir senha"
                register={register("newPassword", {
                  required: "Este campo é obrigatório",
                  validate: (value) => value === password || "As Senhas devem ser iguais",
                })}
                errorMessage={errors.newPassword && errors.newPassword.message}
              >
                <ShowPasswordStyle onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? "ESCONDER" : "EXIBIR"}
                </ShowPasswordStyle>
              </Input>
            </S.InputWrapper>
          </S.InputContainer>
          <Button>Atualizar Senha</Button>
        </S.Form>
        <img src={NewPasswordPageImage} alt="Imagem da Página de nova senha" />
      </S.Wrapper>
    </>
  );
}
