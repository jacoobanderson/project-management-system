import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Sprint from './Sprint'

type SprintObject = {
    userId: String,
    task: String,
    requirement: String,
    testStatus: String,
    estimatedTime: String,
    actualTime: String
}

const SprintCollection = () => {
    const { id } = useParams()
    const [sprints, setSprints] = useState<SprintObject[]>([])

    async function fetchSprints() {
        const response = fetch(`http://localhost:5001/api/v1/${id}/sprints`)
        setSprints(await (await response).json())
    }
    useEffect(() => {
        fetchSprints()
    }, [])
  return (
    <div className=' bg-blue-400'>
        {sprints.map((sprint: SprintObject, index) => {
            return <div key={index}>{sprint.task + ' ' + sprint.requirement}</div>
        })}
    </div>
  )
}

export default SprintCollection