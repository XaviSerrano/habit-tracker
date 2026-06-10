import { useState } from 'react'

export default function HabitForm({ onCreate }) {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [frequency, setFrequency] = useState("daily"

  )
  function handleSubmit(e) {
    e.preventDefault()

    onCreate({ title, description, frequency })

    setTitle('')
    setDescription('')
  }

  return (
<form
  onSubmit={handleSubmit}
  className="
    bg-white
    p-6
    rounded-xl
    shadow-sm
    mb-8
  "
>
  <input
    value={title}
    onChange={(e) => setTitle(e.target.value)}
    placeholder="Habit title"
    className="
      w-full
      border
      rounded-lg
      p-3
      mb-3
    "
  />

  <textarea
    value={description}
    onChange={(e) => setDescription(e.target.value)}
    placeholder="Description"
    className="
      w-full
      border
      rounded-lg
      p-3
      mb-3
    "
  />
  <select
    value={frequency}
    onChange={(e) => setFrequency(e.target.value)}
    className="w-full border p-3 rounded-lg"
  >
    <option value="daily">Daily</option>
    <option value="weekly">Weekly</option>
  </select>

  <button
    className="
      bg-black
      text-white
      px-5
      py-3
      rounded-lg
      hover:opacity-90
    "
  >
    Add Habit
  </button>
</form>
)
}