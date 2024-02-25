import { styled } from "styled-components";
import media from "../../../utils/functions/mediaQueries";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 0.1fr 1fr 1fr 1fr 1fr;
  width: 100%;
  align-items: center;
  gap: 10px;
  position: relative;
  ${media.mobile} {
    grid-template-columns: 0.1fr 1fr 1fr 1fr 0.1fr;
  }
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    width: 90%;
    height: 1px;
    background-color: #767676;
  }
`;

export const ContainerCheckbox = styled.input`
  height: 20px;
  flex-shrink: 0;
  background-color: #000;
  border: 10px solid black;
`;

export const ContainerText = styled.span`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  color: #767676;
  text-overflow: ellipsis;
  font-size: 1rem;
  line-height: 20px;
  ${media.tablet} {
    font-size: 0.9rem;
  }
  ${media.mobile} {
    font-size: 0.8rem;
  }
`;

export const ContainerCategory = styled.span`
  display: flex;
  justify-content: center;
  width: max-content;
  padding: 4px 6px;
  gap: 4px;
  border-radius: 4px;
  background: #ffff7e;
  font-size: 0.75rem;
  line-height: 16px;
  letter-spacing: 0.5px;
  color: #171a21;

  ${media.tablet} {
    font-size: 0.6rem;
  }
`;

export const ContainerSubCategory = styled.span`
  color: #171a21;
  font-size: 1rem;
  line-height: 20px;
  ${media.tablet} {
    font-size: 0.9rem;
  }
  ${media.mobile} {
    font-size: 0.8rem;
  }
`;

export const ContainerPriority = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
  color: #d42116;
  font-size: 0.75rem;
  line-height: 16px;
  letter-spacing: 0.5px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 536px;
  width: 100%;
  flex-shrink: 0;
`;
