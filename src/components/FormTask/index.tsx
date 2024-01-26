/* eslint-disable react-hooks/rules-of-hooks */
import dayjs from "dayjs";
import React, { useContext, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { TasksContext } from "../../contexts/TasksContext";
import { UseCRUD } from "../../hooks/useCrud";
import { TimeFormat, dateFormat } from "../../utils/formats/dateAndTime";
import ErrorMessage from "../ErrorMessage";
import Input from "../Input";
import Select from "../Select";
import PopUpCloseButton from "../buttons/PopUpCloseButton";
import * as S from "./styles";

interface IForm {
  setIsTaskOpen: React.Dispatch<React.SetStateAction<boolean>>;
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
export default function FormTask({ setIsTaskOpen }: IForm) {
  const { setTasks, tempTask, setTempTask } = useContext(TasksContext);
  const interfaceForm = !tempTask
    ? useForm<IAddTaskForm>()
    : useForm<IEditTaskForm>({
        defaultValues: {
          ...tempTask,
          date: dateFormat(tempTask.date) as unknown as Date,
          hour: TimeFormat(tempTask.hour),
        },
      });
  const [hasNameTask, setHasNameTask] = useState<boolean>(false);
  const [hasDescriptionTask, setHasDescriptionTask] = useState<boolean>(false);
  const { handleAddTask } = UseCRUD();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitted },
  } = interfaceForm;

  const handleSubmitFormTask: SubmitHandler<IEditTaskForm> = async (data, event) => {
    const buttonSubmited = (event!.nativeEvent as CustomFormEvent).submitter.name;

    switch (buttonSubmited) {
      case "addTask":
        try {
          const task = await handleAddTask(data);
          setTasks((prevstate) => [...prevstate, task]);
          setIsTaskOpen(false);
        } catch (error) {
          console.log(error);
        }
        break;
      case "editTask":
        break;
      case "deleteTask":
        break;
    }

    // console.log("testes");
    // try {
    //   const date = new Date();
    //   const monthCurrent = date.getMonth() + 1;
    //   const yearCurrent = date.getFullYear();
    //   await reqGetTask(monthCurrent, yearCurrent);
    // } catch (error) {
    //   console.log(error);
    // }

    reset();
    setTempTask(null);
  };

  useEffect(() => {
    if (isSubmitted) {
      setHasNameTask(true);
      setHasDescriptionTask(true);
    }
  }, [isSubmitted]);

  return (
    <S.Form onSubmit={handleSubmit(handleSubmitFormTask)}>
      <S.Title>{!tempTask ? "Adicionar tarefa" : "Editar tarefa"}</S.Title>
      <PopUpCloseButton setIsTaskOpen={setIsTaskOpen} setIsEditTaskOpen={setIsTaskOpen} />

      <S.InputTaskContainer>
        <Input
          label="Nome da tarefa"
          type="text"
          id="name"
          placeholder="nome da tarefa"
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
      </S.InputTaskContainer>
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
          placeholder="descrição"
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
          errorMessage={errors.description && errors.description.message}
        ></Input>
      </S.ContainerPopUp>
      <S.ButtonsContainer>
        {!tempTask ? (
          <S.SaveButton name="addTask">Adicionar tarefa</S.SaveButton>
        ) : (
          <>
            <S.DeleteButton name="deleteTask">Excluir tarefa</S.DeleteButton>
            <S.DuplicateButton name="addTask">Duplicar tarefa</S.DuplicateButton>
            <S.SaveButton name="editTask">Salvar alterações</S.SaveButton>
          </>
        )}
      </S.ButtonsContainer>
    </S.Form>
  );
}
