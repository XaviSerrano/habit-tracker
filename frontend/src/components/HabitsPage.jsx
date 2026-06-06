import HabitList from './HabitList'
import { useState } from 'react'
import EditHabitModal from './EditHabitModal'

export default function HabitsPage({
  habits,
  onDelete,
  onComplete,
  onEdit
}) {

  const [editingHabit, setEditingHabit] = useState(null)
  const completed = habits.filter(h => h.completed_today).length

  const progress = habits.length
    ? (completed / habits.length) * 100
    : 0

  return (
    <div className="p-6 max-w-3xl mx-auto">

      {/* STATS */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-white p-5 rounded-xl shadow">
          <h3>Total</h3>
          <p className="text-3xl font-bold">{habits.length}</p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <h3>Completed</h3>
          <p className="text-3xl font-bold text-green-600">
            {completed}
          </p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <h3>Progress</h3>
          <p className="text-3xl font-bold">
            {Math.round(progress)}%
          </p>
        </div>
      </div>

      {/* LIST */}
      <HabitList
        habits={habits}
        onDelete={onDelete}
        onComplete={onComplete}
        onEdit={(id) => setEditingHabit(habits.find(h => h.id === id))}  // ✅
      />

      {editingHabit && (
        <EditHabitModal
          habit={editingHabit}
          onSave={onEdit}
          onClose={() => setEditingHabit(null)}
        />
      )}
    </div>
  )
}