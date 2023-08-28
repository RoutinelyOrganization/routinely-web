import PopupButtonComponent from "../PopupButton";
import PopupTitleComponent from "../PopupTitle";
import PopUpCloseButtonComponent from "../PopUpCloseButton";
import {
  ContainerInputDateTimePopUpstyle,
  ContainerInputPopUpStyle,
  ContainerSelectPopUpStyle,
  FormInputContainerStyle,
  FormPopuPStyle,
  InputDateTimePopUpstyle,
  InputPopUpLabelStyle,
  InputPopUpStyle,
  LabelInputDateTimePopUpstyle,
  LabelPopUpStyle,
  OptionPopUpStyle,
  SelectPopUpStyle,
  DeleteButtonPopUpStyle,
  ButtonsContainerStyle,
} from "./PopUpEditTaskStyle";

interface IPopUpEditTaskProps {
  setIsEditTaskOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function PopUpEditTaskComponent({ setIsEditTaskOpen }: IPopUpEditTaskProps) {
  return (
    <FormPopuPStyle>
      <PopupTitleComponent>Editar tarefa</PopupTitleComponent>
      <PopUpCloseButtonComponent setIsEditTaskOpen={setIsEditTaskOpen} setIsAddTaskOpen={setIsEditTaskOpen} />

      <ContainerInputPopUpStyle>
        <InputPopUpStyle type="text" id="name" required />
        <InputPopUpLabelStyle htmlFor="name"> Nome da tarefa</InputPopUpLabelStyle>
      </ContainerInputPopUpStyle>
      <FormInputContainerStyle>
        <ContainerInputDateTimePopUpstyle>
          <InputDateTimePopUpstyle type="date" id="date" required />
          <LabelInputDateTimePopUpstyle htmlFor="date">Data</LabelInputDateTimePopUpstyle>
        </ContainerInputDateTimePopUpstyle>

        <ContainerInputDateTimePopUpstyle>
          <InputDateTimePopUpstyle type="time" id="time" required />
          <LabelInputDateTimePopUpstyle htmlFor="time">Hora</LabelInputDateTimePopUpstyle>
        </ContainerInputDateTimePopUpstyle>
      </FormInputContainerStyle>

      <FormInputContainerStyle>
        <ContainerSelectPopUpStyle>
          <SelectPopUpStyle id="Prioridade" required>
            <OptionPopUpStyle> </OptionPopUpStyle>
            <OptionPopUpStyle>Urgente</OptionPopUpStyle>
            <OptionPopUpStyle>Alta</OptionPopUpStyle>
            <OptionPopUpStyle>Média</OptionPopUpStyle>
            <OptionPopUpStyle>Baixa</OptionPopUpStyle>
          </SelectPopUpStyle>
          <LabelPopUpStyle htmlFor="Prioridade">Prioridade</LabelPopUpStyle>
        </ContainerSelectPopUpStyle>

        <ContainerSelectPopUpStyle>
          <SelectPopUpStyle id="Categoria" required>
            <OptionPopUpStyle> </OptionPopUpStyle>
            <OptionPopUpStyle>Pessoal</OptionPopUpStyle>
            <OptionPopUpStyle>Estudos</OptionPopUpStyle>
            <OptionPopUpStyle>Finanças</OptionPopUpStyle>
            <OptionPopUpStyle>Carreira</OptionPopUpStyle>
            <OptionPopUpStyle>Saúde</OptionPopUpStyle>
          </SelectPopUpStyle>
          <LabelPopUpStyle htmlFor="Categoria">Categoria</LabelPopUpStyle>
        </ContainerSelectPopUpStyle>

        <ContainerSelectPopUpStyle>
          <SelectPopUpStyle id="Tags" required>
            <OptionPopUpStyle> </OptionPopUpStyle>
            <OptionPopUpStyle>Canditatura</OptionPopUpStyle>
            <OptionPopUpStyle>Conta</OptionPopUpStyle>
            <OptionPopUpStyle>Exercicio</OptionPopUpStyle>
            <OptionPopUpStyle>Beleza</OptionPopUpStyle>
            <OptionPopUpStyle>Licenciatura</OptionPopUpStyle>
          </SelectPopUpStyle>
          <LabelPopUpStyle htmlFor="Tags">Tags</LabelPopUpStyle>
        </ContainerSelectPopUpStyle>
      </FormInputContainerStyle>

      <ContainerInputPopUpStyle>
        <InputPopUpStyle type="text" id="descricao" required />
        <InputPopUpLabelStyle htmlFor="descricao"> Descrição</InputPopUpLabelStyle>
      </ContainerInputPopUpStyle>
      <ButtonsContainerStyle>
        <DeleteButtonPopUpStyle>Excluir tarefa</DeleteButtonPopUpStyle>
        <PopupButtonComponent>Salvar alterações</PopupButtonComponent>
      </ButtonsContainerStyle>
    </FormPopuPStyle>
  );
}
