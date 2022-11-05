import TodoItem from "./TodoItem";
import { useSelector , useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchTodos } from "../features/todos/todosSlice";

const TodoList = () => {
    const {todos} = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    useEffect(() =>{
        dispatch(fetchTodos());
    } ,[dispatch])
    return ( <ul className="w-25 mx-auto mt-5 list-group">
        {todos.map((todo)=>(
            <TodoItem {...todo} key={todo.id}/>
        ))}
    </ul> );
}
 
export default TodoList;