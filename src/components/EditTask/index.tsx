import PopupButtonComponent from "../PopupButton";
import PopupTitleComponent from "../PopupTitle";
import { EditTaskStyle } from "./EditTaskStyle";

export default function EditTaskComponent() {
    return (
        <EditTaskStyle>
            <PopupTitleComponent>Editar tarefa</PopupTitleComponent>
            <PopupButtonComponent>Salvar alterações</PopupButtonComponent>
        </EditTaskStyle>
    )
}