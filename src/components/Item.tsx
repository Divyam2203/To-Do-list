export default function Item({ text, todo, todos, setTodos }) {
  const deleteHandler = () => {
    setTodos(todos.filter((item) => item.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
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

  let itemContent = (
    <div className="align-center m-1 h-full w-full bg-gray-50 p-3">{text}</div>
  );
  let completeButton = (
    <button className="m-1 h-full w-12 bg-green-500" onClick={completeHandler}>
      done
    </button>
  );

  if (todo.completed) {
    itemContent = (
      <div className="align-center m-1 h-full w-full bg-gray-400 p-3">
        {text}
      </div>
    );
    completeButton = (
      <button className="m-1 h-full w-12 bg-yellow-500" onClick={completeHandler}>
      undone
    </button>
    );
  }

  return (
    <div className="mx-3 my-1 mb-0.5 flex h-12">
      {itemContent}
      <div>{completeButton}</div>
      <div>
        <button className="m-1 h-full w-12 bg-red-500" onClick={deleteHandler}>
          del
        </button>
      </div>
    </div>
  );
}
