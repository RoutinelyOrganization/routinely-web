import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import homePageImage from "../../assets/imagens/homePageImage.svg";
import Logo from "../../components/Logo";
import { Button as ButtonStyle } from "../../components/buttons/Button/styles";
import { ScrollToTop } from "../../helpers/ScrollToTop";
import { useAuth } from "../../hooks/useAuth";
import * as S from './styles';

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
      <S.Header>
        <Logo />
        <ButtonStyle children="Recursos" />
        <ButtonStyle children="Planos" />
        <ButtonStyle children="Acesse" $secondaryColor onClick={() => navigate("/welcomePage")} />
      </S.Header>

      <S.Main>
        <S.Title>
          Domine sua rotina e conquiste o dia com nossa ferramenta Routinely.
        </S.Title>
        <S.Caption>
          Simplifique sua vida, alcance seus objetivos e encontre equilíbrio com nossa ferramenta de organização de
          rotina pessoal.
        </S.Caption>
        <S.Button>Teste de graça</S.Button>
        <img src={homePageImage} alt="imagem inicial da home page" />
      </S.Main>
    </>
  );
}
