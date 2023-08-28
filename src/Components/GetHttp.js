
import React, { useEffect } from 'react'

export default function GetHttp() {
    useEffect(()=>{
        fetch('http://jsonplaceholder.typicode.com/todos/')
    .then((result)=>{
        result.json().then((resp)=>{
            console.log(resp)
        })
    })
    }) 
  return (
    <div>{resp}</div>
  )
}
