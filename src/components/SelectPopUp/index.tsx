import { ContainerSelectPopUpStyle, LabelPopUpStyle, OptionPopUpStyle, SelectPopUpStyle } from "./SelectPopUpStyles";

interface ISelectPopUpProps {
  name: string;
  values: string[];
}

export default function SelectPopUp({ name, values }: ISelectPopUpProps) {
  return (
    <ContainerSelectPopUpStyle>
      <SelectPopUpStyle id={name} required>
        <OptionPopUpStyle></OptionPopUpStyle>
        {values.map((value, id) => (
          <OptionPopUpStyle key={id}>{value}</OptionPopUpStyle>
        ))}
      </SelectPopUpStyle>
      <LabelPopUpStyle htmlFor={name}>{name}</LabelPopUpStyle>
    </ContainerSelectPopUpStyle>
  );
}
