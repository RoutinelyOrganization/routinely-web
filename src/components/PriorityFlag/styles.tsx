import styled from "styled-components";
import media from "../../utils/functions/mediaQueries";

export const PriorityValue = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${media.mobile} {
    display: none;
  }
`;
