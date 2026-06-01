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

  async function updateHabit(id, data) {
    console.log("UPDATE:", id, data)
    await habitService.updateHabit(id, data)
    loadHabits()
  }

async function deleteHabit(id) {
  console.log("DELETE CLICK:", id)

  try {
    await habitService.deleteHabit(id)
    console.log("DELETE SUCCESS:", id)
    loadHabits()
  } catch (err) {
    console.error("DELETE ERROR:", err.response?.data || err.message)
  }
}

async function completeHabit(id) {
  console.log("COMPLETE CLICK:", id)

  try {
    await habitService.completeHabit(id)
    console.log("COMPLETE SUCCESS:", id)
    loadHabits()
  } catch (err) {
    console.error("COMPLETE ERROR:", err.response?.data || err.message)
  }
}

async function toggleHabit(id) {
    await habitService.toggleHabit(id)
    loadHabits()
}

  useEffect(() => {
    loadHabits()
  }, [])

  return {
    habits,
    createHabit,
    updateHabit,
    deleteHabit,
    completeHabit,
    toggleHabit
  }
}