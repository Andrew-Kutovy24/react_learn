import {IDummy, ITodo} from "../models/TodoInterface.ts";


export const getTodos = async ():Promise<ITodo[]> => {
    return await fetch("https://jsonplaceholder.typicode.com/todos")
        .then(data => data.json())
}

export const getDummys = async ():Promise<IDummy[]> => {
    return await fetch("https://dummyjson.com/todos")
        .then(data => data.json())
}