import { useState } from "react";
import List from "./List";

export default function Header({
  todos,
  setTodos,
  setFilter,
  newListItem,
  setNewListItem,
}) {
  const inputTextHandler = (e) => {
    setNewListItem(e.target.value);
  };

  const handleItemAdd = (e) => {
    e.preventDefault();
    if (newListItem != "") {
      setTodos([
        ...todos,
        {
          text: newListItem,
          completed: false,
          id: Math.random() * 10000,
        },
      ]);
    }
    setNewListItem("");
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <>
      <div className="mb-10 flex flex-col">
        <div className="mb-10 bg-blue-500 p-8 text-center text-2xl">to-do</div>
        <div className="mx-1 flex h-12 flex-row">
          <form
            className="mx-2 flex w-8/12 justify-end"
            onSubmit={handleItemAdd}
          >
            <div className="my-1 h-full w-full">
              <input
                className="h-full w-full p-4"
                type="text"
                placeholder="Add a Todo "
                required
                value={newListItem}
                onChange={inputTextHandler}
              ></input>
            </div>
            <div className="">
              <button
                type="submit"
                className="my-1 h-full w-12 cursor-pointer bg-green-500"
              ></button>
            </div>
          </form>
          <div className="mr-2 w-4/12">
            <select
              name="sortType"
              id="sort-type"
              className="my-1 mr-2 h-full w-full bg-white p-4"
              onChange={handleFilterChange}
            >
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="incomplete">Incomplete</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}
