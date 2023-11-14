import * as S from './styles'

interface IErrorMessage {
  children?: string
}

export default function ErrorMessage({children}:IErrorMessage) {
  return (<S.ErrorMessage>{children}</S.ErrorMessage>)
}