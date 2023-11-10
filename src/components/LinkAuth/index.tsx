import { Link } from "react-router-dom";
import * as S from "./styles";

interface ILinkAuth {
  children: string;
  path: string;
  linkText: string;
}

export default function LinkAuthComponent({ children, path, linkText }: ILinkAuth) {
  return (
    <S.Paragraph>
      {children}
      {<Link to={path}>{linkText}</Link>}
    </S.Paragraph>
  );
}
