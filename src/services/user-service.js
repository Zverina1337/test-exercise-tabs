import { api } from "@/services/api.js";

const getAllUsers = (start = 0, limit = 10) => {
    return api.get(`users?_start=${start}&_limit=${limit}`)
}

const getUser = (id = 1) => {
    return api.get(`users/${id}`)
}

const createUser = (newUser) => {
    return api.post('users/', newUser)
}

const deleteUser = (id) => {
    return api.delete(`users/${id}`)
}
const updateUser = (id, newUser) => {
    return api.put(`users/${id}`, newUser)
}

export const UserService = {
    getAllUsers,
    getUser,
    createUser,
    deleteUser,
    updateUser,
}