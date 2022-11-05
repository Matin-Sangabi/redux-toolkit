import { useState } from 'react';
import {useSelector , useDispatch} from 'react-redux';
import { increment , decrement , incrementByAmount  , buyCake} from './counterSlice';

const Counter = () => {
    const {value , numOfCakes} = useSelector((state)=> state.counter);
    const dispatch = useDispatch();
    const [number , setNumber] = useState(0);
    return ( 
        <div>
            <button type='button' onClick={() => dispatch(increment())}>Increment</button>
            <span>{value}</span>
            <button type='button' onClick={()=>dispatch(decrement())}>Decrement</button>
            <button type='button' onClick={() => dispatch(buyCake())}>buy Cake</button>
            <input type="number" onChange={(e) => setNumber(e.target.value)}/>
            <button type='button' onClick={()=> dispatch(incrementByAmount(number))}>Buy</button>
            <h1>num of cakes :  {numOfCakes}</h1>
        </div>
     );
}
 
export default Counter;