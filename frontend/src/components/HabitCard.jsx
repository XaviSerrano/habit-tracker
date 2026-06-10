export default function HabitCard({
  habit,
  onDelete,
  onComplete,
  onEdit
}) {
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
        hover:shadow-md
        transition-all
        duration-200

        ${habit.completed_today
          ? 'border-green-400 bg-green-50'
          : 'border-slate-200'
        }
      `}
    >

      {/* ===================== */}
      {/* LEFT SIDE - INFO */}
      {/* ===================== */}
      <div className="flex-1">
        <h3 className="font-semibold text-lg">
          {habit.title}
        </h3>

        <p className="text-slate-500 mt-1">
          {habit.description}
        </p>

        <p className="text-sm text-slate-500">
          {habit.frequency}
        </p>

        {/* ===================== */}
        {/* STREAKS */}
        {/* ===================== */}
        <div className="mt-3 flex gap-4 text-sm">
          <span className="text-orange-500 font-medium">
            🔥 {habit.current_streak} streak
          </span>

          <span className="text-purple-500 font-medium">
            🏆 {habit.best_streak} best
          </span>
        </div>

        {/* ===================== */}
        {/* STATUS */}
        {/* ===================== */}
        {habit.completed_today && (
          <p className="text-green-600 text-sm mt-2 font-medium">
            ✓ Completed today
          </p>
        )}
      </div>

      {/* ===================== */}
      {/* RIGHT SIDE - ACTIONS */}
      {/* ===================== */}
      <div className="flex flex-col items-end gap-3 ml-4">

        <input
          type="checkbox"
          checked={habit.completed_today}
          onChange={() => onComplete(habit.id)}
          className="w-5 h-5 cursor-pointer"
        />

        <button
          onClick={() => onEdit(habit.id)}
          className="
            px-3 py-1
            bg-blue-500
            text-white
            rounded-lg
            hover:bg-blue-600
          "
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(habit.id)}
          className="
            px-3 py-1
            bg-red-500
            text-white
            rounded-lg
            hover:bg-red-600
          "
        >
          Delete
        </button>
      </div>

    </div>
  )
}