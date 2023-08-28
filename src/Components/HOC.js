import React,{useState} from 'react'

function updatedcomponent(Originalcomponent) {
  function Newcomponent(){
    const [money, setmoney] = useState(10)
    const handleincrease=()=>{
        setmoney(money*2)
    }
    return <Originalcomponent handleincrease={handleincrease} money={money}/>
  }
  return Newcomponent
}

export default updatedcomponent