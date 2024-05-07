import prev from "../../../assets/icons/navegação_anterior.svg";
import next from "../../../assets/icons/navigação_próximo.svg";
import * as S from "./styles";

interface IContainerPrevNextProps {
  setChangePage: React.Dispatch<React.SetStateAction<"prev" | "next" | null>>;
}
export default function ContainerPrevNext({ setChangePage }: IContainerPrevNextProps) {
  return (
    <S.Container>
      <img src={prev} alt="Icone para voltar" onClick={() => setChangePage("prev")} />
      <span></span>
      <img src={next} alt="Icone para avançar" onClick={() => setChangePage("next")} />
    </S.Container>
  );
}
