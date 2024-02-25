import { styled } from "styled-components";
import media from "../../../utils/functions/mediaQueries";

export const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 28px;
  text-align: left;
  color: #171a21;
  margin-left: 10px;
  ${media.tablet} {
    font-size: 1rem;
  }
`;
