import ErrorMessage from "../ErrorMessage";
import * as S from "./styles";

interface ISelect {
  label: string;
  options: Array<string>;
  value: string[];
  error?: string;
  $hasError?: boolean;
  register: {
    name: string;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    onBlur: (event: React.FocusEvent<HTMLSelectElement>) => void;
    ref: (ref: HTMLSelectElement | null) => void;
  };
}

export default function Select({ label, value, options, register, error, $hasError }: ISelect) {
  return (
    <S.ContainerSelectPopUp>
      <S.SelectPopUp $hasErro={$hasError} id={label} {...register}>
        {options.map((option, index) => (
          <S.OptionPopUp key={option} value={value[index]}>
            {option}
          </S.OptionPopUp>
        ))}
      </S.SelectPopUp>
      <S.LabelSelectPopUp $hasErro={$hasError} htmlFor={label}>
        {label}
      </S.LabelSelectPopUp>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </S.ContainerSelectPopUp>
  );
}
