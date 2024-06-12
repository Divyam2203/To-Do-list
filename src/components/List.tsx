import Item from "./Item";

export default function List({ todos, setTodos, filteredTodos }) {
  return (
    <div className="my-4 flex flex-col justify-evenly py-1.5">
      {filteredTodos.map((todo) => (<Item
        todo={todo}
        todos={todos}
        setTodos={setTodos}
        text={todo.text}
        key={todo.id}
      />))}
      
    </div>
  );
}
