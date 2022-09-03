import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({})

  const handleChange = (event: any) => {
    setFormData({
        ...formData,
        [event.target.name]: event.target.value
    })
  }
  const handleSubmit = async (event: any) => {
    event.preventDefault()
    console.log(formData)
    try {
      const response = await fetch(
        process.env.REACT_APP_ACCOUNT_API + "/login",
        {
          method: "POST",
          mode: "cors",
          credentials: "include",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      )
      const res = await response.json()
      if (response.status === 201) {
        navigate(`/${res.id}/find`)
      } else {
        console.log(res.status)
      }
    } catch (error) {}
  }

  return (
    <div>
      <h1>Welcome back</h1>
      <p>Welcome back! Please enter your details.</p>
      <form onSubmit={handleSubmit} id='loginForm'>
        <div>
          <label htmlFor='email'>Username</label>
          <input
            onChange={handleChange}
            type='text'
            name='username'
            id='username'
            placeholder='Enter your username'
            required
          />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            onChange={handleChange}
            type='password'
            name='password'
            placeholder='Password'
            required
          />
        </div>
        <div>
          <input id='checkbox' name='checkbox' type='checkbox' />
          <label htmlFor='checkbox'>Remember me?</label>
          <a href='#0'>Forgot password</a>
        </div>
        <div>
          <button onClick={handleSubmit}>
            Sign in
          </button>
          <button>Sign in with Google</button>
        </div>
        
      </form>
    </div>
  )
}

export default Login
