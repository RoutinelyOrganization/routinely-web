import styled from "styled-components";

export const CustonCheckedBox = styled.label`
  > input {
    display: none;
  }

  > span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 3px solid #5c59bb;

    > img {
      display: none;
    }
  }

  > input:checked ~ span {
    > img {
      display: block;
    }
  }
`;
