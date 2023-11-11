import { useForm } from "react-hook-form";
import PopUpCloseButton from "../PopUpCloseButton";
import PopupButton from "../PopupButton";
import PopupTitle from "../PopupTitle";
import { ErrorMessage as ErrorMessageStyle } from "../SignUpForm/styles";
import * as S from "./styles";

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

export default function PopUpEditTask({ setIsEditTaskOpen }: IPopUpEditTaskProps) {
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
    <S.Form onSubmit={handleSubmit(handleSubmitEditTask)}>
      <PopupTitle>Editar tarefa</PopupTitle>
      <PopUpCloseButton setIsEditTaskOpen={setIsEditTaskOpen} setIsAddTaskOpen={setIsEditTaskOpen} />

      <S.ContainerPopUp>
        <S.InputPopUp
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
        <S.LabelPopUp htmlFor="name"> Nome da tarefa</S.LabelPopUp>
        {errors.nameTask && <ErrorMessageStyle>{errors.nameTask.message}</ErrorMessageStyle>}
      </S.ContainerPopUp>
      <S.InputContainer>
        <S.ContainerDateTimePopUp>
          <S.InputDateTime type="date" id="date" required />
          <S.LabelDateTime htmlFor="date">Data</S.LabelDateTime>
        </S.ContainerDateTimePopUp>

        <S.ContainerDateTimePopUp>
          <S.InputDateTime
            type="time"
            id="time"
            required
            {...register("timeTask", { required: "Formato inválido" })}
          />
          <S.LabelDateTime htmlFor="time">Hora</S.LabelDateTime>
          {errors.timeTask && <ErrorMessageStyle>{errors.timeTask.message}</ErrorMessageStyle>}
        </S.ContainerDateTimePopUp>
      </S.InputContainer>

      <S.InputContainer>
        <S.ContainerSelectPopUp>
          <S.SelectPopUp id="Prioridade" required>
            <S.OptionPopUp> </S.OptionPopUp>
            <S.OptionPopUp>Urgente</S.OptionPopUp>
            <S.OptionPopUp>Alta</S.OptionPopUp>
            <S.OptionPopUp>Média</S.OptionPopUp>
            <S.OptionPopUp>Baixa</S.OptionPopUp>
          </S.SelectPopUp>
          <S.LabelSelect htmlFor="Prioridade">Prioridade</S.LabelSelect>
        </S.ContainerSelectPopUp>

        <S.ContainerSelectPopUp>
          <S.SelectPopUp id="Categoria" required>
            <S.OptionPopUp> </S.OptionPopUp>
            <S.OptionPopUp>Pessoal</S.OptionPopUp>
            <S.OptionPopUp>Estudos</S.OptionPopUp>
            <S.OptionPopUp>Finanças</S.OptionPopUp>
            <S.OptionPopUp>Carreira</S.OptionPopUp>
            <S.OptionPopUp>Saúde</S.OptionPopUp>
          </S.SelectPopUp>
          <S.LabelSelect htmlFor="Categoria">Categoria</S.LabelSelect>
        </S.ContainerSelectPopUp>

        <S.ContainerSelectPopUp>
          <S.SelectPopUp id="Tags" required>
            <S.OptionPopUp> </S.OptionPopUp>
            <S.OptionPopUp>Canditatura</S.OptionPopUp>
            <S.OptionPopUp>Conta</S.OptionPopUp>
            <S.OptionPopUp>Exercicio</S.OptionPopUp>
            <S.OptionPopUp>Beleza</S.OptionPopUp>
            <S.OptionPopUp>Licenciatura</S.OptionPopUp>
          </S.SelectPopUp>
          <S.LabelSelect htmlFor="Tags">Tags</S.LabelSelect>
        </S.ContainerSelectPopUp>
      </S.InputContainer>

      <S.ContainerPopUp>
        <S.InputPopUp
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
        <S.LabelPopUp htmlFor="descricao"> Descrição</S.LabelPopUp>
        {errors.descriptionTask && <ErrorMessageStyle>{errors.descriptionTask.message}</ErrorMessageStyle>}
      </S.ContainerPopUp>
      <S.ButtonsContainer>
        <S.DeleteButton>Excluir tarefa</S.DeleteButton>
        <PopupButton>Salvar alterações</PopupButton>
      </S.ButtonsContainer>
    </S.Form>
  );
}
