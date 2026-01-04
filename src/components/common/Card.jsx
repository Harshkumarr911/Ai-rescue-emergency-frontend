import React from 'react'

const Card = (props) => {
    console.log("Hii", props)
    console.log("My age", props.age)
  return (
    <>
    
    <div className='card'>
      <h1>{props.usernm} and my age is {props.age}</h1>
      <p>Software Engineer</p>
    </div>
    </>
  )
}

export default Card
