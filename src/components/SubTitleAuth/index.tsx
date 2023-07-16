import { SubTitleAuthStyle } from "./SubTitleAuthStyles";

interface SubTitleAuthProps {
  children: string;
}

export default function SubTitleAuthComponent({ children }: SubTitleAuthProps) {
  return <SubTitleAuthStyle>{children}</SubTitleAuthStyle>;
}
