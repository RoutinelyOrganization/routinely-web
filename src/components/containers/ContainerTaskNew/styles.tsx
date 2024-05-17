import styled from "styled-components";
import media from "../../../utils/functions/mediaQueries";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 40px;

  ${media.tablet} {
    grid-template-columns: 1fr 1fr;
  }

  ${media.mobile} {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;
