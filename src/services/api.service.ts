import {IUser} from "../models/UserInterface.ts";

export const apiService = {
    getUsers: async (pg:string):Promise<{users:IUser[]}> => {
        return await fetch("https://dummyjson.com/users?skip=" + pg || '')
            .then(res => res.json())
    }
}