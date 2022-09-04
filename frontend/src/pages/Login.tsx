import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({})

  const handleChange = (event: any) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
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
    <div className='w-full h-full flex justify-center items-center'>
      <div className='w-2/6'>
        <h1 className='text-3xl mb-3'>Welcome back</h1>
        <p className='text-gray-400 mb-8'>
          Welcome back! Please enter your details.
        </p>
        <form onSubmit={handleSubmit} id='loginForm'>
          <div className='flex flex-col'>
            <label className='font-semibold text-gray-600' htmlFor='email'>
              Username
            </label>
            <input
              className='border-2 border-gray-200 rounded-sm p-2 mt-1'
              onChange={handleChange}
              type='text'
              name='username'
              id='username'
              placeholder='Enter your username'
              required
            />
          </div>
          <div className='flex flex-col mt-4 mb-4'>
            <label className='font-semibold text-gray-600' htmlFor='password'>
              Password
            </label>
            <input
              className='border-2 border-gray-200 rounded-sm p-2 mt-1'
              onChange={handleChange}
              type='password'
              name='password'
              placeholder='Password'
              required
            />
          </div>
          <div className='flex justify-between'>
            <div>
              <input id='checkbox' name='checkbox' type='checkbox' />
              <label className='ml-1' htmlFor='checkbox'>
                Remember me?
              </label>
            </div>
            <a className='text-purple-600 font-semibold' href='#0'>
              Forgot password
            </a>
          </div>
          <div className='mt-4 flex flex-col'>
            <button
              className='text-gray-200 p-3 bg-purple-600 rounded-lg'
              onClick={handleSubmit}
            >
              Sign in
            </button>
            <button className='mt-4 p-1 border-2 border-gray-200 rounded-lg text-center'>
              <img
                className='inline-block w-10 h-10 mr-1'
                src='https://pngimg.com/uploads/google/google_PNG19635.png'
                alt='google logo'
              />
              Sign in with Google
            </button>
          </div>
        </form>
        <p className='mt-6 text-center'>
          Don't have an account?{" "}
          <a href='#0' className='text-purple-600'>
            Sign up
          </a>
        </p>
      </div>
    </div>
  )
}

export default Login
