import image from "../../assets/icons/check.svg";
import * as S from "./styles";

interface ICheckBox {
  id: number;
  checked: boolean;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function CustonCheckedBox({ id, checked, setChecked }: ICheckBox) {
  // const [isChecked, setIsChecked] = useState<boolean>(checked);
  // const { handleEditTask } = UseCRUD();
  // const { tasks, setTasks } = useContext(TasksContext);

  // async function handleChecked() {
  //   const newCheckedValue = !isChecked;
  //   setIsChecked(newCheckedValue);

  //   const findTask = tasks.find((task) => task.id === id);
  //   const taskDone = { ...findTask, checked: newCheckedValue };

  //   const newTasks = await handleEditTask(id, taskDone, tasks);

  //   setTasks(newTasks);
  // }

  return (
    <S.CustonCheckedBox htmlFor={`checkbox-${id}`}>
      <input
        // disabled={isChecked}
        id={`checkbox-${id}`}
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <span>
        <img src={image} alt="" />
      </span>
    </S.CustonCheckedBox>
  );
}
