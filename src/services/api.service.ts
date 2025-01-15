import {IUser} from "../models/UserInterface.ts";
import {IProduct} from "../models/IProduct.ts";

const baseUrl = 'https://dummyjson.com';

export const apiService = {
    getUsers: async ():Promise<{users:IUser[] }> => {
        return await fetch(baseUrl + '/users')
            .then(res => res.json())
    },
    getCart: async (id: number):Promise<{products:IProduct[]}> => {
        return await fetch(baseUrl + '/carts/' + id )
            .then(res => res.json())
    }
}