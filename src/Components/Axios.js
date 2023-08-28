import axios from 'axios'
import React, { useEffect,useState} from 'react'

export default function Axios() {
    const [mydata, setmydata] = useState([])
    useEffect(()=>{
        axios.get('http://jsonplaceholder.typicode.com/posts')
        .then((res)=>setmydata(res.data))
    },[]);
    return(
        <>
{mydata.map((post)=>{
    const {id,title,body}=post;
    return(
        <div>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    )
})}
        </>
    )
    }