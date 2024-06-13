import add from '../assets/add.svg'

interface headerProps {
  todos: { text: string; id: number; completed: boolean }[];
  setTodos: any;
  setFilter: (newItem: string) => void;
  newListItem: string;
  setNewListItem: (newItem: string) => void;
}

export default function Header({
  todos,
  setTodos,
  setFilter,
  newListItem,
  setNewListItem,
}: headerProps) {
  const inputTextHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    setNewListItem(e.target.value as string);
  };

  const handleItemAdd = (e:React.FormEvent<HTMLFormElement>) => {
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

  const handleFilterChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value);
  };

  return (
    <>
      <div className="mb-10 flex flex-col text-slate-900">
        <div className="mb-10 bg-gradient-to-bl from-cream to-macbook p-8 text-center text-2xl rounded-t-lg">Things To-Do</div>
        <div className="mx-1 flex h-12 flex-row">
          <form
            className="mx-2 flex w-8/12 justify-end"
            onSubmit={handleItemAdd}
          >
            <div className="my-1 h-full w-full rounded-l-sm border-2 border-gray-200">
              <input
                className="h-full w-full p-4 rounded-l-sm  "
                type="text"
                placeholder="Add a Todo "
                required
                value={newListItem}
                onChange={inputTextHandler}
              ></input>
            </div>
            <div className="  ">
              <button
                type="submit"
                className="my-1 h-full w-12 cursor-pointer rounded-r-sm border-2 border-l-0 border-gray-200 backdrop-blur-lg "
              ><img src={add} /></button>
            </div>
          </form>
          <div className="mr-2 w-4/12">
            <select
              name="sortType"
              id="sort-type"
              className="my-1 mr-2 h-full w-full bg-white p-2 rounded-sm border-2 border-gray-200"
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
