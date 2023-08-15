import React from "react";
import { InputStyle } from "./InputStyles";

type IInput = React.InputHTMLAttributes<HTMLInputElement>

export default function InputComponent({ type, placeholder }: IInput) {
  return <InputStyle type={type} placeholder={placeholder} />;
}
