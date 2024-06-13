interface listProps {
  todos: { text: string; id: number; completed: boolean }[];
  setTodos: any;
  filteredTodos: { text: string; id: number; completed: boolean }[];
}

import Item from "./Item";

export default function List({ todos, setTodos, filteredTodos }: listProps) {
  return (
    <>
      <div className="my-4 flex flex-col justify-evenly py-1.5">
        {filteredTodos.map((todo) => (
          <Item
            todo={todo}
            todos={todos}
            setTodos={setTodos}
            text={todo.text}
            key={todo.id}
          />
        ))}
        <div className="h-4"></div>
      </div>
    </>
  );
}
