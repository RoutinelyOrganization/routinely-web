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

  const { validateToken,validateRefreshToken } = useAuth();

  useEffect(() => {
    const tokenLocal = window.localStorage.getItem("token");
    const refreshTokenLocal = window.localStorage.getItem("refreshToken");
  
    if (!tokenLocal || !refreshTokenLocal) return;

    validateToken(tokenLocal, refreshTokenLocal, 2022, 12)
      .then(() => {
        navigate("/dashboardpage");
      })
      .catch((error) => {
        console.log(error);
        return;
      });
  }, [navigate, validateToken, validateRefreshToken]);

  return (
    <>
      <ScrollToTop />
      <S.Header>
        <Logo />
        <ButtonStyle>Recursos</ButtonStyle>
        <ButtonStyle >Planos</ButtonStyle>
        <ButtonStyle $secondaryColor onClick={() => navigate("/welcomePage")} >Acesse</ButtonStyle>
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
