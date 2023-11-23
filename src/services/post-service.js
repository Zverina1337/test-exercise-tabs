import { api } from "@/services/api.js";

const getAllPosts = (start = 0, limit = 10) => {
   return api.get(`posts?_start=${start}&_limit=${limit}`)
}

const getPost = (id = 1) => {
    return api.get(`posts/${id}`)
}

const createPost = (newPost) => {
    return api.post('posts/', newPost)
}

const deletePost = (id) => {
    return api.delete(`posts/${id}`)
}

const updatePost = (id, newPost) => {
    return api.put(`posts/${id}`, newPost)
}

const getPostComments = (id = 1) => {
    return api.get(`posts/${id}/comments`)
}

export const PostService = {
    getAllPosts,
    getPost,
    createPost,
    deletePost,
    updatePost,
    getPostComments,
}