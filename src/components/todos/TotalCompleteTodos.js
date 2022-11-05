import { useSelector } from "react-redux";

const TotalCompleteTodo = () => {
    const {todos , loading  , error} = useSelector(state => state.todos);

    return ( 
        <>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {(!loading && !error) &&todos && <h4 className="mt-4 ">Total complete Item : {todos.filter(t => t.completed).length}</h4> }
        </>
    );
}
 
export default TotalCompleteTodo;