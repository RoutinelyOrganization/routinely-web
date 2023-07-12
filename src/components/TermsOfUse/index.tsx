import { TermsOfUseCheckbox, TermsOfUseComponent } from "./TermsOfUse";

export default function TermsOfUse() {
  return (
    <TermsOfUseComponent>
      <TermsOfUseCheckbox type="checkbox" />
      <span>
        Declaro que li e concordo com os <a href="#">termos de uso e política de privacidade.</a>
      </span>
    </TermsOfUseComponent>
  );
}
