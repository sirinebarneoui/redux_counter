
import {INCREMENT,DECREMENT,DIRECTSHOW,HANDLESHOW,HANDLEREST} from "./ActionTypes";


 export const increment=()=>{

 return(

    {type : INCREMENT}
 )

 };
export const decrement=()=>{

return(
    {type : DECREMENT}
)
};

export const directShow=(payload)=>{

return(
    {type: DIRECTSHOW , payload
    }
)
};
export const handleShow=()=>{

 return(
    {type : HANDLESHOW}
 )
};

export const handlerest=()=>{
    return(

        {type: HANDLEREST}
    )
};
