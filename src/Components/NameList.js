
import React from 'react'

function NameList() {
    // const names=["bruice","clark","diana"]
    
    const persons=[
        {
            id:1,
            name:"Bruice",
            age:30,
            skill:"react"
        },
        {
            id:2,
            name:"clark",
            age:30,
            skill:"Vue"
        },
        {
            id:3,
            name:"diana",
            age:30,
            skill:"Angular"
        }
    ]
    const PersonList= persons.map(person=><h2  key={person.id}>i am {person.name} i am {person.age} years old i know {person.skill}</h2>)
  return (
    <div>
       
          {PersonList} 

        
    </div>
  )
}

export default NameList