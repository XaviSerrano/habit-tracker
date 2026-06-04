import { useEffect, useState } from 'react'
import { habitService } from '../services/habitService'

export function useHabits() {
  const [habits, setHabits] = useState([])
  const [history, setHistory] = useState([])

  async function loadHabits() {
    const res = await habitService.getHabits()
    setHabits(res.data)
  }

  async function loadHistory() {
    const res = await habitService.getHistory()
    setHistory(res.data)
  }

  async function createHabit(data) {
    await habitService.createHabit(data)
    await loadHabits()
  }

  async function updateHabit(id, data) {
    await habitService.updateHabit(id, data)
    await loadHabits()
  }

  async function deleteHabit(id) {
    await habitService.deleteHabit(id)
    await loadHabits()
  }

  async function toggleHabit(id) {
    await habitService.toggleHabit(id)
    await loadHabits()
    await loadHistory()
  }

  useEffect(() => {
    loadHabits()
    loadHistory()
  }, [])

  return {
    habits,
    history,
    createHabit,
    updateHabit,
    deleteHabit,
    toggleHabit
  }
}