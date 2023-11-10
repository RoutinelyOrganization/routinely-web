import { useForm } from "react-hook-form";
import forgotPasswordImage from "../../assets/imagens/forgotPasswordImage.svg";
import Button from "../../components/Button";
import Header from "../../components/Header";
import { InputStyle } from "../../components/Input/InputStyles";
import LogoShared from "../../components/LogoShared";
import { ErrorMessage as ErrorMessageStyle } from "../../components/SignUpForm/styles";
import SubTitleAuth from "../../components/SubTitleAuth";
import TitleAuth from "../../components/TitleAuth";
import { ScrollToTop } from "../../helpers/ScrollToTop";
import * as S from "./styles";

interface IForgotPassword {
  email: string;
}

export default function ForgotPasswordPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForgotPassword>();

  const submitForm = (data: IForgotPassword) => {
    console.log(data);
  };

  return (
    <>
      <ScrollToTop />
      <Header header="secundary"/>
      <S.Main>
        <S.Wrapper>
          <LogoShared />
          <TitleAuth>Esqueceu sua Senha?</TitleAuth>
          <SubTitleAuth>Digite o e-mail cadastrado na sua conta Routinely</SubTitleAuth>
          <form onSubmit={handleSubmit(submitForm)}>
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
            <S.Span>Você receberá um código de verificação no seu e-mail</S.Span>
            <Button>Enviar</Button>
          </form>
        </S.Wrapper>
        <S.ImageContainer>
          <img src={forgotPasswordImage} alt="Imagem da página de esqueci senha" />
        </S.ImageContainer>
      </S.Main>
    </>
  );
}
