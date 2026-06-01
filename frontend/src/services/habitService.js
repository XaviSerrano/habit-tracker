import api from './api'

export const habitService = {
    getHabits() {
        return api.get('/habits')
    },

    createHabit(data) {
        return api.post('/habits', data)
    },

    updateHabit(id, data) {
        return api.put(`/habits/${id}`, data)
    },

    deleteHabit(id) {
        return api.delete(`/habits/${id}`)
    },

    completeHabit(id) {
        return api.post(`/habits/${id}/complete`)
    },

    toggleHabit(id) {
        return api.post(`/habits/${id}/toggle`)
    }
}