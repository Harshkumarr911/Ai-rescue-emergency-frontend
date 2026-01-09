import React from 'react'

function CallAPI() {
    async function call(){
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        console.log(data);
    }
  return (
    <div>
        <button onClick={call}>Call API</button>
    </div>
  )
}

export default CallAPI
