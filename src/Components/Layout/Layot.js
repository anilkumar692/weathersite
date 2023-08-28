import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Layot({children}) {
  return (
    <>
    <Header/>
    <div>
        {children}
    </div>
    <Footer></Footer>
    </>
  )
}

export default Layot