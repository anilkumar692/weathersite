import React from 'react'
import Layot from '../Components/Layout/Layot'
import {Link} from '@mui/material'
import cofee from '../images/cofee.jpg'
import '../styles/HomeStyle.css'

function Home() {
  return (
    <Layot>
      <div className="home" style={{background:`url(${cofee})`}}>
        <div className="headercontainer">
          <h1>Food Website</h1>
          <p>we serve the best</p>
          <Link>
          <button>Order Now</button>
          </Link>
        </div>
      </div>
    </Layot>
  )
}

export default Home