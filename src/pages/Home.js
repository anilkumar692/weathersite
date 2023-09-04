import React from 'react'
import Layot from '../Components/Layout/Layot'
import {Link} from '@mui/material'
import blackres2 from '../images/blackres2.jpg'
import '../styles/HomeStyle.css'


function Home() {
  return (
    <Layot>
      <div className="home" style={{backgroundImage:`url(${blackres2})`}}>
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