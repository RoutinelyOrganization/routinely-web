import { useForm } from "react-hook-form";
import PopUpCloseButton from "../PopUpCloseButton";
import PopupButton from "../PopupButton";
import PopupTitle from "../PopupTitle";
import { ErrorMessage as ErrorMessageStyle } from "../SignUpForm/styles";
import * as S from "./styles";

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
export default function PopUpAddTask({ setIsAddTaskOpen }: IPopUpAddTaskProps) {
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
    <S.Form onSubmit={handleSubmit(handleSubmitAddTask)}>
      <PopupTitle>Adicionar tarefa</PopupTitle>
      <PopUpCloseButton setIsAddTaskOpen={setIsAddTaskOpen} setIsEditTaskOpen={setIsAddTaskOpen} />

      <S.ContainerPopUp>
        <S.InputPopUp
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
        <S.LabelPopUp htmlFor="name"> Nome da tarefa</S.LabelPopUp>
        {errors.nameTask && <ErrorMessageStyle>{errors.nameTask.message}</ErrorMessageStyle>}
      </S.ContainerPopUp>

      <S.InputContainer>
        <S.ContainerDateTimePopUp>
          <S.InputDateTimePopUp
            type="date"
            id="date"
            required
            {...register("dateTask", { required: "campo obrigatório" })}
          />
          <S.LabelDateTimePopUp htmlFor="date">Data</S.LabelDateTimePopUp>
          {errors.dateTask && <ErrorMessageStyle>{errors.dateTask.message}</ErrorMessageStyle>}
        </S.ContainerDateTimePopUp>

        <S.ContainerDateTimePopUp>
          <S.InputDateTimePopUp
            type="time"
            id="time"
            required
            {...register("timeTask", { required: "Formato inválido" })}
          />
          <S.LabelDateTimePopUp htmlFor="time">Hora</S.LabelDateTimePopUp>
          {errors.timeTask && <ErrorMessageStyle>{errors.timeTask.message}</ErrorMessageStyle>}
        </S.ContainerDateTimePopUp>
      </S.InputContainer>

      <S.InputContainer>
        <S.ContainerSelectPopUp>
          <S.SelectPopUp id="Prioridade" required {...register("priorityTask", { required: "campo obrigatório" })}>
            <S.OptionPopUp> </S.OptionPopUp>
            <S.OptionPopUp>Urgente</S.OptionPopUp>
            <S.OptionPopUp>Alta</S.OptionPopUp>
            <S.OptionPopUp>Média</S.OptionPopUp>
            <S.OptionPopUp>Baixa</S.OptionPopUp>
          </S.SelectPopUp>
          <S.LabelSelectPopUp htmlFor="Prioridade">Prioridade</S.LabelSelectPopUp>
          {errors.priorityTask && <ErrorMessageStyle>{errors.priorityTask.message}</ErrorMessageStyle>}
        </S.ContainerSelectPopUp>

        <S.ContainerSelectPopUp>
          <S.SelectPopUp id="Categoria" required {...register("categoryTask", { required: "campo obrigatório" })}>
            <S.OptionPopUp> </S.OptionPopUp>
            <S.OptionPopUp>Pessoal</S.OptionPopUp>
            <S.OptionPopUp>Estudos</S.OptionPopUp>
            <S.OptionPopUp>Finanças</S.OptionPopUp>
            <S.OptionPopUp>Carreira</S.OptionPopUp>
            <S.OptionPopUp>Saúde</S.OptionPopUp>
          </S.SelectPopUp>
          <S.LabelSelectPopUp htmlFor="Categoria">Categoria</S.LabelSelectPopUp>
          {errors.categoryTask && <ErrorMessageStyle>{errors.categoryTask.message}</ErrorMessageStyle>}
        </S.ContainerSelectPopUp>

        <S.ContainerSelectPopUp>
          <S.SelectPopUp id="Tags" required {...register("tagTask", { required: "campo obrigatório" })}>
            <S.OptionPopUp> </S.OptionPopUp>
            <S.OptionPopUp>Canditatura</S.OptionPopUp>
            <S.OptionPopUp>Conta</S.OptionPopUp>
            <S.OptionPopUp>Exercicio</S.OptionPopUp>
            <S.OptionPopUp>Beleza</S.OptionPopUp>
            <S.OptionPopUp>Licenciatura</S.OptionPopUp>
          </S.SelectPopUp>
          <S.LabelSelectPopUp htmlFor="Tags">Tags</S.LabelSelectPopUp>
          {errors.tagTask && <ErrorMessageStyle>{errors.tagTask.message}</ErrorMessageStyle>}
        </S.ContainerSelectPopUp>
      </S.InputContainer>

      <S.ContainerPopUp>
        <S.InputPopUp
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
        <S.LabelPopUp htmlFor="descricao"> Descrição</S.LabelPopUp>
        {errors.descriptionTask && <ErrorMessageStyle>{errors.descriptionTask.message}</ErrorMessageStyle>}
      </S.ContainerPopUp>

      <PopupButton>Adicionar tarefa</PopupButton>
    </S.Form>
  );
}
