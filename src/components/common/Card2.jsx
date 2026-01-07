import React from 'react'

function Card2({name, email, message}) {
  return (
    <div className="card mt-4 container p-3 border border-3 border-primary rounded">
      <h1>Card details</h1>
      <h2>Name: {name}</h2>
      <h2>Email: {email}</h2>
        <h2>Message: {message}</h2>
    </div>
  )
}

export default Card2
