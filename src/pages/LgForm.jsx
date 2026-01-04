import React from 'react'

function LgForm() {
  return (
    <div className='Loginform'>
      <form action="">
        <h1>Login Form</h1><br />
        <input type="text" placeholder='Username' />
        <br />
        <input type="password" placeholder='Password' />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default LgForm
