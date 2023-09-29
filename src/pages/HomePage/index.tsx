import { ButtonStyle } from "../../components/Button/ButtonStyles";
import Logo from "../../components/Logo";
import {
  ButtonHomePageComponent,
  CaptionHomePageComponent,
  HeaderHomePageComponent,
  MainHomePageComponent,
  TitleHomePageComponent,
} from "./HomePageStyles";
import homePageImage from "../../assets/imagens/homePageImage.svg";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../helpers/ScrollToTop";
import { useEffect } from "react";

export default function HomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    const tokenValidate = window.localStorage.getItem("token");

    if (tokenValidate) {
      navigate("/dashboardpage");
    }
  }, [navigate]);

  return (
    <>
      <ScrollToTop />
      <HeaderHomePageComponent>
        <Logo />
        <ButtonStyle children="Recursos" />
        <ButtonStyle children="Planos" />
        <ButtonStyle children="Acesse" $secondaryColor onClick={() => navigate("/welcomePage")} />
      </HeaderHomePageComponent>

      <MainHomePageComponent>
        <TitleHomePageComponent>
          Domine sua rotina e conquiste o dia com nossa ferramenta Routinely.
        </TitleHomePageComponent>
        <CaptionHomePageComponent>
          Simplifique sua vida, alcance seus objetivos e encontre equilíbrio com nossa ferramenta de organização de
          rotina pessoal.
        </CaptionHomePageComponent>
        <ButtonHomePageComponent>Teste de graça</ButtonHomePageComponent>
        <img src={homePageImage} alt="imagem inicial da home page" />
      </MainHomePageComponent>
    </>
  );
}
