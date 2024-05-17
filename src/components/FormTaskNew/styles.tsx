import styled from "styled-components";
import { Button as PopUpCloseButton } from "../buttons/PopUpCloseButton/styles";
import { CustonCheckedBox as CheckBox } from "../CustonCheckedBox/styles";
import { ErrorMessage } from "../ErrorMessage/styles";
import { InputContainer, InputStyle } from "../Input/styles";

interface ICustonCheckedBox {
  checked: boolean;
}

export const Form = styled.form`
  position: relative;
  margin: 16px 0;
  max-width: 520px;
  width: 100%;
  max-height: 100vh;
  overflow-y: auto;
  background-color: #fff;
  padding: 12px 24px 24px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.719);

  ${PopUpCloseButton} {
    top: 3%;
  }
`;

export const Description = styled.span`
  background-color: #d8d6dc;
  font-size: 12px;
  padding: 8px;
  border-radius: 8px;
  position: absolute;
  top: 10%;
  left: 0;
  z-index: 5;
  max-width: calc(100% - 48px);
  width: 100%;
  margin-left: 24px;
  display: none;
  color: #000000;
  font-weight: 400;
`;

export const ContainerDateTime = styled.div`
  display: flex;
  gap: 16px;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #5c59bb;
  display: flex;
  align-items: center;
  gap: 8px;

  > span {
    cursor: pointer;
    > img {
      padding-top: 5px;
    }
    &:hover {
      > ${Description} {
        display: block;
      }
    }
  }
`;

export const ContainerOpenWeekFrequency = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > span {
    > img {
      width: 32px;
    }
  }
`;

export const QuantityPerWeekParagraph = styled.p`
  display: flex;
  align-items: center;
  gap: 8px;

  > ${InputContainer} {
    width: 55px;
    > ${InputStyle} {
      padding: 8px;
      text-align: center;
      &::placeholder {
        color: #000000;
      }
    }
  }
  ~ ${ErrorMessage} {
    margin-top: -15px;
  }
`;

export const ContainerCalendar = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  /* max-height: 200px; */
`;

export const ContainerSelectWeekDays = styled.div`
  margin: 8px 0;
  display: flex;
  gap: 8px;
`;

export const DuplicateButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 40px;
  padding: 10px 16px;
  max-width: 145px;
  width: 100%;
  gap: 8px;
  border: 1px solid #d8d6dc;
  border-radius: 8px;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.1px;
  background-color: transparent;
  color: #5c59bb;
  cursor: pointer;
`;

export const ContainerCustonCheckedBox = styled.div<ICustonCheckedBox>`
  ${CheckBox} {
    > span {
      border: 1px solid #5c59bb;
      text-align: center;
      cursor: pointer;

      ${({ checked }) => checked && `background-color: #5c59bb; color: #fff;`};
    }
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  gap: 8px;
  justify-content: end;

  > button {
    max-width: 150px;
  }
`;
