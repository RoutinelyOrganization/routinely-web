import { TermsOfUseCheckbox, TermsOfUseStyle } from "./TermsOfUse";

export default function TermsOfUseComponent() {
  return (
    <TermsOfUseStyle>
      <TermsOfUseCheckbox type="checkbox" />
      <span>
        Declaro que li e concordo com os <a href="#">termos de uso e política de privacidade.</a>
      </span>
    </TermsOfUseStyle>
  );
}
