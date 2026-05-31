import HabitCard from './HabitCard'

export default function HabitList({ habits, onDelete, onComplete, onEdit }) {
  return (
    <div className="space-y-3">
      {habits.map(habit => (
        <HabitCard
          key={habit.id}
          habit={habit}
          onDelete={onDelete}
          onComplete={onComplete}
          onEdit={onEdit}
        />
      ))}
    </div>
  )
}