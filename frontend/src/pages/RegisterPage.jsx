import { useContext, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import { AuthContext } from '../context/AuthContext'

export default function RegisterPage() {

  const navigate = useNavigate()

  const { register } = useContext(AuthContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmit(e) {

    e.preventDefault()

    try {

      await register(email, password)

      navigate('/dashboard')

    } catch (error) {
      alert('Register error')
    }
  }

  return (

    <div className="min-h-screen flex items-center justify-center">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-96 space-y-4"
      >

        <h1 className="text-3xl font-bold text-center">
          Register
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded-lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded-lg"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="w-full bg-black text-white p-3 rounded-lg"
        >
          Register
        </button>

        <p className="text-center">
          Already have an account?
          {' '}
          <Link
            to="/"
            className="font-bold"
          >
            Login
          </Link>
        </p>

      </form>

    </div>
  )
}