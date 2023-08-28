import PopupButtonComponent from "../PopupButton";
import PopupTitleComponent from "../PopupTitle";
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
} from "./PopUpAddTasklStyle";
import PopUpCloseButtonComponent from "../PopUpCloseButton";
import { useForm } from "react-hook-form";
import { ErrorMessageStyle } from "../SignUpForm/SignUpFormStyles";

interface IPopUpAddTaskProps {
  setIsAddTaskOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IAddTaskForm {
  nameTask: string;
  dateTask: Date;
  timeTask: string;
  priorityTask: string;
  categoryTask: string;
  tagTask: string;
  descriptionTask: string;
}
export default function PopUpAddTaskComponent({ setIsAddTaskOpen }: IPopUpAddTaskProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IAddTaskForm>();

  const handleSubmitAddTask = (data: IAddTaskForm) => {
    console.log(data);
    reset();
  };
  return (
    <FormPopuPStyle onSubmit={handleSubmit(handleSubmitAddTask)}>
      <PopupTitleComponent>Adicionar tarefa</PopupTitleComponent>
      <PopUpCloseButtonComponent setIsAddTaskOpen={setIsAddTaskOpen} setIsEditTaskOpen={setIsAddTaskOpen} />

      <ContainerInputPopUpStyle>
        <InputPopUpStyle
          type="text"
          id="name"
          required
          {...register("nameTask", {
            required: "campo obrigatório",
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
          <InputDateTimePopUpstyle
            type="date"
            id="date"
            required
            {...register("dateTask", { required: "campo obrigatório" })}
          />
          <LabelInputDateTimePopUpstyle htmlFor="date">Data</LabelInputDateTimePopUpstyle>
          {errors.dateTask && <ErrorMessageStyle>{errors.dateTask.message}</ErrorMessageStyle>}
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
          <SelectPopUpStyle id="Prioridade" required {...register("priorityTask", { required: "campo obrigatório" })}>
            <OptionPopUpStyle> </OptionPopUpStyle>
            <OptionPopUpStyle>Urgente</OptionPopUpStyle>
            <OptionPopUpStyle>Alta</OptionPopUpStyle>
            <OptionPopUpStyle>Média</OptionPopUpStyle>
            <OptionPopUpStyle>Baixa</OptionPopUpStyle>
          </SelectPopUpStyle>
          <LabelPopUpStyle htmlFor="Prioridade">Prioridade</LabelPopUpStyle>
          {errors.priorityTask && <ErrorMessageStyle>{errors.priorityTask.message}</ErrorMessageStyle>}
        </ContainerSelectPopUpStyle>

        <ContainerSelectPopUpStyle>
          <SelectPopUpStyle id="Categoria" required {...register("categoryTask", { required: "campo obrigatório" })}>
            <OptionPopUpStyle> </OptionPopUpStyle>
            <OptionPopUpStyle>Pessoal</OptionPopUpStyle>
            <OptionPopUpStyle>Estudos</OptionPopUpStyle>
            <OptionPopUpStyle>Finanças</OptionPopUpStyle>
            <OptionPopUpStyle>Carreira</OptionPopUpStyle>
            <OptionPopUpStyle>Saúde</OptionPopUpStyle>
          </SelectPopUpStyle>
          <LabelPopUpStyle htmlFor="Categoria">Categoria</LabelPopUpStyle>
          {errors.categoryTask && <ErrorMessageStyle>{errors.categoryTask.message}</ErrorMessageStyle>}
        </ContainerSelectPopUpStyle>

        <ContainerSelectPopUpStyle>
          <SelectPopUpStyle id="Tags" required {...register("tagTask", { required: "campo obrigatório" })}>
            <OptionPopUpStyle> </OptionPopUpStyle>
            <OptionPopUpStyle>Canditatura</OptionPopUpStyle>
            <OptionPopUpStyle>Conta</OptionPopUpStyle>
            <OptionPopUpStyle>Exercicio</OptionPopUpStyle>
            <OptionPopUpStyle>Beleza</OptionPopUpStyle>
            <OptionPopUpStyle>Licenciatura</OptionPopUpStyle>
          </SelectPopUpStyle>
          <LabelPopUpStyle htmlFor="Tags">Tags</LabelPopUpStyle>
          {errors.tagTask && <ErrorMessageStyle>{errors.tagTask.message}</ErrorMessageStyle>}
        </ContainerSelectPopUpStyle>
      </FormInputContainerStyle>

      <ContainerInputPopUpStyle>
        <InputPopUpStyle
          type="text"
          id="descricao"
          required
          {...register("descriptionTask", {
            required: "campo obrigatório",
            maxLength: {
              value: 1000,
              message: "Quantidade máxima de caracteres, 1000!",
            },
          })}
        />
        <InputPopUpLabelStyle htmlFor="descricao"> Descrição</InputPopUpLabelStyle>
        {errors.descriptionTask && <ErrorMessageStyle>{errors.descriptionTask.message}</ErrorMessageStyle>}
      </ContainerInputPopUpStyle>

      <PopupButtonComponent>Adicionar tarefa</PopupButtonComponent>
    </FormPopuPStyle>
  );
}
