import { ContainerPopUPstyle, FormPopuPStyle } from "./PopUpStyle";

interface IPopUpProps {
  children: React.ReactNode;
}
export default function PopUpComponent({ children }: IPopUpProps) {
  return (
    <ContainerPopUPstyle>
      <FormPopuPStyle>{children}</FormPopuPStyle>;
    </ContainerPopUPstyle>
  );
}
