import { useRecoilValue } from "recoil";

import { filteredTodoListState } from "../state/TodoStates";
import TodoItemCreator from "./TodoItemCreator";
import TodoItem from "./TodoItem";
import TodoListFilters from "./TodoListFilters";

const TodoList = () => {
  const todos = useRecoilValue(filteredTodoListState);

  return (
    <div>
      <TodoListFilters />
      <TodoItemCreator />
      {todos.map((todo) => (
        <TodoItem key={todo.id} item={todo} />
      ))}
    </div>
  );
};

export default TodoList;
