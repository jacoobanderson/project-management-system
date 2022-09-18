import React from "react"
import Navbar from "../components/Navbar"
import SprintCollection from "../components/SprintCollection"
import SprintCreation from "../components/SprintCreation"

const SprintBacklog = () => {
  return (
    <div className='h-full w-full bg-gray-200'>
      <Navbar />
      <div className='w-full flex flex-col mt-16'>
        <div className='flex justify-center'>
          <SprintCreation />
        </div>
        <div className='flex justify-center mt-10'>
          <SprintCollection />
        </div>
      </div>
    </div>
  )
}

export default SprintBacklog
