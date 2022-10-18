import { useRecoilValue } from "recoil";
import { todoContentState } from "../state/todoState";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useRecoilValue(todoContentState);

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem {...todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
