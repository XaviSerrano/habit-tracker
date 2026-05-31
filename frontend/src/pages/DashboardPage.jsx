import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useHabits } from '../hooks/useHabits'

import Header from '../components/Header'
import HabitForm from '../components/HabitForm'
import HabitList from '../components/HabitList'

export default function DashboardPage() {

  const { user, logout } = useContext(AuthContext)
  const { habits, createHabit } = useHabits()

  return (
    <div className="p-10">

      <Header user={user} logout={logout} />

      <HabitForm onCreate={createHabit} />

      <HabitList habits={habits} />

    </div>
  )
}