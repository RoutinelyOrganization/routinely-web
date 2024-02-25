const customMediaQuery = (maxWidth: number) =>
  `@media (max-width: ${maxWidth}px)`;

const media = {
  custom: customMediaQuery,
  desktop: customMediaQuery(904),
  tablet: customMediaQuery(680),
  mobile: customMediaQuery(500),
};

export default media