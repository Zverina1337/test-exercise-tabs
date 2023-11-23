import { api } from "@/services/api.js";

const getAllComments = (start = 0, limit = 10) => {
    return api.get(`comments?_start=${start}&_limit=${limit}`)
}

const getComment = (id = 1) => {
    return api.get(`comments/${id}`)
}

const createComment = (newComment) => {
    return api.comment('comments/', newComment)
}

const deleteComment = (id) => {
    return api.delete(`comments/${id}`)
}
const updateComment = (id, newComment) => {
    return api.put(`comments/${id}`, newComment)
}

const getPostComments = (id = 1) => {
    return api.get(`comments?postId=${id}`)
}

export const CommentService = {
    getAllComments,
    getComment,
    createComment,
    deleteComment,
    updateComment,
    getPostComments
}