import { useContext, useState } from "react";
import { useForm } from "react-hook-form";

import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import infoErro from "../../assets/icons/infoErro.svg";
import { UserContext } from "../../contexts/UserContext";
import signUp from "../../services/signUp";
import ButtonComponent from "../Button";
import { InputContainer, InputStyle, LabelInput } from "../Input/InputStyles";
import * as S from "./styles";

interface ISignUpInput {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptedTerms: boolean;
}

export default function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [erroName, setErroName] = useState(false);
  const [erroEmail, setErroEmail] = useState(false);
  const [erroPassword, setErroPassword] = useState(false);
  const [erroConfirmPassword, setErroConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { showError, setShowError } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<ISignUpInput>();

  const password = watch("password");

  const handleSignUp = async ({ name, email, password, acceptedTerms }: ISignUpInput) => {
    const body = {
      name,
      email,
      password,
      acceptedTerms,
    };
    try {
      setLoading(true);
      await signUp(body);
      setShowError(false);
      navigate("/signinpage");
    } catch (err) {
      const erro = err as AxiosError<{ message: string }>;
      console.error(erro.message);
      if (erro.response?.data.message) {
        setShowError(true);
        setErroEmail(true);
        setLoading(false);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    // eslint-disable-next-line
    <S.Form onSubmit={handleSubmit(handleSignUp)}>
      <InputContainer>
        <InputStyle
          $hasErro={erroName}
          type="text"
          id="name"
          required
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
            onChange(event: React.ChangeEvent<HTMLInputElement>) {
              event.target.value.length < 3 ? setErroName(true) : setErroName(false);
            },
          })}
        />
        <LabelInput $hasErro={erroName} htmlFor="name">
          Nome
        </LabelInput>
        {errors.name && <S.ErrorMessage>{errors.name.message}</S.ErrorMessage>}
      </InputContainer>

      <InputContainer>
        <InputStyle
          $hasErro={erroEmail}
          type="email"
          id="Email"
          required
          {...register("email", {
            required: "Este campo é obrigatório.",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Este campo precisa ser um email válido.",
            },
            onChange({ target }: React.ChangeEvent<HTMLInputElement>) {
              const matchErro = target.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
              if (matchErro) {
                setErroEmail(false);
                setShowError(false);
              } else {
                setErroEmail(true);
              }
            },
          })}
        />
        <LabelInput $hasErro={erroEmail} htmlFor="Email">
          Email
        </LabelInput>
        {errors.email && <S.ErrorMessage>{errors.email.message}</S.ErrorMessage>}
        {showError && <S.ErrorMessage>Esse email já está sendo usando</S.ErrorMessage>}
        {showError && <img src={infoErro} alt="icone de info erro" />}
      </InputContainer>

      <InputContainer>
        <S.PasswordContainer>
          <InputStyle
            $hasErro={erroPassword}
            type={showPassword ? "text" : "password"}
            id="password"
            required
            {...register("password", {
              required: "Este campo é obrigatório.",
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&*=])[a-zA-Z\d!@#$%&*=]{6,}$/,
                message:
                  "A senha deve ter o mínimo de 6 caracteres e conter letras maiúsculas e minúsculas, números e símbolos como ! @ # $ % & * =",
              },
              onChange({ target }: React.ChangeEvent<HTMLInputElement>) {
                const matchErro = target.value.match(
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&*=])[a-zA-Z\d!@#$%&*=]{6,}$/,
                );
                if (matchErro) {
                  setErroPassword(false);
                } else {
                  setErroPassword(true);
                }
              },
            })}
          />
          <LabelInput $hasErro={erroPassword} htmlFor="password">
            Senha
          </LabelInput>
          <S.ShowPasswordButton type="button" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? "ESCONDER" : "EXIBIR"}
          </S.ShowPasswordButton>
        </S.PasswordContainer>

        {errors.password && <S.ErrorMessage>{errors.password.message}</S.ErrorMessage>}
      </InputContainer>

      <InputContainer>
        <S.PasswordContainer>
          <InputStyle
            $hasErro={erroConfirmPassword}
            type={showConfirmPassword ? "text" : "password"}
            id="forgetPassword"
            required
            {...register("confirmPassword", {
              required: "Este campo é obrigatório.",
              validate: (value) => value === password || "As senhas devem ser iguais",
              onChange({ target }: React.ChangeEvent<HTMLInputElement>) {
                if (target.value !== password) {
                  setErroConfirmPassword(true);
                } else {
                  setErroConfirmPassword(false);
                }
              },
            })}
          />
          <LabelInput $hasErro={erroConfirmPassword} htmlFor="forgetPassword">
            Repetir Senha
          </LabelInput>
          <S.ShowPasswordButton type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
            {showConfirmPassword ? "ESCONDER" : "EXIBIR"}
          </S.ShowPasswordButton>
        </S.PasswordContainer>
        {errors.confirmPassword && <S.ErrorMessage>{errors.confirmPassword.message}</S.ErrorMessage>}
      </InputContainer>

      <S.TermsOfUseContainer>
        <S.Checkbox
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
      </S.TermsOfUseContainer>
      {errors.acceptedTerms && <S.ErrorMessage>{errors.acceptedTerms.message}</S.ErrorMessage>}
      {loading ? (
        <ButtonComponent disabled>Carregando...</ButtonComponent>
      ) : (
        <ButtonComponent>Criar Conta</ButtonComponent>
      )}
    </S.Form>
  );
}
