// import { Result } from 'postcss'
import React, { useState } from 'react'
import './Bmi.css'

export default function Bmi() {
    const [weight, setweight] = useState(null)
    const [height, setheight] = useState(null)
    const [Bmi, setBmi] = useState(null)
    const [status, setstatus] = useState("")

    const weightchange = (e) => {
        const value = e.target.value;
        setweight(value)
    }
    const heightchange = (e) => {
        const value = e.target.value;
       
        setheight(value)
    }

    const calculateBmi = () => {
        const height2 = height * height
        const result = weight / height2
        console.log(result)
        setBmi(result);
        let bmistatus = "obes"
        if (result < 18.5) {
            bmistatus = "underweight"
        }
        else if (result > 18.5 && result < 24.9) {
            bmistatus = "healthy"
        }
        else if (result > 25 && result < 29.9) {
            bmistatus = "overweight"
        }
        setstatus(bmistatus)
    }
    return (

        <div className='mainContainer'>
            
            <h2>BMI CALCULATOR</h2>
            <hr/>
            <div className='weightbox'>
                <label htmlFor="">WEIGHT</label> :
                <input type="text" value={weight} onChange={weightchange} placeholder="enter your weight" />
            </div>
            <div className='heightbox'>
                <label htmlFor="">Height</label>       :
                <input type="text" value={height} onChange={heightchange}  placeholder="enter your height in (cm)"/>
            </div>
            <div className='buttonbox'>
                <button onClick={calculateBmi}>what is my BMI</button>
            </div>
            <div>
                <h4>Your Bmi is-{Bmi}</h4>
                <br/>
                <h4>You are {status}</h4>
            </div>



        </div>
    )
}
