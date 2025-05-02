import { useNavigate } from "react-router-dom";
import completedTasks from "../../assets/imagens/homePage/completed_tasks.svg";
import completedTasksLitlle from "../../assets/imagens/homePage/completed_tasks_menor.svg";
import homePageBanner from "../../assets/imagens/homePage/homePageBanner.svg";
import Logo from "../../components/Logo";
import ButtonDownloadApp from "../../components/buttons/ButtonApp";
import { ScrollToTop } from "../../utils/ScrollToTop";
import * as S from "./styles";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <ScrollToTop />
      <S.Header>
        <Logo />
          <S.HomeButton secondaryColor={true} onClick={() => navigate("/welcomePage")}>
            Acesse
          </S.HomeButton>
      </S.Header>

      <S.Main>
        <S.Title>Domine sua rotina e conquiste o dia com nossa ferramenta Routinely.</S.Title>
        <S.ContainerCaptionImg>
          <div>
            <S.Caption>
              Simplifique sua vida, alcance seus objetivos e encontre equilíbrio com nossa ferramenta de organização de
              rotina pessoal.
            </S.Caption>
            <S.Button>Teste de graça</S.Button>
          </div>
          <img className="desktop" src={homePageBanner} alt="imagem inicial da home page" />
          <img className="tablet-horizontal" src={completedTasks} alt="tarefas concluídas" />
          <img className="tablet-vertical" src={completedTasksLitlle} alt="tarefas concluídas" />
        </S.ContainerCaptionImg>
        <hr />
        <ButtonDownloadApp />
      </S.Main>
    </>
  );
}
