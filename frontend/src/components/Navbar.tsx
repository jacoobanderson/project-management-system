import React, { useContext } from "react"
import { UserContext } from "../context/UserContext"

const Navbar = () => {
  const { user } = useContext(UserContext)
  return (
    <div className='shadow-md w-full h-16 bg-gray-100 flex justify-between items-center p-8'>
      <div>
        <h1 className='text-gray-600 text-lg'>Management</h1>
      </div>
      <div className='text-gray-600 flex'>
        <ul className='flex mr-16'>
          <li className='mr-16'>
            {" "}
            <a className='hover:text-gray-500' href='sprint'>Spring Backlog</a>
          </li>
          <li className='mr-16'>
            <a className='hover:text-gray-500' href='sprint'>Product Backlog</a>
          </li>
          <li className='mr-16'>
            <a className='hover:text-gray-500' href='sprint'>
              Requirements
            </a>
          </li>
        </ul>
        <h1 className='text-sm text-center'>{user?.firstName + " " + user?.lastName}</h1>
      </div>
    </div>
  )
}

export default Navbar
