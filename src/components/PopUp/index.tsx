/* eslint-disable react-hooks/rules-of-hooks */
import { useForm } from "react-hook-form";
import ErrorMessage from "../ErrorMessage";
import Input from "../Input";
import Select from "../Select";
import PopUpCloseButton from "../buttons/PopUpCloseButton";
import * as S from "./styles";

interface IPopUpAddTaskProps {
  setIsTaskOpen: React.Dispatch<React.SetStateAction<boolean>>;
  actionForm: 'add' | 'edit';
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

interface IEditTaskForm {
  nameTask?: string;
  dateTask?: Date;
  timeTask?: string;
  priorityTask?: string;
  categoryTask?: string;
  tagTask?: string;
  descriptionTask?: string;
}

interface ISelectOptions {
  label: string,
  options: Array<string>,
  formRequired: "priorityTask" | "categoryTask" | "tagTask"
}


export default function PopUpTesting({ setIsTaskOpen, actionForm }: IPopUpAddTaskProps) {
  const interfaceForm = actionForm === 'add'
  ? useForm<IAddTaskForm>()
  : useForm<IEditTaskForm>();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = interfaceForm;

  const handleSubmitFormTask =  (data: IEditTaskForm) => {
    if (actionForm === 'add') {
      console.log(data);
      //logica para adicionar task
    } else {
      //logica para editar task
    }
    reset();
  };

  const selectOptions: Array<ISelectOptions> = [
    {
      label: 'Prioridade',
      options: ['', 'Urgente', 'Alta', 'Média', 'Baixa'],
      formRequired: "priorityTask"
    },
    {
      label: 'Categoria',
      options: ['', 'Pessoal', 'Estudos', 'Finanças', 'Carreira', 'Saude'],
      formRequired: "categoryTask"
    },
    {
      label: 'TagTask',
      options: ['', 'Canditatura', 'Conta', 'Exercicio', 'Beleza', 'Licenciatura'],
      formRequired: "tagTask"
    }
  ]
  
  return (
    <S.Modal>
       {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <S.Form onSubmit={handleSubmit(handleSubmitFormTask)}>
        <S.Title>{actionForm === 'add'?'Adicionar tarefa':'Editar tarefa'}</S.Title>
        <PopUpCloseButton setIsTaskOpen={setIsTaskOpen} setIsEditTaskOpen={setIsTaskOpen} />

        <Input
          label="Nome da tarefa"
          type="text"
          id="name"
          required
          register={register("nameTask", {
            required: "campo obrigatório",
            maxLength: {
              value: 50,
              message: "Quantidade de caracteres máximo, 50!",
            },
          })}
          errorMessage={errors.nameTask && errors.nameTask.message}
        >
        </Input>    
        

        <S.InputContainer>
          <Input
            type="date"
            id="date"
            required
            register={register("dateTask", { required: "campo obrigatório" })}
            errorMessage={errors.dateTask && errors.dateTask.message}
          >
            <S.LabelDateTimePopUp htmlFor="date">Data</S.LabelDateTimePopUp>
          </Input>

          <Input
            type="time"
            id="time"
            required
            register={register("timeTask", { required: "Formato inválido" })}
            errorMessage={errors.timeTask && errors.timeTask.message}
         >
             <S.LabelDateTimePopUp htmlFor="time">Time</S.LabelDateTimePopUp>
          </Input>
        </S.InputContainer>

        <S.InputContainer>  
          {selectOptions.map(select => <Select label={select.label}
            options={select.options}
            register={register(select.formRequired, { required: "campo obrigatório" })}
            error={errors[select.formRequired]?.message || ''}
          />)}
        </S.InputContainer>

        <S.ContainerPopUp>
          <Input
            label="Descrição"
            type="text"
            id="descricao"
            required
            register={register("descriptionTask", {
              required: "campo obrigatório",
              maxLength: {
                value: 1000,
                message: "Quantidade máxima de caracteres, 1000!",
              },
            })}
            errorMessage={errors.nameTask && errors.nameTask.message}
          >
            {errors.descriptionTask && <ErrorMessage>{errors.descriptionTask.message}</ErrorMessage>}
          </Input>
        </S.ContainerPopUp>
          <S.ButtonsContainer>
            {actionForm === 'add' ?
              <S.SaveButton>Adicionar tarefa</S.SaveButton>
              :
              <>
              <S.DeleteButton>Excluir tarefa</S.DeleteButton>
              <S.SaveButton>Salvar alterações</S.SaveButton>
              </>
            }
        </S.ButtonsContainer>
      </S.Form>
    </S.Modal>
  );
}