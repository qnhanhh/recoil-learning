import { FC } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";

import { todoCompleteState, todoContentState } from "../state/todoState";
import { TodoContent } from "../types";

const TodoItem: FC<TodoContent> = (props) => {
  const { id, title, description } = props;
  const [isComplete, setIsComplete] = useRecoilState(
    todoCompleteState(props.id)
  );
  const setTodos = useSetRecoilState(todoContentState);

  const toggleComplete = () => setIsComplete((prevState) => !prevState);
  const deleteTodo = () =>
    setTodos((todos) => todos.filter((todo) => todo.id !== id));

  return (
    <div>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
      <div>
        <button onClick={toggleComplete}>
          {isComplete ? "Not complete" : "Completed"}
        </button>
        <button onClick={deleteTodo}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
