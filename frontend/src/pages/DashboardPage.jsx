import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useHabits } from '../hooks/useHabits'
import { useNavigate } from 'react-router-dom'

import Header from '../components/Header'
import HabitForm from '../components/HabitForm'
import HabitList from '../components/HabitList'
import HabitsPage from '../components/HabitsPage'
import HabitTable from '../components/HabitTable'


export default function DashboardPage() {
  const { user, logout } = useContext(AuthContext)
  const navigate = useNavigate()

  function handleLogout(){
    logout()
    navigate('/')
  }


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

        <Header user={user} logout={handleLogout} />

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