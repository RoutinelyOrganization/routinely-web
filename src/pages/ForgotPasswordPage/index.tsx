import ButtonComponent from "../../components/Button";
import HeaderComponent from "../../components/Header";
import LogoSharedComponent from "../../components/LogoShared";
import SubTitleAuthComponent from "../../components/SubTitleAuth";
import { NoticeSpanStyle } from "../../components/SubTitleAuth/SubTitleAuthStyles";
import TitleAuthComponent from "../../components/TitleAuth";
import {
  ForgotPasswordImageContainer,
  ForgotPasswordPageStyle,
  ForgotPasswordPageWrapper,
} from "./ForgotPasswordPageStyles";
import forgotPasswordImage from "../../assets/imagens/forgotPasswordImage.svg";
import { InputStyle } from "../../components/Input/InputStyles";
import { ErrorMessageStyle } from "../../components/SignUpForm/SignUpFormStyles";
import { useForm } from "react-hook-form";
import { ScrollToTop } from "../../helpers/ScrollToTop";

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
      <ForgotPasswordPageStyle>
        <ForgotPasswordPageWrapper>
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
        </ForgotPasswordPageWrapper>
        <ForgotPasswordImageContainer>
          <img src={forgotPasswordImage} alt="Imagem da página de esqueci senha" />
        </ForgotPasswordImageContainer>
      </ForgotPasswordPageStyle>
    </>
  );
}
