import { useForm } from "react-hook-form";
import forgotPasswordImage from "../../assets/imagens/forgotPasswordImage.svg";
import ButtonComponent from "../../components/Button";
import HeaderComponent from "../../components/Header";
import { InputStyle } from "../../components/Input/InputStyles";
import LogoSharedComponent from "../../components/LogoShared";
import { ErrorMessageStyle } from "../../components/SignUpForm/SignUpFormStyles";
import SubTitleAuthComponent from "../../components/SubTitleAuth";
import { NoticeSpanStyle } from "../../components/SubTitleAuth/SubTitleAuthStyles";
import TitleAuthComponent from "../../components/TitleAuth";
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
      <HeaderComponent />
      <S.Main>
        <S.Wrapper>
          <LogoSharedComponent />
          <TitleAuthComponent>Esqueceu sua Senha?</TitleAuthComponent>
          <SubTitleAuthComponent>Digite o e-mail cadastrado na sua conta Routinely</SubTitleAuthComponent>
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
            <NoticeSpanStyle>Você receberá um código de verificação no seu e-mail</NoticeSpanStyle>
            <ButtonComponent>Enviar</ButtonComponent>
          </form>
        </S.Wrapper>
        <S.ImageContainer>
          <img src={forgotPasswordImage} alt="Imagem da página de esqueci senha" />
        </S.ImageContainer>
      </S.Main>
    </>
  );
}
