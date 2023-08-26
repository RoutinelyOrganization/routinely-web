import {
  ContainerInputDateTimePopUpstyle,
  InputDateTimePopUpstyle,
  LabelInputDateTimePopUpstyle,
} from "./InputDateTimePopUpStyles";

interface IInputDateTimePopUpProps {
  name: string;
  type: string;
}

export default function InputDateTimePopUp({ name, type }: IInputDateTimePopUpProps) {
  return (
    <ContainerInputDateTimePopUpstyle>
      <InputDateTimePopUpstyle type={type} id={name} required />
      <LabelInputDateTimePopUpstyle htmlFor={name}>{name}</LabelInputDateTimePopUpstyle>
    </ContainerInputDateTimePopUpstyle>
  );
}
