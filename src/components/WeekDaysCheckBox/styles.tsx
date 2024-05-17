import styled from "styled-components";
import { CustonCheckedBox as CheckBox } from "../CustonCheckedBox/styles";

interface ICustonCheckedBox {
  checked: boolean;
}

export const ContainerSelectWeekDays = styled.div`
  margin: 8px 0;
  display: flex;
  gap: 8px;
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
