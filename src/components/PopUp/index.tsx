import { ContainerPopUPstyle } from "./PopUpStyle";

interface IPopUpProps {
  children: React.ReactNode;
}
export default function PopUpComponent({ children }: IPopUpProps) {
  return <ContainerPopUPstyle>{children}</ContainerPopUPstyle>;
}
