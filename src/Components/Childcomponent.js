import React from 'react'

export default function Childcomponent(props) {
  return (
    <div>
        <button onClick={props.greethandler}>greet parent</button>
    </div>
  )
}
