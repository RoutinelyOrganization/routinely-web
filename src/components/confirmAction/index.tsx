import * as S from "./styles";

interface IConfirmAction {
  children: string;
  setIsDeleteTaskOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ConfirmAction({ children, setIsDeleteTaskOpen }: IConfirmAction) {
  const handleClick = (operation: "cancel" | "not" | "yes") => {
    switch (operation) {
      case "not":
        break;

      case "yes":
        break;

      case "cancel":
        break;
    }
    setIsDeleteTaskOpen(false);
  };

  return (
    <S.Container>
      <S.Paragraph>{children}</S.Paragraph>
      <S.ContainerButton>
        <S.ButtonCancel onClick={() => handleClick("cancel")}>Cancelar</S.ButtonCancel>
        <S.ButtonNot onClick={() => handleClick("not")}>Não</S.ButtonNot>
        <S.ButtonYes onClick={() => handleClick("yes")}>Sim</S.ButtonYes>
      </S.ContainerButton>
    </S.Container>
  );
}
