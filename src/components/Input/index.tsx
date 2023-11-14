import { UseFormRegisterReturn } from "react-hook-form";
import ErrorMessage from "../ErrorMessage";
import * as S from "./styles";

interface IInput {
  children?: React.JSX.Element;
  label?: string;
  type?: string;
  placeholder?: string;
  register?: UseFormRegisterReturn<string>;
  hasError?: boolean;
  id?: string;
  required?: boolean;
  errorMessage?: string;

}

export default function InputComponent({ label,type, placeholder, register, hasError, id, required, children, errorMessage}: IInput) {
  return (
    <>
      <S.InputContainer>
        <S.InputStyle type={type} placeholder={placeholder} {...register} $hasErro={hasError} id={id} required={required} />
        <S.LabelInput $hasErro={hasError} htmlFor={id}>{label}</S.LabelInput>
        {children}
      </S.InputContainer>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>} 
    </>
      );
}
