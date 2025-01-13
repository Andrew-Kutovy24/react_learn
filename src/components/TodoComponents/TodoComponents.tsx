import {FC, useEffect, useState} from "react";
import ITodo from "../../models/TodoInterface.ts";
import TodoComponent from "./TodoComponent/TodoComponent.tsx";
import {getTodos} from "../../services/todos.api.service.ts";


export const TodoComponents:FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([])

    useEffect(() => {
        getTodos()
            .then(todos => setTodos(todos))
    }, []);

    console.log(todos);
    return (
        <>
            {
                todos.map(todo => <TodoComponent key={todo.id}
                                                 todo={todo}
                />)
            }
        </>
    );
};