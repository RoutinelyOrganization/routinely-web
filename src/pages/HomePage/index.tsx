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
import { useAuth } from "../../hooks/useAuth";
import { useEffect } from "react";

export default function HomePage() {
  const navigate = useNavigate();

  const { validateToken } = useAuth();

  useEffect(() => {
    const tokenLocal = window.localStorage.getItem("token");

    if (!tokenLocal) return;

    validateToken(tokenLocal, 2022, 12)
      .then(() => {
        navigate("/dashboardpage");
      })
      .catch(() => {
        return;
      });
  }, [navigate, validateToken]);

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
