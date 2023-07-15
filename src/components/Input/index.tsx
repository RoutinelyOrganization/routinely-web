import React from "react";
import { InputStyle } from "./InputStyles";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>

export default function InputComponent({ type, placeholder }: InputProps) {
  return <InputStyle type={type} placeholder={placeholder} />;
}
