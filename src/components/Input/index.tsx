import React from "react";
import { InputComponent } from "./InputStyles";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>

export default function Input({ type, placeholder, onChange }: InputProps) {
  return <InputComponent type={type} placeholder={placeholder} onChange={onChange} />;
}
