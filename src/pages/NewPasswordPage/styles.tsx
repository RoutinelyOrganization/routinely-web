import { styled } from "styled-components";
import { ErrorMessage } from "../../components/ErrorMessage/styles";
import { Button } from "../../components/buttons/Button/styles";
import media from "../../mediaQueries";

export const Wrapper = styled.main`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 104px;
  padding: 0 32px 60px;
  gap: 24px;

  > img {
    max-width: 520px;
    width: 50%;
  }

  ${media.desktop} {
    margin-top: 40px;
  }

  ${media.tablet} {
    flex-direction: column;
    align-items: center;

    > img {
      width: 296px;
      margin-left: calc(100vw - 338px);
    }
  }

  ${ErrorMessage} {
    margin-top: -15px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: start;

  ${media.tablet} {
    max-width: 457px;

    ${Button} {
      max-width: 216px;
    }
  }

  ${media.mobile} {
    ${Button} {
      max-width: 100%;
    }
  }
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  line-height: 3.25rem;
  text-align: center;
  color: #171a21;
  margin-top: 32px;
`;

export const Caption = styled.p`
  font-size: 1rem;
  font-weight: 400;
  line-height: 20px;
  margin-top: 16px;
  text-align: center;
  color: #171a21;
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 16px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 0 calc(40px - 16px) 0;
  max-width: 368px;
  width: 100%;

  ${media.tablet} {
    max-width: 457px;
  }
`;
