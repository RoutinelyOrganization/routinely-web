import { Iterator, findSelectValues } from "../containers/ContainerTask";
import * as S from "./styles";

interface IPriorityFlagProps {
  priority: string ;
}

const getColorFlag = (priority: string) => {
  switch (priority) {
    case "urgent":
      return "#D42116";
    case "high":
      return "#e79800";
    case "medium":
      return "#2fa7be";
    case "low":
      return "#5bb31e";
    default:
      return "";
  }
};
export default function PriorityFlag({ priority }: IPriorityFlagProps) {
  const colorFlag = getColorFlag(priority);
  const priorityValue = findSelectValues(priority, Iterator.Priority);
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
        <mask id="mask0_563_4119" maskUnits="userSpaceOnUse" x="0" y="0" width="30" height="30">
          <rect width="30" height="30" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_563_4119)">
          <path
            d="M6.25 26.25V5H17.5L18 7.5H25V20H16.25L15.75 17.5H8.75V26.25H6.25ZM18.3125 17.5H22.5V10H15.9375L15.4375 7.5H8.75V15H17.8125L18.3125 17.5Z"
            fill={colorFlag}
          />
        </g>
      </svg>
      <S.PriorityValue style={{ color: `${colorFlag}` }}>{priorityValue}</S.PriorityValue>
    </>
  );
}
