import React,{useState} from 'react'
import './Quotes.css'
import axios from 'axios'

function Quotes() {
    const [quote, setquote] = useState(" ")
    const clickhandler=()=>{
axios.get('https://api.adviceslip.com/advice')
.then(res=>{
   console.log(res.data)
   setquote(res.data.slip.advice)
})
    }
    return (
        <div>
            <div className='container'>
                <div className='quotebox1'>
                    <div className='quotebox'>
                        {quote}
                    </div>
                    <div className='buttonbox'>
                        <button onClick={clickhandler}>get quote</button>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Quotes