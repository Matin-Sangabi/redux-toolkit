import { useDispatch } from "react-redux";
import { deleteAsyncTodo, toggleCompleteAsync } from "../features/todos/todosSlice";

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();
  return (
    <li className={`list-group-item ${completed && "list-group-item-success"}`}>
      <div className="d-flex justify-content-between ">
        <span className="d-flex align-items-center gap-2">
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => dispatch(toggleCompleteAsync({ id , completed : !completed , title }))}
          />
          {title}
        </span>
        <button className="btn btn-danger" onClick={()=> dispatch(deleteAsyncTodo({id}))} >Delete</button>
      </div>
    </li>
  );
};

export default TodoItem;
