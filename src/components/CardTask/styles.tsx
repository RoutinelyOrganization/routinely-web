import styled from "styled-components";
import media from "../../utils/functions/mediaQueries";

interface ICardTaskStyles {
  checked: boolean;
  category: "habit" | "project" | "task";
}

interface IItemOptionsStyles {
  color: string;
  bgcolor: string;
}

interface IOptionsStyles {
  habit: IItemOptionsStyles;
  project: IItemOptionsStyles;
  task: IItemOptionsStyles;
}

const options: IOptionsStyles = {
  habit: {
    color: "#5450BC",
    bgcolor: "#E0DFFF",
  },
  project: {
    color: "#747400",
    bgcolor: "#FFFFC9",
  },
  task: {
    color: "#115D9E",
    bgcolor: "#D1EAFF",
  },
};

export const Title = styled.h2`
  font-size: 18px;
  line-height: 20px;
  font-weight: bold;

  > i {
    font-size: 14px;
    margin-right: 5px;
  }
`;

export const ContainerDescription = styled.div`
  max-width: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;

  &:last-child {
  }

  > p {
    max-width: 100%;
    word-break: break-all;
  }

  > label {
    > span {
      position: relative;
      z-index: 11;
    }
  }
`;

export const Container = styled.div<ICardTaskStyles>`
  max-width: 300px;
  width: 100%;
  background-color: ${({ category }) => options[category].bgcolor};
  border-radius: 8px;
  padding: 8px;
  position: relative;
  z-index: 1;
  border: 1px solid ${({ category }) => options[category].color};

  ${Title} {
    color: ${({ category }) => options[category].color};
  }

  ${ContainerDescription} {
    > p {
      text-decoration: ${({ checked }) => (checked ? "line-through" : "none")};
    }
  }
  ${({ checked }) =>
    checked &&
    `
  ::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 10;
    border-radius: 8px;
    background-color: rgba(0, 0, 0, 0.03);  
  }`}

  ${media.mobile} {
    max-width: 100%;
  }
`;

export const ContainerBtnIcon = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  padding: 4px 8px;
  background-color: #3b719f;
  border-radius: 8px;
  border: none;
  font-size: 14px;
  color: #f6f7f8;
`;
