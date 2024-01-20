import image from "../../assets/icons/check.svg";
import * as S from "./styles";

interface ICheckBox {
  id: number | string;
  checked?: boolean;
}
export default function CustonCheckedBox({ id, checked }: ICheckBox) {
  return (
    <S.CustonCheckedBox htmlFor={`checkbox-${id}`}>
      <input id={`checkbox-${id}`} type="checkbox" checked={checked} />
      <span>
        <img src={image} alt="" />
      </span>
    </S.CustonCheckedBox>
  );
}
