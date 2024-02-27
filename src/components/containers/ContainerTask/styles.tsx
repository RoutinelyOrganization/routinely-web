import { styled } from "styled-components";
import media from "../../../utils/functions/mediaQueries";

export const ContainerTask = styled.div`
  display: grid;
  grid-template-columns: 20% 1fr 20% 20% 1fr;
  align-items: center;
  gap: 6px;
  max-width: 536px;
  width: 100%;
  margin-bottom: 0.5rem;
  > div {
    display: flex;
    gap: 0 0.4rem;
  }

  ${media.mobile} {
    grid-template-columns: 40% 1fr 1fr 1fr;
    padding-right: 16px;
  }
`;

export const ContainerText = styled.span`
  max-width: 176px;
  width: 100%;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  color: #171a21;
  text-overflow: ellipsis;
  font-size: 1rem;
  line-height: 20px;
  white-space: nowrap;

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
  align-items: center;
  max-width: 64px;
  width: 100%;
  padding: 4px 6px;
  gap: 4px;
  border-radius: 4px;
  background: #ffff7e;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.5px;
  color: #171a21;
  ${media.tablet} {
    font-size: 10px;
  }
`;

export const ContainerSubCategory = styled.span`
  color: #171a21;
  font-size: 1rem;
  line-height: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${media.mobile} {
    display: none;
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

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 536px;
  width: 100%;
  flex-shrink: 0;
  max-height: 300px;
  overflow-y: auto;
  overflow-x: hidden;

  ${media.mobile} {
    max-height: 152px;
  }
`;
