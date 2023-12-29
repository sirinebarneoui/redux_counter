import {useDispatch , useSelector} from 'react-redux'
import './App.css';
import Counter from './Components/Counter';
import { handleShow, handlerest } from './Redux/Actions';

function App() {
  const show=useSelector(state=>state.show)
  const dispatch=useDispatch()
  return (
    
    <div>
     
    <h1>Counter component</h1>
    <button onClick={()=>dispatch(handlerest())}>Rest</button>
    <button onClick={()=>dispatch(handleShow())}>Show</button>
       {

       show && <Counter/>
}
    
    
    </div>
  );
}

export default App;
