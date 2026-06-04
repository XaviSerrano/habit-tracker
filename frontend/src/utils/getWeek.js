export function getLast7Days() {
  const days = []

  for (let i = 6; i >= 0; i--) {
    const date = new Date()
    date.setDate(date.getDate() - i)

    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')

    days.push({
      label: date.toLocaleDateString('en-US', { weekday: 'short' }),
      date: `${year}-${month}-${day}`
    })
  }

  return days
}