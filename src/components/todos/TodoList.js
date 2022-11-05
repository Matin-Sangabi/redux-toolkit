import TodoItem from "./TodoItem";

const TodoList = () => {
    const todos = [
        {id : 1 , title : 'todo1' , completed : true},
        {id : 2 , title : 'todo2' , completed : false},
        {id : 3 , title : 'todo3' , completed : false},
        {id : 4 , title : 'todo4' , completed : true},
        {id : 5 , title : 'todo5' , completed : false},
        {id : 6 , title : 'todo6' , completed : false},
    ]
    return ( <ul className="w-25 mx-auto mt-5 list-group">
        {todos.map((todo)=>(
            <TodoItem {...todo} key={todo.id}/>
        ))}
    </ul> );
}
 
export default TodoList;