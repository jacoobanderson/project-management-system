import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'


const Sidebar = () => {
  const { user } = useContext(UserContext)
  return (
    <div className='w-72 h-full bg-gray-100'>
        <div>
            <h1>Logged in as: {user?.username}</h1>
        </div>
    </div>
  )
}

export default Sidebar