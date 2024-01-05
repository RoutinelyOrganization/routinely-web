import { useForm } from "react-hook-form";
import forgotPasswordImage from "../../assets/imagens/forgotPasswordImage.svg";
import ErrorMessage from "../../components/ErrorMessage";
import Header from "../../components/Header";
import Input from "../../components/Input";
import LogoShared from "../../components/LogoShared";
import Button from "../../components/buttons/Button";
import SubTitleAuth from "../../components/titles/SubTitleAuth";
import TitleAuth from "../../components/titles/TitleAuth";
import { ScrollToTop } from "../../utils/ScrollToTop";
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
      <Header header="secundary" />
      <S.Main>
        <S.Wrapper>
          <LogoShared />
          <TitleAuth>Esqueceu sua Senha?</TitleAuth>
          <SubTitleAuth>Digite o e-mail cadastrado na sua conta Routinely</SubTitleAuth>
          {/*eslint-disable-next-line @typescript-eslint/no-misused-promises */}
          <form onSubmit={handleSubmit(submitForm)}>
            <Input
              type="text"
              placeholder="Email"
              register={register("email", {
                required: "Este campo é obrigatório.",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Este campo precisa ser um email válido.",
                },
              })}
            ></Input>
            {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
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
