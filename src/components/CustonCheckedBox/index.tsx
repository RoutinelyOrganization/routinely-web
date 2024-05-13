import image from "../../assets/icons/check.svg";
import * as S from "./styles";

interface ICheckBox {
  id: number;
  checked: boolean;
  setChecked?: React.Dispatch<React.SetStateAction<boolean>>;
  setValue?: (id: number, checked: boolean, name?: string, text?: string) => void;
  text?: string;
  name?: string;
}
export default function CustonCheckedBox({ id, checked, setChecked, text, name, setValue }: ICheckBox) {
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

  const handleChecked = () => {
    setChecked && setChecked(!checked);
    setValue && setValue(id, !checked, name, text);
  };

  return (
    <S.CustonCheckedBox htmlFor={`checkbox-${id}`}>
      <input
        // disabled={isChecked}
        id={`checkbox-${id}`}
        type="checkbox"
        checked={checked}
        onChange={handleChecked}
        value={text}
        name={name}
      />
      <span>{text || <img src={image} alt="" />}</span>
    </S.CustonCheckedBox>
  );
}
