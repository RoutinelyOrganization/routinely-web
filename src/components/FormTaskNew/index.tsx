import dayjs, { Dayjs } from "dayjs";
import { useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import arrow from "../../assets/icons/arrowDown.svg";
import infoIcon from "../../assets/icons/informacao.svg";
import { TasksContext } from "../../contexts/TasksContext";
import { Task } from "../../types/task";
import { DaysOfWeek } from "../../types/weekDays";
import { dateFormat } from "../../utils/formats/dateAndTime";
import { pastDate } from "../../utils/validators/pastDate";
import ButtonDanger from "../buttons/ButtonDanger";
import ButtonPrincipal from "../buttons/ButtonPrincipal";
import PopUpCloseButton from "../buttons/PopUpCloseButton";
import DateCalendar from "../Calendar";
import CategoryInputSelect from "../CategoryInputSelect";
import ErrorMessage from "../ErrorMessage";
import InputComponent from "../Input";
import WeekDaysCheckBox from "../WeekDaysCheckBox";
import * as S from "./styles";

type IFormData = Partial<Task>;

// interface CustomFormEvent extends React.FormEvent {
//   submitter: {
//     name: string;
//   };
// }

export default function FormTask() {
  const [isWeekFrequencyOpen, setIWeekFrequencyOpen] = useState(false);
  const [weekDays, setWeekDays] = useState<DaysOfWeek[]>([]);
  const { formTypeTask, setFormTaskOpen, formTypeAndDescTask, tempTask } = useContext(TasksContext);
  const [finallyDate, setFinallyDate] = useState<Dayjs | null>(null);
  const [categorySelected, setCategorySelected] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({
    defaultValues: {
      ...tempTask,
      date: tempTask?.date as unknown as Date,
    },
  });

  const handleSubmitFormTask: SubmitHandler<IFormData> = async (data) => {
    // const buttonSubmited = (event!.nativeEvent as CustomFormEvent).submitter.name;

    const finallyDateTemp = dateFormat(dayjs(finallyDate).format("YYYY-MM-DD"));
    data.finallyDate = (finallyDateTemp as unknown as string).match("/^[^a-zA-Z]*$/")
      ? (finallyDateTemp as unknown as Date)
      : undefined;
    data.weekDays = weekDays;
    data.category = categorySelected;

    // switch (buttonSubmited) {
    //   case "addTask":
    //     setIsConfirmActionOpen(true);
    //     setCrudTasksOptions("addTask");
    //     setDataTask(data);

    //     break;

    //   case "duplicateTask":
    //     setIsConfirmActionOpen(true);
    //     setCrudTasksOptions("duplicateTask");
    //     setDataTask(data);

    //     break;

    //   case "editTask":
    //     setIsConfirmActionOpen(true);
    //     setCrudTasksOptions("editTask");
    //     setDataTask(data);

    //     break;
    //   case "deleteTask":
    //     setIsConfirmActionOpen(true);
    //     setCrudTasksOptions("deleteTask");
    //     setDataTask(data);

    //     break;
    // }
  };

  const { type, description } = formTypeAndDescTask.find((task) => task.type === formTypeTask) || {};

  return (
    <S.Form onSubmit={handleSubmit(handleSubmitFormTask)}>
      <PopUpCloseButton setIsTaskOpen={() => setFormTaskOpen(false)} />
      <S.Title>
        {tempTask ? "Editar" : "Adicionar"} {type}
        <span>
          <img src={infoIcon} alt="icone de exclamação" />
          <S.Description>{description}</S.Description>
        </span>
      </S.Title>

      <InputComponent
        label="Titulo"
        placeholder="Nome do Hábito"
        id="name"
        hasError={!!errors.name}
        register={register("name", {
          required: "campo obrigatório",
          maxLength: {
            value: 50,
            message: "Quantidade de caracteres máximo, 50!",
          },
        })}
        errorMessage={errors.name && errors.name.message}
      />

      <S.ContainerDateTime>
        <InputComponent
          type="date"
          id="date"
          label="Data"
          hasError={!!errors.date}
          errorMessage={errors.date?.message}
          register={register("date", {
            required: "campo data é obrigatório",
            setValueAs: (value) => dayjs(value).format("YYYY-MM-DD"),
            validate: (value) => {
              return pastDate(value!);
            },
          })}
        ></InputComponent>
        <InputComponent
          label="Hora"
          type="time"
          id="hour"
          errorMessage={errors.hour?.message}
          hasError={!!errors.hour}
          register={register("hour", { required: "Campo Hora é obrigatório" })}
        />
      </S.ContainerDateTime>

      <CategoryInputSelect
        setReturnValue={setCategorySelected}
        register={register("category", { required: "Campo categoria é obrigatório" })}
        error={!!errors.category}
        messageError={errors.category?.message}
      />
      <InputComponent
        label="Descrição"
        placeholder="Descrição"
        as="textarea"
        type="text"
        id="description"
        hasError={!!errors.description}
        register={register("description", {
          required: "campo obrigatório",
          maxLength: {
            value: 1000,
            message: "Quantidade máxima de caracteres, 1000!",
          },
        })}
        errorMessage={errors.description && errors.description.message}
      />

      <S.ContainerOpenWeekFrequency>
        <p>Frequencia semanal</p>
        <span onClick={() => setIWeekFrequencyOpen(!isWeekFrequencyOpen)}>
          <img src={arrow} alt="Seta para baixo" />
        </span>
      </S.ContainerOpenWeekFrequency>

      {isWeekFrequencyOpen && (
        <>
          <S.QuantityPerWeekParagraph>
            Quantidade{" "}
            <InputComponent
              hasError={!!errors.quantityPerWeek}
              placeholder="0"
              id="quantityPerWeek"
              type="text"
              register={register("quantityPerWeek", {
                validate: (value) => {
                  if (value) {
                    console.log(typeof Number(value) === "number" && Number(value) > 0);
                    return typeof Number(value) === "number" && Number(value) > 0;
                  }
                  return true;
                },
              })}
            />
            Semana
          </S.QuantityPerWeekParagraph>
          {errors.quantityPerWeek && <ErrorMessage>Apenas numeros positivos</ErrorMessage>}

          <div>
            <p>Dias da semana</p>
            <WeekDaysCheckBox setWeekDays={setWeekDays} />
          </div>

          <S.ContainerCalendar>
            <p>Finaliza em:</p>
            <DateCalendar version="compact" setReturnDateValue={setFinallyDate} />
          </S.ContainerCalendar>
        </>
      )}

      <S.ContainerButtons>
        {!tempTask && (
          <>
            <ButtonDanger>Excluir</ButtonDanger>
            <S.DuplicateButton>Duplicar</S.DuplicateButton>
          </>
        )}
        <ButtonPrincipal className="mobile">Salvar Alterações</ButtonPrincipal>
      </S.ContainerButtons>
    </S.Form>
  );
}
