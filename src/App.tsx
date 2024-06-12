import { useEffect, useState } from "react";
import List from "./components/List.tsx";
import Header from "./components/Header.tsx";
//import "./index.css";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [newListItem, setNewListItem] = useState("");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todos, filter]);

  const filterHandler = () => {
    switch (filter) {
      case "completed":
        setFilteredTodos(
          todos.filter(
            (todo: { completed: boolean }) => todo?.completed === true,
          ),
        );
        break;

      case "incomplete":
        setFilteredTodos(
          todos.filter(
            (todo: { completed: boolean }) => todo?.completed === false,
          ),
        );
        break;

      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  // Saving in LocalStorage
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let localTodos = JSON.parse(localStorage.getItem("todos") ?? "");
      setTodos(localTodos);
    }
  };

  return (
    <div className="m-auto mt-20 w-3/5 min-w-96 border-2 border-black">
      <Header
        todos={todos}
        setTodos={setTodos}
        setFilter={setFilter}
        newListItem={newListItem}
        setNewListItem={setNewListItem}
      />
      <List todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
    </div>
  );
}
