import HabitList from './HabitList'

export default function HabitsPage({ habits, onDelete, onComplete, onEdit }) {

  const completed = habits.filter(h => h.completed_today).length

  const progress = habits.length > 0
    ? (completed / habits.length) * 100
    : 0

  return (
    <div className="p-6 max-w-3xl mx-auto">

      {/* 📊 STATS */}
      <div className="grid grid-cols-3 gap-4 mb-8">

        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="text-slate-500">Total Habits</h3>
          <p className="text-3xl font-bold">{habits.length}</p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="text-slate-500">Completed Today</h3>
          <p className="text-3xl font-bold text-green-600">
            {completed}
          </p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="text-slate-500">Progress</h3>
          <p className="text-3xl font-bold">
            {Math.round(progress)}%
          </p>
        </div>

      </div>

      {/* 📈 PROGRESS BAR */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          <span>Daily Progress</span>
          <span>{Math.round(progress)}%</span>
        </div>

        <div className="h-3 bg-slate-200 rounded-full">
          <div
            className="h-3 bg-green-500 rounded-full transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* 📌 LISTA REUTILIZANDO COMPONENTE */}
      <HabitList
        habits={habits}
        onDelete={onDelete}
        onComplete={onComplete}
        onEdit={onEdit}
      />

    </div>
  )
}