import React, { useState, useEffect, useContext, ReactComponentElement } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

type Props = {
    children: JSX.Element
}

/**
 * Acts like a gateway to the private page.
 *
 * @param {React.ReactElement} root0 props.
 * @param {React.ReactElement} root0.children The children elements.
 * @returns {React.ReactElement} The element.
 */
const PrivateRoute = ({ children }: Props) => {
  const [isAuth, setIsAuth] = useState<Boolean>()
  const { id } = useParams()
  const { setUser } = useContext(UserContext)

  useEffect(() => {
    /**
     * Verifies the user by calling the fetch function which returns a boolean if the user is authenticated, sets the state accordingly.
     */
    async function checkAuth () {
      const auth = await verifyUser()
      setIsAuth(auth)
    }
    // getUsers()
    checkAuth()
  }, [])

  /**
   * Verifies the user JWT and sets the user info.
   */
  async function verifyUser () {
    const response = await fetch(
      process.env.REACT_APP_ACCOUNT_API + `/${id}/user`,
      {
        method: 'GET',
        mode: 'cors',
        credentials: 'include'
      }
    )
    setUser(await response.json())
    return response.status === 200
  }

  // Checks if the user is authorized and if so, renders the private overview else navigates the user back to the login page.
  if (isAuth === undefined) return null
  return isAuth ? children : <Navigate to='/login' />
}

export default PrivateRoute
