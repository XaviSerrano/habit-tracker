import { useEffect, useState } from 'react'
import { habitService } from '../services/habitService'

export function useHabits() {

  const [habits, setHabits] = useState([])

  async function loadHabits() {
    const response = await habitService.getHabits()
    setHabits(response.data)
  }

  async function createHabit(data) {
    await habitService.createHabit(data)
    loadHabits()
  }

  useEffect(() => {
    loadHabits()
  }, [])

  return {
    habits,
    createHabit
  }
}