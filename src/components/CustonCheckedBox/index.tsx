import { useState } from "react";
import image from "../../assets/icons/check.svg";
import * as S from "./styles";

interface ICheckBox {
  id: number | string;
  checked?: boolean;
}
export default function CustonCheckedBox({ id, checked = false }: ICheckBox) {
  const [isChecked, setIsChecked] = useState<boolean>(checked);
  return (
    <S.CustonCheckedBox htmlFor={`checkbox-${id}`}>
      <input id={`checkbox-${id}`} type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
      <span>
        <img src={image} alt="" />
      </span>
    </S.CustonCheckedBox>
  );
}
