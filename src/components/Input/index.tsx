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
  errorMessage?: string;
  autoComplete?: string;
  as?: React.ElementType;
  value?: Date | string;
  defaultValue?: Date | string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event?: React.FocusEvent<HTMLInputElement>) => void;
}

export default function InputComponent({
  label,
  type,
  placeholder,
  register,
  hasError,
  id,
  children,
  errorMessage,
  autoComplete,
  as,
  value,
  defaultValue,
  onChange,
  onFocus,
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
          autoComplete={autoComplete}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          onFocus={onFocus}
        />
        <S.LabelInput $hasErro={hasError}>
          <S.BorderWhite></S.BorderWhite>
          <S.Label htmlFor={id}>{label}</S.Label>
        </S.LabelInput>
        {children}
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </S.InputContainer>
    </>
  );
}
