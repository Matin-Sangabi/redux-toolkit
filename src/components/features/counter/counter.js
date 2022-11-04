import { useState } from 'react';
import {useSelector , useDispatch} from 'react-redux';
import { increment , decrement , incrementByAmount } from './counterSlice';

const Counter = () => {
    const {value , numOfCakes} = useSelector((state)=> state.counter);
    const dispatch = useDispatch();
    const [number , setNumber] = useState(0);
    console.log(value)
    return ( 
        <div>
            <button type='button' onClick={() => dispatch(increment())}>Increment</button>
            <span>{value}</span>
            <button type='button' onClick={()=>dispatch(decrement())}>Decrement</button>
            <input type="number" onChange={(e) => setNumber(e.target.value)}/>
            <button type='button' onClick={()=> dispatch(incrementByAmount(number))}>Buy</button>
            <span>num of cakes :  {numOfCakes}</span>
        </div>
     );
}
 
export default Counter;