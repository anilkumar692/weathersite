import React from 'react'
import { FirstName } from '../App'

export default function CompC() {
  return (
    <div>
<FirstName.Consumer>
    {
        (lastname)=>{
            return <div><h1>my name is {lastname}</h1></div>
        }
    }
</FirstName.Consumer>
    </div>
  )
}
