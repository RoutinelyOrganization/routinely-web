import { Link } from "react-router-dom";
import { LinkAuthStyle } from "./LinkAuthStyles";

interface LinkAuthProps {
  children: string;
  path: string;
  linkText: string;
}

export default function LinkAuthComponent({ children, path, linkText }: LinkAuthProps) {
  return (
    <LinkAuthStyle>
      {children}
      {<Link to={path}>{linkText}</Link>}
    </LinkAuthStyle>
  );
}
