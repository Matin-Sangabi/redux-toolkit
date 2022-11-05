import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAsyncTodo } from "../features/todos/todosSlice";

const TodoList = () => {
  const { todos, loading, error } = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAsyncTodo());
  }, [dispatch]);
  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {(!loading && !error) && todos && (
        <ul className="w-25 mx-auto mt-5 list-group">
          {todos.map((todo) => (
            <TodoItem {...todo} key={todo.id} />
          ))}
        </ul>
      )}
    </>
  );
};

export default TodoList;
