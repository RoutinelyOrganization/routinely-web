/* eslint-disable react-hooks/rules-of-hooks */
import dayjs from "dayjs";
import React, { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { TasksContext } from "../../contexts/TasksContext";
import { pastDate } from "../../utils/validators/pastDate";
import validateRepeatedTask from "../../utils/validators/validateTaskRepeated";
import ErrorMessage from "../ErrorMessage";
import Input from "../Input";
import Select from "../Select";
import ButtonDanger from "../buttons/ButtonDanger";
import ButtonPrincipal from "../buttons/ButtonPrincipal";
import PopUpCloseButton from "../buttons/PopUpCloseButton";
import * as S from "./styles";

interface IForm {
  setIsTaskOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setCrudTasksOptions: React.Dispatch<
    React.SetStateAction<"addTask" | "editTask" | "deleteTask" | "duplicateTask" | null>
  >;
  setDataTask: React.Dispatch<React.SetStateAction<IAddTaskForm | null>>;
  setIsConfirmActionOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsAlertOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IAddTaskForm {
  name?: string;
  date?: Date;
  hour?: string;
  description?: string;
  priority?: string;
  tag?: string;
  category?: string;
  checked?: boolean;
}

export interface IEditTaskForm {
  name?: string;
  date?: Date;
  hour?: string;
  description?: string;
  priority?: string;
  tag?: string;
  category?: string;
  checked?: boolean;
}

interface ISelectOptions {
  label: string;
  options: Array<string>;
  value: string[];
  formRequired: "priority" | "category" | "tag";
}

interface CustomFormEvent extends React.FormEvent {
  submitter: {
    name: string;
  };
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
    value: ["", "personal", "study", "finance", "career", "health"],
    formRequired: "category",
  },
  {
    label: "Tag",
    options: ["", "Canditatura", "Conta", "Exercício", "Beleza", "Licenciatura"],
    value: ["", "application", "account", "exercise", "beauty", "literature"],
    formRequired: "tag",
  },
];

export default function FormTask({
  setIsTaskOpen,
  setCrudTasksOptions,
  setDataTask,
  setIsConfirmActionOpen,
  setIsAlertOpen,
}: IForm) {
  const { tempTask, tasks } = useContext(TasksContext);
  const interfaceForm = !tempTask
    ? useForm<IAddTaskForm>()
    : useForm<IEditTaskForm>({
        defaultValues: {
          ...tempTask,
          date: tempTask.date as unknown as Date,
        },
      });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = interfaceForm;

  const handleSubmitFormTask: SubmitHandler<IEditTaskForm> = async (data, event) => {
    const buttonSubmited = (event!.nativeEvent as CustomFormEvent).submitter.name;

    if (buttonSubmited !== "deleteTask") {
      const cleanedData = validateRepeatedTask(data, tasks);

      if (typeof cleanedData === "string") {
        setIsAlertOpen(true);
        return;
      }
    }

    switch (buttonSubmited) {
      case "addTask":
        setIsConfirmActionOpen(true);
        setCrudTasksOptions("addTask");
        setDataTask(data);

        break;

      case "duplicateTask":
        setIsConfirmActionOpen(true);
        setCrudTasksOptions("duplicateTask");
        setDataTask(data);

        break;

      case "editTask":
        setIsConfirmActionOpen(true);
        setCrudTasksOptions("editTask");
        setDataTask(data);

        break;
      case "deleteTask":
        setIsConfirmActionOpen(true);
        setCrudTasksOptions("deleteTask");
        setDataTask(data);

        break;
    }
  };

  return (
    <S.Form onSubmit={handleSubmit(handleSubmitFormTask)}>
      <S.Title>{!tempTask ? "Adicionar tarefa" : "Editar tarefa"}</S.Title>
      <PopUpCloseButton setIsTaskOpen={setIsTaskOpen} />
      <S.InputTaskContainer>
        <Input
          label="Nome da tarefa"
          type="text"
          id="name"
          placeholder="nome da tarefa"
          hasError={!!errors.name}
          register={register("name", {
            required: "campo obrigatório",
            maxLength: {
              value: 50,
              message: "Quantidade de caracteres máximo, 50!",
            },
          })}
          errorMessage={errors.name && errors.name.message}
        ></Input>
      </S.InputTaskContainer>
      <S.InputContainer>
        <Input
          type="date"
          id="date"
          hasError={!!errors.date}
          register={register("date", {
            required: "campo obrigatório",
            setValueAs: (value) => dayjs(value).format("YYYY-MM-DD"),
            validate: (value) => {
              return pastDate(value!);
            },
          })}
        >
          <ErrorMessage>{errors.date && errors.date.message}</ErrorMessage>
          <S.LabelDateTimePopUp htmlFor="date">Data</S.LabelDateTimePopUp>
        </Input>

        <Input
          type="time"
          id="time"
          hasError={!!errors.hour}
          register={register("hour", { required: "Formato inválido" })}
        >
          <ErrorMessage>{errors.hour && errors.hour.message}</ErrorMessage>
          <S.LabelDateTimePopUp htmlFor="time">Time</S.LabelDateTimePopUp>
        </Input>
      </S.InputContainer>
      <S.InputContainer className="select">
        {selectOptions.map((select) => (
          <Select
            $hasError={!!errors[select.formRequired]}
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
          as="textarea"
          label="Descrição"
          type="text"
          id="descricao"
          placeholder="descrição"
          hasError={!!errors.description}
          register={register("description", {
            required: "campo obrigatório",
            maxLength: {
              value: 1000,
              message: "Quantidade máxima de caracteres, 1000!",
            },
          })}
          errorMessage={errors.description && errors.description.message}
        ></Input>
      </S.ContainerPopUp>
      <S.ButtonsContainer>
        {!tempTask ? (
          <ButtonPrincipal name="editTask">Salvar alterações</ButtonPrincipal>
        ) : (
          <>
            <ButtonDanger name="deleteTask">Excluir tarefa</ButtonDanger>
            <S.DuplicateButton name="duplicateTask">Duplicar tarefa</S.DuplicateButton>
            <ButtonPrincipal name="editTask">Salvar alterações</ButtonPrincipal>
          </>
        )}
      </S.ButtonsContainer>
    </S.Form>
  );
}
