import { ContainerInputPopUpStyle, InputPopUpLabelStyle, InputPopUpStyle } from "./InputPopUpStyles";

interface IInputPopUpProps {
  name: string;
  type: string;
}

export default function InputPopUp({ name, type }: IInputPopUpProps) {
  return (
    <ContainerInputPopUpStyle>
      <InputPopUpStyle type={type} id={name} required />
      <InputPopUpLabelStyle htmlFor={name}>{name}</InputPopUpLabelStyle>
    </ContainerInputPopUpStyle>
  );
}
