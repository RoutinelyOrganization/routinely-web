import styled from "styled-components";
import media from "../../utils/functions/mediaQueries";

export const Container = styled.div`
  width: 156px;
  height: 55px;
  cursor: pointer;

  ${media.mobile} {
    width: 72px;
    height: 26px;
    > svg {
      width: 72px;
      height: 26px;
    }
  }
`;
