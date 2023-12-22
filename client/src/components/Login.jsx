import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Login = () => {
  const initialState = {
    email: '',
    password: ''
  }
  const[user, setUser] = useState(initialState)

  const handleChange = (e) => {
   const { name, value } = e.target
 
    setUser((preValue) => ({
      ...preValue,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(user)
  }

  return (
    <div className='container'>
      <div>
        <h1>Login</h1>
        <br/>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              name='email'
              placeholder='Enter your email'
              required
              autoComplete='off'
              value={user.email}
              onChange={handleChange}
            />
          </div>

          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              name='password'
              placeholder='Enter your password'
              required
              autoComplete='off'
              value={user.password}
              onChange={handleChange}
            />
          </div>

          <button type='submit' className='btn btn-primary'>
            Login
          </button>
            <br />
            <p>
              Don't have an account? <Link to='/register'>Register</Link>
            </p>

        </form>
      </div>
    </div>
   
  )
}

export default Login