import { useState } from "react";
import { useNavigate } from "react-router-dom";
import completedTasks from "../../assets/imagens/homePage/completed_tasks.svg";
import completedTasksLitlle from "../../assets/imagens/homePage/completed_tasks_menor.svg";
import homePageBanner from "../../assets/imagens/homePage/homePageBanner.svg";
import Logo from "../../components/Logo";
import MenuHeader from "../../components/MenuHeader";
import ButtonDownloadApp from "../../components/buttons/ButtonApp";
import ButtonPrincipal from "../../components/buttons/ButtonPrincipal";
import ContainerIcons from "../../components/containers/ContainerIcons";
import { ScrollToTop } from "../../utils/ScrollToTop";
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
          <ButtonPrincipal hover={false}>Recursos</ButtonPrincipal>
          <ButtonPrincipal hover={false}>Planos</ButtonPrincipal>
          <ButtonPrincipal secondaryColor={true} onClick={() => navigate("/welcomePage")}>
            Acesse
          </ButtonPrincipal>
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
        <hr />
        <ButtonDownloadApp />
      </S.Main>
    </>
  );
}
