import { createContext, useEffect, useState } from 'react'
import api from '../services/api'

export const AuthContext = createContext()

export function AuthProvider({ children }) {

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    const token = localStorage.getItem('token')

    if (token) {

      api.defaults.headers.Authorization = `Bearer ${token}`

      api.get('/me')
        .then(response => {
          setUser(response.data)
        })
        .catch(() => {
          localStorage.removeItem('token')
        })
        .finally(() => {
          setLoading(false)
        })

    } else {
      setLoading(false)
    }

  }, [])

  async function login(email, password) {

    const formData = new URLSearchParams()

    formData.append('username', email)
    formData.append('password', password)

    const response = await api.post('/login', formData)

    const token = response.data.access_token

    localStorage.setItem('token', token)

    api.defaults.headers.Authorization = `Bearer ${token}`

    const userResponse = await api.get('/me')

    setUser(userResponse.data)
  }

  async function register(email, password) {

    await api.post('/users', {
      email,
      password,
    })

    await login(email, password)
  }

  function logout() {

    localStorage.removeItem('token')

    delete api.defaults.headers.Authorization

    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        register,
        logout,
        authenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}