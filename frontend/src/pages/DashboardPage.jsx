import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useHabits } from '../hooks/useHabits'

import Header from '../components/Header'
import HabitForm from '../components/HabitForm'
import HabitList from '../components/HabitList'
import HabitsPage from '../components/HabitsPage'
import HabitTable from '../components/HabitTable'


export default function DashboardPage() {
  const { user, logout } = useContext(AuthContext)

  const {
    habits,
    history,
    createHabit,
    updateHabit,
    deleteHabit,
    toggleHabit
  } = useHabits()

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="max-w-5xl mx-auto px-6 py-10">

        <Header user={user} logout={logout} />

        <HabitForm onCreate={createHabit} />

        <HabitsPage
          habits={habits}
          onDelete={deleteHabit}
          onComplete={toggleHabit}
          onEdit={updateHabit}
        />

      </div>

      <HabitTable
        habits={habits}
        history={history}
      />
    </div>
  )
}