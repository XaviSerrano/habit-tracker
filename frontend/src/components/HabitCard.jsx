export default function HabitCard({ habit, onDelete, onComplete, onEdit }) {
  return (
      <div
        className={`border p-4 rounded flex justify-between items-center transition ${
          habit.completed_today
            ? 'bg-green-100 opacity-80'
            : 'bg-white'
        }`}
      >
      <div>
        <h3 className="font-bold">{habit.title}</h3>
        <p className="text-gray-600">{habit.description}</p>
      </div>

      <div className="flex gap-2">

        <input
          type="checkbox"
          checked={habit.completed_today}
          onChange={() => onComplete(habit.id)}
          className="w-5 h-5"
        />

        <button
        onClick={() => {
            const newTitle = prompt("New title", habit.title)
            const newDescription = prompt("New description", habit.description)

            onEdit(habit.id, {
            title: newTitle,
            description: newDescription
            })
        }}
        >
        Edit
        </button>

        <button
          onClick={() => onDelete(habit.id)}
          className="bg-red-500 text-white px-2 py-1 rounded"
        >
          Delete
        </button>

      </div>
    </div>
  )
}