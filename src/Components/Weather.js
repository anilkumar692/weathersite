import React, { useState } from 'react'
import './Weather.css'
import cloudy from '../images/cloudy.png'
import searchi from '../images/searchi.png'
import wind2 from '../images/wind2.png'
import humidity from '../images/humidity.png'
import axios from 'axios'
import clear from '../images/clear.png'
import mist from '../images/mist.png'
import rain from '../images/rain.png'
import drizzle from '../images/drizzle.png'
// C:\Users\RS\awewsomeapp\src\images\clear.png

function Weather() {
    const [data, setdata] = useState({
        celcious:" ",
        name: " ",
        Humidity: 10,
        speed: " ",
        image:cloudy,
        description:'---'

    })
    const [city, setcity] = useState('')
    const [error, seterror] = useState('')
   
    const HandleClick = () => {
       
        if (city !== "") {
          
            // useEffect(() => {
                // daf7e02f91bae0fedea9d2ee01a93fab
               
                const ApiUrrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=daf7e02f91bae0fedea9d2ee01a93fab`
                axios.get(ApiUrrl)
                    .then(res => {
                        let imagepath='';
                        if(res.data.weather[0].main==="Clouds"){
                            imagepath=cloudy
                        }
                       else if(res.data.weather[0].main==="Clear"){
                            imagepath=clear
                        }
                      else  if(res.data.weather[0].main==="Rain"){
                            imagepath=rain
                        }
                      else  if(res.data.weather[0].main==="Drizzle"){
                            imagepath={drizzle}
                        }
                      else  if(res.data.weather[0].main==="Haze"){
                            imagepath=mist
                        }
                        else{
                            imagepath={clear}
                        }
                        console.log(res.data)
                        setdata({
                            ...data, celcious: res.data.main.temp-273, name: res.data.name,
                             humidity: res.data.main.humidity, speed: res.data.wind.speed,image:imagepath,description:res.data.weather[0].description
                        })
                        seterror('')
                    })
                    
                        
                   
                    .catch(err => {
                        if(err.response.status===404){
                            seterror("please enter a valid city")
                        }
                        
                    })
            // }, [])
            
        }
       
    }
     
    return (
        <div className='container1'>
            <div className="weather">

                <div className="search">
                    <input type="text" name="" id="" placeholder='enter city name' onChange={e => setcity(e.target.value)} value={city} />
                    <button><img src={searchi} alt="" onClick={HandleClick} /></button>

                </div>
                <div className='error'><h4>{error}</h4></div>
                <div className="winfo">
                    <img src={data.image} alt="" className='icon' />
                    <h1>{Math.floor(data.celcious)}°C</h1>
                    <h2>{data.name}</h2>
                    <h3>{data.description}</h3>
                    <div className="details">
                        <div className="col">
                            <img src={humidity} alt="" />
                            <div className="humidity">
                                <p>{data.humidity}%</p>
                                <p>Humidity</p>
                            </div>
                        </div>
                        <div className="col">
                            <img src={wind2} alt="" />
                            <div className="wind">
                                <p>{Math.floor(data.speed)}km/hr</p>
                                <p>wind</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Weather