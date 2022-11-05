import { useEffect } from "react";
import { useSelector , useDispatch } from "react-redux";
import { fetchUsers } from "./userSlice";
const USers = () => {
    const usersData = useSelector((state) => state.users);
    const {loading , error , users} = usersData;
    
    const dispatch = useDispatch();
    useEffect(() =>{
        dispatch(fetchUsers());
    } , [dispatch])
    return (
        <>
            <h1>User List :</h1>
            {loading && <p><b>Loading ...</b></p>}    
            {error && <p>{error}</p>}    
            {(!loading && !error) && users && users.map((user)=>{
                return(
                    <li key={user.id}>{user.name}</li>
                )
            })}
        </>
     )
}
 
export default USers;