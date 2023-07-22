import { useState } from "react";
import HeaderComponent from "../../components/Header";
import LogoSharedComponent from "../../components/LogoShared";
import {
  CaptionNewPasswordPageStyle,
  InputWrapperNewPasswordPageStyle,
  NewPasswordPageFormStyle,
  NewPasswordPageWrapperStyle,
  InputContainerNewPasswordPageStyle,
  TitleNewPasswordPageStyle,
  Teste,
} from "./NewPasswordPageStyles";
import NewPasswordPageImage from "../../assets/imagens/NewPasswordPageImage.svg";
import { InputStyle } from "../../components/Input/InputStyles";
import { useForm } from "react-hook-form";
import { ErrorMessageStyle, PasswordContainerStyle } from "../../components/SignUpForm/SignUpFormStyles";
import { ShowPasswordSignInPageStyle } from "../SignInPage/SignInPageStyles";
import ButtonComponent from "../../components/Button";

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
      <HeaderComponent />

      <NewPasswordPageWrapperStyle>
        <NewPasswordPageFormStyle onSubmit={handleSubmit(handleSubmitNewPassword)}>
          <LogoSharedComponent />
          <TitleNewPasswordPageStyle>Criar nova senha</TitleNewPasswordPageStyle>
          <CaptionNewPasswordPageStyle>
            Escolha uma nova senha abaixo ela precisa ser diferente da senha anterior
          </CaptionNewPasswordPageStyle>

          <InputContainerNewPasswordPageStyle>
            <InputWrapperNewPasswordPageStyle>
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
                <ShowPasswordSignInPageStyle onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? "ESCONDER" : "EXIBIR"}
                </ShowPasswordSignInPageStyle>
              </PasswordContainerStyle>
            </InputWrapperNewPasswordPageStyle>

            {errors.password && <ErrorMessageStyle>{errors.password.message}</ErrorMessageStyle>}
            <InputWrapperNewPasswordPageStyle>
              <PasswordContainerStyle>
                <InputStyle
                  type={showPassword ? "text" : "password"}
                  placeholder="Repetir senha"
                  {...register("newPassword", {
                    required: "Este campo é obrigatório",
                    validate: (value) => value === password || "As Senhas devem ser iguais",
                  })}
                />
                <ShowPasswordSignInPageStyle onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? "ESCONDER" : "EXIBIR"}
                </ShowPasswordSignInPageStyle>
              </PasswordContainerStyle>
            </InputWrapperNewPasswordPageStyle>

            {errors.newPassword && <ErrorMessageStyle>{errors.newPassword.message}</ErrorMessageStyle>}
          </InputContainerNewPasswordPageStyle>
          <ButtonComponent>Atualizar Senha</ButtonComponent>
        </NewPasswordPageFormStyle>
        <img src={NewPasswordPageImage} alt="Imagem da Página de nova senha" />
      </NewPasswordPageWrapperStyle>
    </>
  );
}
