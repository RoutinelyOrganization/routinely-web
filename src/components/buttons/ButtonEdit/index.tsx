import * as S from "./styles";
interface IEditButtonProps {
  setIsEditTaskOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function ButtonEdit({ setIsEditTaskOpen }: IEditButtonProps) {
  const handleEditTaskOpen = () => {
    setIsEditTaskOpen(true);
  };

  return (
    <S.Button onClick={handleEditTaskOpen}>
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
        <mask id="mask0_563_4118" maskUnits="userSpaceOnUse" x="0" y="0" width="30" height="30">
          <rect width="30" height="30" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_563_4118)">
          <path
            d="M6.25 23.75H8L18.7813 12.9688L17.0312 11.2188L6.25 22V23.75ZM24.125 11.1562L18.8125 5.90625L20.5625 4.15625C21.0417 3.67708 21.6302 3.4375 22.3281 3.4375C23.026 3.4375 23.6146 3.67708 24.0938 4.15625L25.8438 5.90625C26.3229 6.38542 26.5729 6.96354 26.5938 7.64062C26.6146 8.31771 26.3854 8.89583 25.9062 9.375L24.125 11.1562ZM22.3125 13L9.0625 26.25H3.75V20.9375L17 7.6875L22.3125 13Z"
            fill="#5C59BB"
          />
        </g>
      </svg>
    </S.Button>
  );
}
