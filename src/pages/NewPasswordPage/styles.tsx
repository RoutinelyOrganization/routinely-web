import { styled } from "styled-components";
import { ErrorMessage } from "../../components/ErrorMessage/styles";
import { Button } from "../../components/buttons/ButtonPrincipal/styles";
import media from "../../mediaQueries";

export const Wrapper = styled.main`
  display: flex;
  flex-direction: row;
  align-items: normal;
  justify-content: space-evenly;
  padding: 104px 32px 60px;
  gap: 24px;

  > img {
    max-width: 520px;
    width: 50%;
  }

  ${ErrorMessage} {
    margin-top: -15px;
  }

  ${media.desktop} {
    padding-top: 40px;
  }

  ${media.tablet} {
    padding-top: 64px;
    flex-direction: column;
    align-items: center;

    > img {
      width: 296px;
      margin-left: calc(100vw - 338px);
    }
  }

  ${media.mobile} {
    padding: 40px 24px 0;
  }
`;

export const Form = styled.form`
  max-width: 400px;
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
    margin-bottom: 81px;
    ${Button} {
      max-width: 100%;
    }
  }
`;

export const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  line-height: 52px;
  color: #171a21;
  margin-top: 32px;

  ${media.mobile} {
    font-size: 32px;
    line-height: 36px;
  }
`;

export const Caption = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  margin-top: 16px;
  color: #171a21;

  ${media.mobile} {
    font-size: 14px;
    line-height: 16px;
  }
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
  margin: 40px 0 24px;
  margin-top: 40px;
  max-width: 368px;
  width: 100%;

  ${media.tablet} {
    max-width: 457px;
  }

  ${media.mobile} {
    margin: 24px 0 16px;
  }
`;
