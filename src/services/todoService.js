import {apiService} from "./apiService"
import {urls} from "../constants/urls"

const todoService = {
    getAll: ()=>apiService.get(urls.todos),
    create: (data)=>apiService.post(urls.todos, data)
}

export {todoService}