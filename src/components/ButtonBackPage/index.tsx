import { useNavigate } from "react-router-dom";
import { ButtonBackPageStyle } from "./ButtonBackPageStyles";

export default function ButtonBackPageComponent() {
  const navigation = useNavigate()
  
  return (
    <ButtonBackPageStyle onClick={ ()=> navigation(-1)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
          fill="#F6F7F8"
        />
      </svg>
      Voltar
    </ButtonBackPageStyle>
  );
}
