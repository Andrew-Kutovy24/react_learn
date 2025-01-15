import {IUser} from "../models/IUser.ts";
import {urls} from "../constants/urls.ts";
import {IPost} from "../models/IPost.ts";

export const apiService = {
    getUsers: async ():Promise<{ users:IUser[] }> => {
        return await fetch(urls.users)
            .then(res => res.json())
    },
    getPosts: async ():Promise<{ posts:IPost[] }> => {
        return await fetch(urls.posts)
            .then(res => res.json())
    }
}
