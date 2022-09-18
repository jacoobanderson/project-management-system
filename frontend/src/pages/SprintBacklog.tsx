import React from 'react'
import Navbar from '../components/Navbar'
import SprintCreation from '../components/SprintCreation'

const SprintBacklog = () => {
  return (
    <div className='h-full w-full bg-gray-200'>
    <Navbar />
    <div className='w-full flex justify-center mt-16'>
        <SprintCreation />
    </div>
</div>
  )
}

export default SprintBacklog