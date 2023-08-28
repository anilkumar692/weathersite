import React from 'react'

 function FuunctionClick() {
    function clickHandler(){
        console.log("clicked successfully")
    }
  return (
    <div>
        <button onClick={clickHandler}>press</button>
    </div>
  )
}
export default FuunctionClick