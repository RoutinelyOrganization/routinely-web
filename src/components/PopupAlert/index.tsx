import * as S from "./styles";

interface IPooUpAlert {
  children: React.ReactNode;
}

export default function PopupAlert({ children }: IPooUpAlert) {
  return (
    <S.Wrapper $zIndex={999}>
      <S.Container>{children}</S.Container>
    </S.Wrapper>
  );
}
