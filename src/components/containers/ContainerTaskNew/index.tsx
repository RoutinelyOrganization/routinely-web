import CardTask from "../../CardTask";
import * as S from "./styles";

export default function ContainerTask() {
  return (
    <S.Container>
      <CardTask category="habit" idTask={1} titleTask="teste" />
      <CardTask category="project" idTask={2} titleTask="teste2" />
      <CardTask category="task" idTask={3} titleTask="teste3" />
      <CardTask category="habit" idTask={4} titleTask="teste4" />
      <CardTask category="project" idTask={5} titleTask="teste5" />
      <CardTask category="task" idTask={6} titleTask="teste6" />
      <CardTask category="habit" idTask={7} titleTask="teste7" />
      <CardTask category="project" idTask={8} titleTask="teste8" />
      <CardTask category="task" idTask={9} titleTask="teste9" />
      <CardTask category="habit" idTask={10} titleTask="teste10" />
      <CardTask category="project" idTask={11} titleTask="teste11" />
    </S.Container>
  );
}
