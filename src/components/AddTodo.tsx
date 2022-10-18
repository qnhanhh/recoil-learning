import { nanoid } from "nanoid";
import { FormEvent, ChangeEvent, useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoContentState } from "../state/todoState";
import { TodoContent } from "../types";

const AddTodo = () => {
  const [content, setContent] = useState<Omit<TodoContent, "id">>({
    title: "",
    description: "",
  });
  const setTodos = useSetRecoilState(todoContentState);

  const addTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodos((todos) => [...todos, { ...content, id: nanoid() }]);
    setContent({ title: "", description: "" });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setContent((prev) => ({ ...prev, [e.target.id]: e.target.value }));

  return (
    <form onSubmit={addTodo}>
      <input
        onChange={handleChange}
        value={content.title}
        id="title"
        required
      />
      <input
        onChange={handleChange}
        value={content.description}
        id="description"
      />
      <button type="submit" disabled={!content.title}>
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
