import React,{useReducer} from 'react'
const initialstate=1
const reducer=(state,action)=>{
    if(action.type==="increament")
    return state+1;
    else{
        return state-1
    }

}

export default function UseReduce() {
    const [state, dispatch] = useReducer(reducer,initialstate )
   
  return (
    <div>
        <h1>{state}</h1>
        <button onClick={()=>dispatch({type:"increament"})}>increament</button>
        <button  onClick={()=>dispatch({type:"decreament"})}>Decreament</button>
    </div>
  )
}
