import React from "react"

const SprintCreation = () => {
  return (
    <div>
      <h1 className="mb-4 text-lg text-gray-600">Create a new task:</h1>
      <div className='flex text-xs text-gray-500'>
        <div>
          <label className='block mb-2' htmlFor='task'>
            Task
          </label>
          <input className='block w-64 h-10 border-solid border-r-2 border-gray-100 p-4' name='task' />
        </div>
        <div>
          <label className='block mb-2' htmlFor='requirement'>
            Requirement
          </label>
          <input className='block w-52 h-10 border-solid border-r-2 border-gray-100 p-4' name='requirement' />
        </div>
        <div>
          <label className='block mb-2' htmlFor='testStatus'>
            Test Status
          </label>
          <input className='block w-28 h-10 border-solid border-r-2 border-gray-100 p-4' name='testStatus' />
        </div>
        <div>
          <label className='block mb-2' htmlFor='estimatedTime'>
            Estimated Time
          </label>
          <input className='block w-28 h-10 border-solid border-r-2 border-gray-100 p-4' name='estimatedTime' />
        </div>
        <div>
          <label className='block mb-2' htmlFor='actualTime'>
            Actual Time
          </label>
          <input className='block w-28 h-10 p-4' name='actualTime' />
        </div>
      </div>
      <button className="pt-2 pb-2 pl-6 pr-6 rounded bg-green-600 text-gray-100 text-sm mt-4 hover:bg-green-700">Create</button>
    </div>
  )
}

export default SprintCreation
