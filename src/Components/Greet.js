import React from 'react'
const Greet=({name,heroName})=>{
    return(
   <div>
    <h1>hello {name} A.k.a {heroName}</h1>
    <h1>
 {props.children}
    </h1>
   
   </div>
     
    )
}
export default Greet