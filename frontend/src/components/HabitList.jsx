export default function HabitList({ habits }) {
  return (
    <div>
      {habits.map(habit => (
        <div key={habit.id}>
          {habit.title} - {habit.description}
        </div>
      ))}
    </div>
  )
}