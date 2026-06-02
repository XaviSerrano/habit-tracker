import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useHabits } from '../hooks/useHabits'

import Header from '../components/Header'
import HabitForm from '../components/HabitForm'
import HabitList from '../components/HabitList'
import HabitsPage from '../components/HabitsPage'

export default function DashboardPage() {

  const { user, logout } = useContext(AuthContext)
  const {
    habits,
    createHabit,
    updateHabit,
    deleteHabit,
    completeHabit,
    toggleHabit
  } = useHabits()


  return (
    <div className="min-h-screen bg-slate-100">
      <div className="max-w-5xl mx-auto px-6 py-10">

        <h1 className="text-4xl font-bold mb-2">
          Habit Tracker
        </h1>

        <p className="text-slate-500 mb-8">
          Track your daily habits and build consistency.
        </p>

      <Header user={user} logout={logout} />

      <HabitForm onCreate={createHabit} />

      <HabitsPage
        habits={habits}
        onDelete={deleteHabit}
        onComplete={toggleHabit}
        onEdit={updateHabit}
      />

      {habits.length === 0 && (
        <p className="text-gray-500 text-center mt-10">
          No habits yet. Create your first one 🚀
        </p>
      )}

      </div>
    </div>
  )
}