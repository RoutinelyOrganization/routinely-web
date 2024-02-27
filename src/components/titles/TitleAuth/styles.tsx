import styled from "styled-components";
import media from "../../../utils/functions/mediaQueries";

export const Title = styled.h1`
  color: #171a21;
  font-size: 48px;
  font-weight: 700;
  line-height: 52px;

  ${media.mobile} {
    font-size: 32px;
    line-height: 36px;
  }
`;
