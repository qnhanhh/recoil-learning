import { ChangeEvent, FC } from "react";
import { useRecoilState } from "recoil";

import { todoListState } from "../state/TodoStates";
import { TodoContent } from "../types";

const replaceItem = (
  array: TodoContent[],
  index: number,
  value: TodoContent
) => {
  return [...array.slice(0, index), value, ...array.slice(index + 1)];
};

const removeItem = (array: TodoContent[], index: number) => {
  return [...array.slice(0, index), ...array.slice(index + 1)];
};

const TodoItem: FC<{ item: TodoContent }> = ({ item }) => {
  const [todos, setTodos] = useRecoilState(todoListState);
  const index = todos.findIndex((listItem) => listItem === item);

  const editItemText = (e: ChangeEvent<HTMLInputElement>) => {
    const newList = replaceItem(todos, index, {
      ...item,
      content: e.target.value,
    });
    setTodos(newList);
  };

  const toggleItemCompletion = (e: ChangeEvent<HTMLInputElement>) => {
    const newList = replaceItem(todos, index, {
      ...item,
      isComplete: !item.isComplete,
    });
    setTodos(newList);
  };

  const deleteItem = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const newList = removeItem(todos, index);
    setTodos(newList);
  };

  return (
    <div>
      <input type="text" value={item.content} onChange={editItemText} />
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      <button onClick={deleteItem}>x</button>
    </div>
  );
};

export default TodoItem;
