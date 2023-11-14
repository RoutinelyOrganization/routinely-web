import ErrorMessage from '../ErrorMessage';
import * as S from './styles';

interface ISelect {
  label: string;
  options: Array<string>;
  error?: string;
  register: {
    name: string;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    onBlur: (event: React.FocusEvent<HTMLSelectElement>) => void;
    ref: (ref: HTMLSelectElement | null) => void;
  }
}

export default function Select({ label, options, register, error }: ISelect) {
  return (
    <S.ContainerSelectPopUp>
      <S.SelectPopUp id={label} {...register}>
        {options.map(option => <S.OptionPopUp key={option}>{option}</S.OptionPopUp>)}
      </S.SelectPopUp>
      <S.LabelSelectPopUp htmlFor={label}>{label}</S.LabelSelectPopUp>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </S.ContainerSelectPopUp>
  );
}

