import { SubTitleAuthStyle } from "./SubTitleAuthStyles";

interface ISubTitleAuth {
  children: string;
}

export default function SubTitleAuthComponent({ children }: ISubTitleAuth) {
  return <SubTitleAuthStyle>{children}</SubTitleAuthStyle>;
}
