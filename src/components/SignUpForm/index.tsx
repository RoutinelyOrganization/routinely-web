import { useForm } from "react-hook-form";
import { useState } from "react";

import ButtonComponent from "../Button";
import {
  ErrorMessageStyle,
  PasswordContainerStyle,
  ShowPasswordButtonStyle,
  SignUpFormStyle,
} from "./SignUpFormStyles";
import { InputStyle } from "../Input/InputStyles";
import { TermsOfUseCheckbox, TermsOfUseStyle } from "./SignUpFormStyles";
import signUp from "../../services/signUp";

interface ISignUpInput {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptedTerms: boolean;
}

export default function SignUpFormComponent() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm<ISignUpInput>();

  const password = watch("password")

  const handleSignUp = async ({ name, email, password, acceptedTerms}: ISignUpInput) => {
    const body = {
      name,
      email,
      password,
      acceptedTerms
    };
    console.log(body);
    try {
      const response = await signUp(body)
      console.log(response)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    // eslint-disable-next-line
    <SignUpFormStyle onSubmit={handleSubmit(handleSignUp)}>
      <InputStyle
        type="text"
        placeholder="Nome"
        {...register("name", {
          required: "Este campo é obrigatório.",
          minLength: {
            value: 3,
            message: "Este campo precisa ter no mínimo 3 letras.",
          },
          pattern: {
            value: /^[a-zA-ZÀ-ÿ\s~]+$/,
            message: "O campo nome não pode conter números nem caracteres especiais.",
          },
        })}
      />
      {errors.name && <ErrorMessageStyle>{errors.name.message}</ErrorMessageStyle>}

      <InputStyle
        type="email"
        placeholder="Email"
        {...register("email", {
          required: "Este campo é obrigatório.",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "Este campo precisa ser um email válido.",
          },
        })}
      />
      {errors.email && <ErrorMessageStyle>{errors.email.message}</ErrorMessageStyle>}

      <PasswordContainerStyle>
        <InputStyle
          type={showPassword ? "text" : "password"}
          placeholder="Senha"
          {...register("password", {
            required: "Este campo é obrigatório.",
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&*=])[a-zA-Z\d!@#$%&*=]{6,}$/,
              message:
                "A senha deve ter o mínimo de 6 caracteres e conter letras maiúsculas e minúsculas, números e símbolos como ! @ # $ % & * =",
            },
          })}
        />
        <ShowPasswordButtonStyle type="button" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? "ESCONDER" : "EXIBIR"}
        </ShowPasswordButtonStyle>
      </PasswordContainerStyle>
      {errors.password && <ErrorMessageStyle>{errors.password.message}</ErrorMessageStyle>}

      <PasswordContainerStyle>
        <InputStyle
          type={showConfirmPassword ? "text" : "password"}
          placeholder="Repetir senha"
          {...register("confirmPassword", {
            required: "Este campo é obrigatório.",
            validate: (value) => value === password || "As senhas devem ser iguais"
          })}
        />
        <ShowPasswordButtonStyle type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
          {showConfirmPassword ? "ESCONDER" : "EXIBIR"}
        </ShowPasswordButtonStyle>
      </PasswordContainerStyle>
      {errors.confirmPassword && <ErrorMessageStyle>{errors.confirmPassword.message}</ErrorMessageStyle>}
      <TermsOfUseStyle>
        <TermsOfUseCheckbox
          type="checkbox"
          onClick={() => setTermsAccepted(!termsAccepted)}
          checked={termsAccepted ? true : false}
          {...register("acceptedTerms", {
            required: {
              value: true,
              message: "O usuário deve estar de acordo com os termos.",
            },
          })}
        />
        <span>
          Declaro que li e concordo com os <a href="#">termos de uso e política de privacidade.</a>
        </span>
      </TermsOfUseStyle>
      {errors.acceptedTerms && <ErrorMessageStyle>{errors.acceptedTerms.message}</ErrorMessageStyle>}
      <ButtonComponent>Criar Conta</ButtonComponent>
    </SignUpFormStyle>
  );
}
