import { styled } from "styled-components";
import media from "../../../mediaQueries";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;

  & > svg {
    cursor: pointer;
  }

  ${media.mobile} {
    gap: 14px;
  }
`;
