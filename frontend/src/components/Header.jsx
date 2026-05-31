export default function Header({ user, logout }) {
  return (
    <div className="flex justify-between items-center">

      <div>
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <p className="mt-2 text-gray-600">
          Welcome {user?.email}
        </p>
      </div>

      <button
        onClick={logout}
        className="bg-black text-white px-4 py-2 rounded-lg"
      >
        Logout
      </button>

    </div>
  )
}