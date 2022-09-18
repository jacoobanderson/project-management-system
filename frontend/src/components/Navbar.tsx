import React, { useContext } from "react"
import { UserContext } from "../context/UserContext"

const Navbar = () => {
  const { user } = useContext(UserContext)
  return (
    <div className='w-full h-16 bg-purple-500 flex justify-between items-center p-8'>
      <div>
        <h1 className='text-white text-lg'>Management</h1>
      </div>
      <div className='text-white flex'>
        <ul className='flex mr-16'>
          <li className='mr-16'>
            {" "}
            <a className='hover:text-gray-200' href='sprint'>Spring Backlog</a>
          </li>
          <li className='mr-16'>
            <a className='hover:text-gray-200' href='sprint'>Product Backlog</a>
          </li>
          <li className='mr-16'>
            <a className='hover:text-gray-200' href='sprint'>
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
