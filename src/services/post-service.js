import { api } from "@/services/api.js";

const getAllPosts = (start = 0, limit = 100) => {
   return api.get('posts/', {
       params: {
           _start: start,
           _limit: limit
       }
   })
}

const getPost = (id = 1) => {
    return api.get('posts/', {
        params: {
            id
        }
    })
}

const createPost = (newPost) => {
    return api.post('posts/', newPost)
}

const deletePost = (id) => {
    return api.delete('posts/', {
        params: {
            id
        }
    })
}

const updatePost = (id, newPost) => {
    return api.put('posts/', newPost, {
        params: {
            id
        }
    })
}

export const PostService = {
    getAllPosts,
    getPost,
    createPost,
    deletePost,
    updatePost,
}