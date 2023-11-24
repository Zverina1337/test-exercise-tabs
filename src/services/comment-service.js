import { api } from "@/services/api.js";

const getAllComments = (start = 0, limit = 10) => {
    return api.get('comments', {
        params: {
            _start: start,
            _limit: limit
        }
    })
}

const getComment = (id = 1) => {
    return api.get('comments/', {
        params: {
            id: id
        }
    })
}

const createComment = (newComment, postId) => {
    return api.post('comments',{
        ...newComment
    }, {
        params: {
            postId: postId
        }
    } )
}

const deleteComment = (id) => {
    return api.delete('comments/', {
        params: {
            id: id
        }
    })
}
const updateComment = (id, newComment) => {
    return api.put('comments/', newComment, {
        params: {
            id: id
        }
    })
}

const getPostComments = (id = 1) => {
    return api.get('comments', {
        params: {
            postId: id
        }
    })
}



export const CommentService = {
    getAllComments,
    getComment,
    createComment,
    deleteComment,
    updateComment,
    getPostComments
}