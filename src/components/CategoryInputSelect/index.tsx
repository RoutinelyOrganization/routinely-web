import React, { useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import InputComponent from "../Input";
import * as S from "./styles";

const categories = ["Trabalho123456", "Estudos", "Casa", "Lazer"];
interface ICategoryInputProps {
  setReturnValue: React.Dispatch<React.SetStateAction<string>>;
  // register: (
  //   name: string,
  //   options?: RegisterOptions<Record<string, any>, string> | undefined,
  // ) => UseFormRegisterReturn<string>;
  register: UseFormRegisterReturn<string>;
  error: boolean;
  messageError?: string;
}

export default function CategoryInputSelect({ setReturnValue, register, error, messageError }: ICategoryInputProps) {
  const [categoriesSelected, setCategoriesSelected] = useState<string[]>(categories);
  const [value, setValue] = useState<string>("");
  const [visibility, setVisibility] = useState<boolean>(false);

  const handleSelectCategory = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setValue(value);
    setReturnValue(value);
    setVisibility(true);

    const newCategoriesSelected = value
      ? categories.filter((item) => item.toLowerCase().includes(value.toLowerCase()))
      : categories;

    setCategoriesSelected(newCategoriesSelected);
  };

  const handleClick = (category: string) => {
    setValue(category);
    setReturnValue(category);
    setVisibility(false);
  };

  const handleClickInput = (value: string) => {
    setVisibility(true);
    handleSelectCategory({ target: { value: value } } as React.ChangeEvent<HTMLInputElement>);
  };

  return (
    <S.Container>
      <InputComponent
        label="Categoria"
        placeholder="Categoria"
        onChange={handleSelectCategory}
        value={value}
        onFocus={() => handleClickInput(value)}
        hasError={error}
        errorMessage={messageError || ""}
        register={register}
      />
      <S.ContainerOptions isVisible={visibility} className="options">
        {categoriesSelected.map((category) => (
          <S.Option key={category} onClick={() => handleClick(category)}>
            {category}
          </S.Option>
        ))}
      </S.ContainerOptions>
    </S.Container>
  );
}
