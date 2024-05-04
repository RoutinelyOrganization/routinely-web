import ContainerTask from "../containers/ContainerTaskNew";
import * as S from "./styles";

export default function Task() {
  return (
    <S.Conteiner>
      <S.Select name="" id="">
        <option value="all tasks">Todas as tarefas</option>
        <option value="projects">Projetos</option>
        <option value="habit">Hábito</option>
        <option value="tasks">Atividades</option>
      </S.Select>
      <ContainerTask />
    </S.Conteiner>
  );
}
