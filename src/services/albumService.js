import {apiService} from "./apiService"
import {urls} from "../constants/urls"

const albumService = {
    getAll: ()=>apiService.get(urls.albums),
    create: (data)=>apiService.post(urls.albums, data)
}

export {albumService}