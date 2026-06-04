import { getLast7Days } from "../utils/getWeek";
import { buildCompletionMap } from "../utils/buildCompletionMap";

export default function HabitTable({ habits, history }) {
    const days = getLast7Days()
    const completionMap = buildCompletionMap(history)

    return (
        <div className="overflow-x-auto bg-white rounded-xl shadow p-4">
            <table className="w-full border-collapse">
                {/* HEADER */}
                <thead>
                <tr>
                    <th className="text-left p-2">Habit</th>

                    {days.map(day => (
                    <th key={day.date} className="p-2 text-center text-sm text-gray-500">
                        {day.label}
                    </th>
                    ))}
                </tr>
                </thead>

                {/* BODY */}
                <tbody>
                {habits.map(habit => (
                    <tr key={habit.id} className="border-t">

                    <td className="p-2 font-medium">
                        {habit.title}
                    </td>

                    {days.map(day => {
                        const done =
                        completionMap[habit.id]?.has(day.date)

                        return (
                        <td key={day.date} className="text-center p-2">
                            {done ? '✅' : '—'}
                        </td>
                        )
                    })}

                    </tr>
                ))}
                </tbody>

            </table>

        </div>
    )
}