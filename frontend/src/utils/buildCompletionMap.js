export function buildCompletionMap(history) {
  const map = {}

  history.forEach(item => {
    if (!map[item.habit_id]) {
      map[item.habit_id] = new Set()
    }

    map[item.habit_id].add(item.date)
  })

  return map
}