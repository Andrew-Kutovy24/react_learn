import ITodo from "../models/TodoInterface.ts";


export const getTodos = async ():Promise<ITodo[]> => {
    return await fetch("https://jsonplaceholder.typicode.com/todos")
        .then(data => data.json())
}
