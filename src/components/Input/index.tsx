import { UseFormRegisterReturn } from "react-hook-form";
import ErrorMessage from "../ErrorMessage";
import * as S from "./styles";

interface IInput {
  children?: React.ReactNode;
  label?: string;
  type?: string;
  placeholder?: string;
  register?: UseFormRegisterReturn<string>;
  hasError?: boolean;
  id?: string;
  required?: boolean;
  errorMessage?: string;
  autoComplete?: string;
  as?: React.ElementType;
}

export default function InputComponent({
  label,
  type,
  placeholder,
  register,
  hasError,
  id,
  required,
  children,
  errorMessage,
  autoComplete,
  as,
}: IInput) {
  return (
    <>
      <S.InputContainer>
        <S.InputStyle
          as={as}
          type={type}
          placeholder={placeholder}
          {...register}
          $hasErro={hasError}
          id={id}
          required={required}
          autoComplete={autoComplete}
        />
        <S.LabelInput $hasErro={hasError}>
          {" "}
          <S.BorderWhite></S.BorderWhite>
          <S.Label htmlFor={id}>{label}</S.Label>
        </S.LabelInput>
        {children}
      </S.InputContainer>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </>
  );
}
