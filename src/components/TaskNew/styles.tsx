import styled from "styled-components";
import media from "../../utils/functions/mediaQueries";

export const Conteiner = styled.section``;

export const Select = styled.select`
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #d8d6dc;
  font-size: 1rem;
  margin-bottom: 32px;
  color: #5c59bb;
  max-width: 250px;
  width: 100%;

  ${media.tablet} {
    max-width: 200px;
  }

  ${media.mobile} {
    max-width: 100%;
  }
`;
