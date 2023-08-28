import React  from 'react'
import updatedcomponent from './HOC'

function Person1({money,handleincrease}) {
   
  return (
    <div>
        <h1>jimmy is offering ${money}</h1>
        <button onClick={handleincrease}>increase money</button>
        
    </div>
    
  )
}

export default updatedcomponent(Person1)