import { useContext, useEffect } from "react";
import ContainerTaskDone from "../containers/ContainerTaskDone";
import * as S from "./styles";
import { getAllTasks } from "../../utils/functions/getAllTasks";
import { CalendarContext } from "../../contexts/CalendarContext";
import { TasksContext } from "../../contexts/TasksContext";

export default function DoneTasks() {
  const token = localStorage.getItem("token");
  const { month, year } = useContext(CalendarContext);
  const { setTasks, tasks } = useContext(TasksContext);

  useEffect(() => {
    (async () => {
      if (token) {
        const data = await getAllTasks(token, month, year);
        setTasks(data);
      }
    })();
  }, [token, month, year, setTasks]);

  return (
    <S.Container>
      {tasks.map((task) =>
        task.checked === true ? (
          <ContainerTaskDone
            key={task.id}
            id={task.id}
            title={task.name}
            category={task.category}
            priority={task.priority}
            subCategory={task.tag}
          />
        ) : null,
      )}
    </S.Container>
  );
}
