import { useForm } from "react-hook-form";
import PopUpCloseButtonComponent from "../PopUpCloseButton";
import PopupButtonComponent from "../PopupButton";
import PopupTitleComponent from "../PopupTitle";
import { ErrorMessage as ErrorMessageStyle } from "../SignUpForm/styles";
import {
  ButtonsContainerStyle,
  ContainerInputDateTimePopUpstyle,
  ContainerInputPopUpStyle,
  ContainerSelectPopUpStyle,
  DeleteButtonPopUpStyle,
  FormInputContainerStyle,
  FormPopuPStyle,
  InputDateTimePopUpstyle,
  InputPopUpLabelStyle,
  InputPopUpStyle,
  LabelInputDateTimePopUpstyle,
  LabelPopUpStyle,
  OptionPopUpStyle,
  SelectPopUpStyle,
} from "./PopUpEditTaskStyle";

interface IPopUpEditTaskProps {
  setIsEditTaskOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IEditTaskForm {
  nameTask?: string;
  dateTask?: Date;
  timeTask?: string;
  priorityTask?: string;
  categoryTask?: string;
  tagTask?: string;
  descriptionTask?: string;
}

export default function PopUpEditTaskComponent({ setIsEditTaskOpen }: IPopUpEditTaskProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IEditTaskForm>();

  const handleSubmitEditTask = (data: IEditTaskForm) => {
    console.log(data);
    reset();
  };

  return (
    <FormPopuPStyle onSubmit={handleSubmit(handleSubmitEditTask)}>
      <PopupTitleComponent>Editar tarefa</PopupTitleComponent>
      <PopUpCloseButtonComponent setIsEditTaskOpen={setIsEditTaskOpen} setIsAddTaskOpen={setIsEditTaskOpen} />

      <ContainerInputPopUpStyle>
        <InputPopUpStyle
          type="text"
          id="name"
          required
          {...register("nameTask", {
            maxLength: {
              value: 50,
              message: "Quantidade de caracteres máximo, 50!",
            },
          })}
        />
        <InputPopUpLabelStyle htmlFor="name"> Nome da tarefa</InputPopUpLabelStyle>
        {errors.nameTask && <ErrorMessageStyle>{errors.nameTask.message}</ErrorMessageStyle>}
      </ContainerInputPopUpStyle>
      <FormInputContainerStyle>
        <ContainerInputDateTimePopUpstyle>
          <InputDateTimePopUpstyle type="date" id="date" required />
          <LabelInputDateTimePopUpstyle htmlFor="date">Data</LabelInputDateTimePopUpstyle>
        </ContainerInputDateTimePopUpstyle>

        <ContainerInputDateTimePopUpstyle>
          <InputDateTimePopUpstyle
            type="time"
            id="time"
            required
            {...register("timeTask", { required: "Formato inválido" })}
          />
          <LabelInputDateTimePopUpstyle htmlFor="time">Hora</LabelInputDateTimePopUpstyle>
          {errors.timeTask && <ErrorMessageStyle>{errors.timeTask.message}</ErrorMessageStyle>}
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
        <InputPopUpStyle
          type="text"
          id="descricao"
          required
          {...register("descriptionTask", {
            maxLength: {
              value: 1000,
              message: "Quantidade máxima de caracteres, 1000!",
            },
          })}
        />
        <InputPopUpLabelStyle htmlFor="descricao"> Descrição</InputPopUpLabelStyle>
        {errors.descriptionTask && <ErrorMessageStyle>{errors.descriptionTask.message}</ErrorMessageStyle>}
      </ContainerInputPopUpStyle>
      <ButtonsContainerStyle>
        <DeleteButtonPopUpStyle>Excluir tarefa</DeleteButtonPopUpStyle>
        <PopupButtonComponent>Salvar alterações</PopupButtonComponent>
      </ButtonsContainerStyle>
    </FormPopuPStyle>
  );
}
