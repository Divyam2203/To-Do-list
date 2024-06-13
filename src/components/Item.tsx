import done from "../assets/checkmark.svg";
import trash from "../assets/trash.svg";
import redoo from "../assets/redo.svg";
import check from "../assets/check.svg";

interface itemProps {
  text: string;
  todo: { text: string; id: number; completed: boolean };
  todos: { text: string; id: number; completed: boolean }[];
  setTodos: (func: { text: string; id: number; completed: boolean }[]) => void;
}

export default function Item({ text, todo, todos, setTodos }: itemProps) {
  const deleteHandler = () => {
    setTodos(
      todos.filter(
        (item: { id: number; completed: boolean }) => item.id !== todo.id,
      ),
    );
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item: { text: string; id: number; completed: boolean }) => {
        if (item.id == todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      }),
    );
  };

  let itemContent = <></>;
  let completeButton = <></>;
  const itemContentComplete = (
    <div className="align-center m-1 flex h-full w-full rounded-sm border-2 border-gray-200 p-3 text-slate-200 backdrop-blur-lg backdrop-brightness-90">
      <div className="m-1 h-full w-4">
        <img src={check} alt="task-completed" className="size-full" />
      </div>
      <div>{text}</div>
    </div>
  );
  const itemContentIncomplete = (
    <div className="align-center m-1 h-full w-full rounded-sm border-2 border-gray-200 p-3 text-white backdrop-blur-lg backdrop-brightness-90">
      {text}
    </div>
  );
  let doneButton = (
    <button
      className="m-1 h-full w-12 rounded-sm border-2 border-gray-200 backdrop-blur-lg backdrop-brightness-90"
      onClick={completeHandler}
    >
      <img src={done} alt="task complete" />
    </button>
  );
  let redoButton = (
    <button
      className="m-1 h-full w-12 rounded-sm border-2 border-gray-200 backdrop-blur-lg backdrop-brightness-90"
      onClick={completeHandler}
    >
      <img src={redoo} alt="redo" />
    </button>
  );
  itemContent = itemContentIncomplete;
  completeButton = doneButton;

  if (todo.completed) {
    itemContent = itemContentComplete;
    completeButton = redoButton;
  } else {
    itemContent = itemContentIncomplete;
    completeButton = doneButton;
  }

  return (
    <div className="mx-3 my-1 mb-0.5 flex h-12">
      {itemContent}
      <div>{completeButton}</div>
      <div>
        <button
          className="m-1 h-full w-12 rounded-sm border-2 border-gray-200 backdrop-blur-lg backdrop-brightness-90"
          onClick={deleteHandler}
        >
          <img src={trash} alt="delete" />
        </button>
      </div>
    </div>
  );
}
