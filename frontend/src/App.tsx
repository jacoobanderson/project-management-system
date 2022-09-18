import React, { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { UserContext } from "./context/UserContext"
import Login from "./pages/Login"
import Register from "./pages/Register"
import PrivateRoute from "./pages/PrivateRoute"
import Dashboard from "./pages/Dashboard"
import "./App.css"
import SprintBacklog from "./pages/SprintBacklog"

function App() {
  const [user, setUser] = useState<any>({
    id: "",
    firstName: "",
    lastName: "",
    username: "",
  })

  return (
    <div className='w-full h-full'>
      <BrowserRouter>
        <UserContext.Provider value={{ user, setUser }}>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route
              path='/:id/dashboard'
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route
              path='/:id/sprint'
              element={
                <PrivateRoute>
                  <SprintBacklog />
                </PrivateRoute>
              }
            />
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  )
}

export default App
