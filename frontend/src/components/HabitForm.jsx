import { useState } from 'react'

export default function HabitForm({ onCreate }) {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    onCreate({ title, description })

    setTitle('')
    setDescription('')
  }

  return (
  <form
    onSubmit={handleSubmit}
    className="mt-8 flex flex-col gap-4 max-w-md"
  >
    <input
      className="border p-2 rounded"
      value={title}
      onChange={e => setTitle(e.target.value)}
      placeholder="Title"
    />

    <input
      className="border p-2 rounded"
      value={description}
      onChange={e => setDescription(e.target.value)}
      placeholder="Description"
    />

    <button
      className="bg-blue-600 text-white p-2 rounded"
    >
      Add
    </button>
  </form>
)
}