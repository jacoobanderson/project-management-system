import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

const Register = () => {
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
          process.env.REACT_APP_ACCOUNT_API + "/register",
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
          navigate(`/login`)
        } else {
          console.log(res.status)
        }
      } catch (error) {}
    }
  
    return (
      <div className='w-full h-full flex justify-center items-center'>
        <div className='w-2/6'>
          <h1 className='text-3xl mb-3'>Don't have an account?</h1>
          <p className='text-gray-400 mb-8'>
            Please enter your details.
          </p>
          <form onSubmit={handleSubmit} id='registerForm'>
          <div className='flex flex-col mt-4'>
              <label className='font-semibold text-gray-600' htmlFor='firstName'>
                First name
              </label>
              <input
                className='border-2 border-gray-200 rounded-sm p-2 mt-1'
                onChange={handleChange}
                type='firstName'
                name='firstName'
                id='firstName'
                placeholder='Enter your first name'
                required
              />
            </div>
            <div className='flex flex-col mt-4'>
              <label className='font-semibold text-gray-600' htmlFor='lastname'>
                Last name
              </label>
              <input
                className='border-2 border-gray-200 rounded-sm p-2 mt-1'
                onChange={handleChange}
                type='text'
                name='lastName'
                id='lastname'
                placeholder='Enter your last name'
                required
              />
            </div>
            <div className='flex flex-col mt-4'>
              <label className='font-semibold text-gray-600' htmlFor='email'>
                Email
              </label>
              <input
                className='border-2 border-gray-200 rounded-sm p-2 mt-1'
                onChange={handleChange}
                type='text'
                name='email'
                id='email'
                placeholder='Enter your email'
                required
              />
            </div>
            <div className='flex flex-col mt-4'>
              <label className='font-semibold text-gray-600' htmlFor='username'>
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
                placeholder='Enter your password'
                required
              />
            </div>
            <div className='mt-4 flex flex-col'>
              <button
                className='text-gray-200 p-3 bg-purple-600 rounded-lg'
                onClick={handleSubmit}
              >
                Register
              </button>
            </div>
          </form>
          <p className='mt-6 text-center'>
            Already have an account?{" "}
            <a href='#0' className='text-purple-600'>
              Sign in
            </a>
          </p>
        </div>
      </div>
  )
}

export default Register