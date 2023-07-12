import Input from "../Input"
import { SignUpFormComponent } from "./SignUpForm"

export default function SignUpForm() {
    return (
        <SignUpFormComponent>
            <Input type="text" placeholder="Nome" />
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Senha" />
            <Input type="password" placeholder="Repetir senha" />
            <Input type="date" placeholder="Data de nascimento" />
        </SignUpFormComponent>
    )
}