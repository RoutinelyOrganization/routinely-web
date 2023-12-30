import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import infoErro from "../../assets/icons/infoErro.svg";
import signUp from "../../services/signUp";
import ErrorMessage from "../ErrorMessage";
import Input from "../Input";
import Button from "../buttons/Button";
import ButtonSocial from "../buttons/ButtonSocial";
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
  const [showError, setShowError] = useState(false);
  const [labelConfirmPassword, setLabelConfirmPassword] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<ISignUpInput>();

  const password = watch("password");
  const confirmPassword = watch("confirmPassword");

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
      const { response } = err as AxiosError<{ errors: { message: string }[] }>;
      if (response?.data.errors[0].message) {
        setShowError(true);
        setErroEmail(true);
        setLoading(false);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      console.log("executando");

      if (window.innerWidth < 904) {
        setLabelConfirmPassword("Repetir");
      } else {
        setLabelConfirmPassword("Repetir senha");
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    // eslint-disable-next-line
    <S.Form onSubmit={handleSubmit(handleSignUp)}>
      <Input
        label="Nome"
        hasError={erroName}
        type="text"
        id="name"
        required
        register={register("name", {
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
        errorMessage={errors.name && errors.name.message}
      ></Input>

      <Input
        label="Email"
        hasError={erroEmail}
        type="text"
        id="Email"
        required
        register={register("email", {
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
      >
        {showError && <img src={infoErro} alt="icone de info erro" />}
      </Input>
      {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
      {showError && <ErrorMessage>Este e-mail já está sendo utilizado</ErrorMessage>}
      <S.ContainerPasswords>
        <Input
          label="Senha"
          hasError={erroPassword}
          type={showPassword ? "text" : "password"}
          id="password"
          required
          register={register("password", {
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
              console.log(confirmPassword, "teste");
              if (matchErro) {
                setErroPassword(false);
              } else {
                setErroPassword(true);
              }
              if (target.value === confirmPassword && matchErro) {
                setErroConfirmPassword(false);
                setErroPassword(false);
              }
              if (target.value === "") {
                setErroPassword(false);
              }
            },
          })}
          errorMessage={errors.password && errors.password.message}
          autoComplete="password"
        >
          <>
            <S.ShowPasswordButton type="button" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? "ESCONDER" : "EXIBIR"}
            </S.ShowPasswordButton>
          </>
        </Input>

        <Input
          label={labelConfirmPassword}
          hasError={erroConfirmPassword}
          type={showConfirmPassword ? "text" : "password"}
          id="confirmPassword"
          required
          register={register("confirmPassword", {
            required: "Este campo é obrigatório.",
            validate: (value) => value === password || "As senhas devem ser iguais",
            onChange({ target }: React.ChangeEvent<HTMLInputElement>) {
              if (target.value !== password) {
                setErroConfirmPassword(true);
              } else {
                setErroConfirmPassword(false);
              }
              if (target.value === "") {
                setErroConfirmPassword(false);
              }
            },
          })}
          errorMessage={erroConfirmPassword ? errors.confirmPassword && errors.confirmPassword.message : undefined}
          autoComplete="confirmPassword"
        >
          <>
            <S.ShowPasswordButton type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
              {showConfirmPassword ? "ESCONDER" : "EXIBIR"}
            </S.ShowPasswordButton>
          </>
        </Input>
      </S.ContainerPasswords>

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
      {errors.acceptedTerms && <ErrorMessage>{errors.acceptedTerms.message}</ErrorMessage>}
      <S.ContainerButtons>
        {loading ? <Button disabled>Carregando...</Button> : <Button>Criar Conta</Button>}
        <ButtonSocial>Continuar com Google</ButtonSocial>
      </S.ContainerButtons>
    </S.Form>
  );
}
