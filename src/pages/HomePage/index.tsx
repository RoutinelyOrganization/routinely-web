import { useState } from "react";
import { useNavigate } from "react-router-dom";
import completedTasks from "../../assets/imagens/homePage/completed_tasks.svg";
import completedTasksLitlle from "../../assets/imagens/homePage/completed_tasks_menor.svg";
import homePageBanner from "../../assets/imagens/homePage/homePageBanner.svg";
import Logo from "../../components/Logo";
import MenuHeader from "../../components/MenuHeader";
import { Button as ButtonStyle } from "../../components/buttons/Button/styles";
import ContainerIcons from "../../components/containers/ContainerIcons";
import { ScrollToTop } from "../../helpers/ScrollToTop";
import * as S from "./styles";

export default function HomePage() {
  const navigate = useNavigate();
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const menuItems = [
    {
      name: "Recursos",
      url: "#",
      id: 1,
    },
    {
      name: "Planos",
      url: "#",
      id: 2,
    },
  ];

  return (
    <>
      <ScrollToTop />
      <S.Header>
        <Logo />
        <S.ContainerButtonsHeader>
          <ButtonStyle className="resources">Recursos</ButtonStyle>
          <ButtonStyle className="plans">Planos</ButtonStyle>
          <ButtonStyle $secondaryColor onClick={() => navigate("/welcomePage")}>
            Acesse
          </ButtonStyle>
          <ContainerIcons setIsShowMenu={setIsOpenMenu} />
          {isOpenMenu && <MenuHeader setIsShowMenu={setIsOpenMenu} menuItems={menuItems} />}
        </S.ContainerButtonsHeader>
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
      </S.Main>
    </>
  );
}
