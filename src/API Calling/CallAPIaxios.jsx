import React, { useState } from 'react'
import axios from 'axios';
function CallAPIaxios() {
 
    const [data,setData]=useState([])

    const call= async ()=>{
        const response= await axios.get("https://jsonplaceholder.typicode.com/todos")

        console.log(response.data)
        setData(response.data)
    }
  return (
    <div>
      <button onClick={call}>Call API Axios</button>
      <div>
        {
          data.map(function(item){
            return <h1 key={item.id}>{item.title}</h1>
          })
        }
      </div>
    </div> 
  )
}

export default CallAPIaxios

