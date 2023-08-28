import React, {useState}from 'react'
const initial_state = 0
function MemoComp() {
    
    const [count, setcount] = useState(initial_state)
   
    const handlechange = () => {
        setcount(count+1)
       
       
    }
    console.log("cha")
    return (
        
        <div>
            <h1>{count}</h1>
            <button onClick={handlechange}>click</button>
        </div>
    )
}
export default React.memo


