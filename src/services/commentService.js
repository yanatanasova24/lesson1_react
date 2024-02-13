import {apiService} from "./apiService"
import {urls} from "../constants/urls"

const commentService = {
    getAll: ()=>apiService.get(urls.comments),
    getPostById: (userId)=>apiService.get(urls.users.getPostByUserId(userId))
}

export {commentService}