/* eslint-disable react-hooks/rules-of-hooks */
import dayjs from "dayjs";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { TasksContext } from "../../contexts/TasksContext";
import { UseCRUD } from "../../hooks/useCrud";
import ErrorMessage from "../ErrorMessage";
import Input from "../Input";
import Select from "../Select";
import PopUpCloseButton from "../buttons/PopUpCloseButton";
import * as S from "./styles";

interface IForm {
  setIsTaskOpen: React.Dispatch<React.SetStateAction<boolean>>;
  actionForm: "add" | "edit";
}

export interface IAddTaskForm {
  name?: string;
  date?: Date;
  hour?: string;
  description?: string;
  priority?: string;
  tag?: string;
  category?: string;
}

interface IEditTaskForm {
  name?: string;
  date?: Date;
  hour?: string;
  description?: string;
  priority?: string;
  tag?: string;
  category?: string;
}

interface ISelectOptions {
  label: string;
  options: Array<string>;
  value: string[];
  formRequired: "priority" | "category" | "tag";
}

export const selectOptions: Array<ISelectOptions> = [
  {
    label: "Prioridade",
    options: ["", "Urgente", "Alta", "Média", "Baixa"],
    value: ["", "urgent", "high", "medium", "low"],
    formRequired: "priority",
  },
  {
    label: "Categoria",
    options: ["", "Pessoal", "Estudos", "Finanças", "Carreira", "Saude"],
    value: ["", "personal", "study", "finance", "career", " health"],
    formRequired: "category",
  },
  {
    label: "Tags",
    options: ["", "Canditatura", "Conta", "Exercicio", "Beleza", "Licenciatura"],
    value: ["", "application", "account", "excercise", "beauty", "literature"],
    formRequired: "tag",
  },
];
export default function FormTask({ actionForm, setIsTaskOpen }: IForm) {
  const interfaceForm = actionForm === "add" ? useForm<IAddTaskForm>() : useForm<IEditTaskForm>();
  const [hasNameTask, setHasNameTask] = useState<boolean>(false);
  const [hasDescriptionTask, setHasDescriptionTask] = useState<boolean>(false);
  const { setTasks } = useContext(TasksContext);
  const { handleAddTask } = UseCRUD();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = interfaceForm;

  const handleSubmitFormTask = async (data: IEditTaskForm) => {
    if (actionForm === "add") {
      try {
        const task = await handleAddTask(data);
        setTasks((prevstate) => [...prevstate, task]);
        setIsTaskOpen(false);
      } catch (error) {
        console.log(error);
      }
    } else {
      //logica para editar task
    }
    reset();
  };

  return (
    <S.Form onSubmit={handleSubmit(handleSubmitFormTask)}>
      <S.Title>{actionForm === "add" ? "Adicionar tarefa" : "Editar tarefa"}</S.Title>
      <PopUpCloseButton setIsTaskOpen={setIsTaskOpen} setIsEditTaskOpen={setIsTaskOpen} />

      <Input
        label="Nome da tarefa"
        type="text"
        id="name"
        required
        hasError={hasNameTask}
        register={register("name", {
          required: "campo obrigatório",
          maxLength: {
            value: 50,
            message: "Quantidade de caracteres máximo, 50!",
          },
          onChange({ target }: React.ChangeEvent<HTMLInputElement>) {
            target.value.length > 50 ? setHasNameTask(true) : setHasNameTask(false);
          },
        })}
        errorMessage={errors.name && errors.name.message}
      ></Input>
      {hasNameTask && <ErrorMessage>Quantidade de caracteres máximo, 50!</ErrorMessage>}
      <S.InputContainer>
        <Input
          type="date"
          id="date"
          hasError={errors.date && true}
          register={register("date", {
            required: "campo obrigatório",
            setValueAs: (value) => dayjs(value).format("YYYY-MM-DD"),
          })}
        >
          <ErrorMessage>{errors.date && errors.date.message}</ErrorMessage>
          <S.LabelDateTimePopUp htmlFor="date">Data</S.LabelDateTimePopUp>
        </Input>

        <Input
          type="time"
          id="time"
          hasError={errors.hour && true}
          register={register("hour", { required: "Formato inválido" })}
        >
          <ErrorMessage>{errors.hour && errors.hour.message}</ErrorMessage>
          <S.LabelDateTimePopUp htmlFor="time">Time</S.LabelDateTimePopUp>
        </Input>
      </S.InputContainer>

      <S.InputContainer className="select">
        {selectOptions.map((select) => (
          <Select
            $hasError={errors[select.formRequired] && true}
            key={select.label}
            label={select.label}
            value={select.value}
            options={select.options}
            register={register(select.formRequired, { required: "campo obrigatório" })}
            error={errors[select.formRequired]?.message || ""}
          />
        ))}
      </S.InputContainer>

      <S.ContainerPopUp className="description">
        <Input
          as={"textarea"}
          label="Descrição"
          type="text"
          id="descricao"
          required
          hasError={hasDescriptionTask}
          register={register("description", {
            required: "campo obrigatório",
            maxLength: {
              value: 1000,
              message: "Quantidade máxima de caracteres, 1000!",
            },
            onChange({ target }: React.ChangeEvent<HTMLInputElement>) {
              target.value.length > 1000 ? setHasDescriptionTask(true) : setHasDescriptionTask(false);
            },
          })}
          errorMessage={errors.name && errors.name.message}
        >
          {hasDescriptionTask && <ErrorMessage>Quantidade máxima de caracteres, 1000!</ErrorMessage>}
        </Input>
      </S.ContainerPopUp>
      <S.ButtonsContainer>
        {actionForm === "add" ? (
          <S.SaveButton>Adicionar tarefa</S.SaveButton>
        ) : (
          <>
            <S.DeleteButton>Excluir tarefa</S.DeleteButton>
            <S.SaveButton>Salvar alterações</S.SaveButton>
          </>
        )}
      </S.ButtonsContainer>
    </S.Form>
  );
}
