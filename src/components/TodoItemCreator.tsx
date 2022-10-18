import { useSetRecoilState } from "recoil";
import { nanoid } from "nanoid";

import { todoListState } from "../state/TodoStates";
import { ChangeEvent, FormEvent, useState } from "react";

const TodoItemCreator = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const setTodos = useSetRecoilState(todoListState);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.target.value);

  const addItem = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodos((prev) => [
      ...prev,
      { id: nanoid(), content: inputValue, isComplete: false },
    ]);
    setInputValue("");
  };

  return (
    <form onSubmit={addItem}>
      <input type="text" value={inputValue} onChange={onChangeHandler} />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default TodoItemCreator;
