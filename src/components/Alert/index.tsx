import ButtonPrincipal from "../buttons/ButtonPrincipal";
import * as S from "./styles";

interface IAlert {
  children: string;
  setIsAlertOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Alert({ children, setIsAlertOpen }: IAlert) {
  return (
    <S.Container>
      <p>{children}</p>
      <ButtonPrincipal onClick={() => setIsAlertOpen(false)}>Ok</ButtonPrincipal>
    </S.Container>
  );
}
