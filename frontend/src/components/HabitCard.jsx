export default function HabitCard({
  habit,
  onDelete,
  onComplete,
  onEdit
}) {
    console.log(habit)
  return (
    
    <div
      className={`
        bg-white
        rounded-xl
        shadow-sm
        border
        p-5
        flex
        justify-between
        items-center
        hover:shadow-md
        transition-all
        duration-200

        ${
          habit.completed_today
            ? 'border-green-400 bg-green-50'
            : 'border-slate-200'
        }
      `}
    >
      <div>
        <h3 className="font-semibold text-lg">
          {habit.title}
        </h3>

        <p className="text-slate-500 mt-1">
          {habit.description}
        </p>
      </div>

      <div className="flex items-center gap-4">
        <input
          type="checkbox"
          checked={habit.completed_today}
          onChange={() => onComplete(habit.id)}
          className="w-6 h-6 cursor-pointer"
        />

        <button
          onClick={() => onEdit(habit.id)}
          className="
            px-3 py-2
            rounded-lg
            bg-blue-500
            text-white
            hover:bg-blue-600
          "
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(habit.id)}
          className="
            px-3 py-2
            rounded-lg
            bg-red-500
            text-white
            hover:bg-red-600
          "
        >
          Delete
        </button>
      </div>

      {/* ✅ Streak */}
      {habit.streak > 0 && (
          <span className="inline-block mt-1 text-sm text-orange-500 font-medium">
              🔥 {habit.streak} day{habit.streak > 1 ? 's' : ''} streak
          </span>
      )}

      {habit.completed_today && (
          <span className="inline-block mt-2 text-sm text-green-600 font-medium">
              ✓ Completed today
          </span>
      )}
    </div>
  )
}