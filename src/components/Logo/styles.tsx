import styled from "styled-components";
import media from "../../mediaQueries";

export const Container = styled.div`
  width: 156px;
  height: 55px;

  ${media.mobile} {
    width: 72px;
    height: 26px;
    > svg {
      width: 72px;
      height: 26px;
    }
  }
`;
