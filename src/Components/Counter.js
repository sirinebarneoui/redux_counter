import { useDispatch, useSelector } from "react-redux";
import {decrement, directShow, increment} from "../Redux/Actions";

const Counter=()=>{
     var count= useSelector(State=>State.count)
     const textP=useSelector(State=>State.textP)
     const dispatch =useDispatch()
    return(

    <div>
     <button onClick={()=> count>0 && dispatch(decrement())}>-</button>
     <span>{count}</span>
     <button onClick={()=>dispatch(increment())}>+</button>
     <br/>
     <br/>
     <input type="text" onChange={(e)=>dispatch(directShow(e.target.value))}/>
     <h2>{textP}</h2>


    </div>
    )
}
export default Counter;