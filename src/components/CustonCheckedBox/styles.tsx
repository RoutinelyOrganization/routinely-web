import styled from "styled-components";

export const CustonCheckedBox = styled.label`
  > input {
    display: none;
  }

  > span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 18px;
    height: 18px;
    border-radius: 4px;
    border: 2px solid #171a21;
    > img {
      display: none;
    }
  }

  > input:checked ~ span {
    border-color: #767676;
    > img {
      display: block;
    }
  }
`;
