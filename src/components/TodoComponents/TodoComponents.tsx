import {useEffect, useState} from "react";
import {ITodos} from "../../models/ITodos.ts";
import TodoComponent from "../TodoComponent/TodoComponent.tsx";

const TodoComponents = () => {
    const [todos, setTodos] = useState<ITodos[]>([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(data => data.json())
            .then(todos => setTodos(todos))
    }, [])
    console.log(todos)

    return (
        <>
            <h1>Task2</h1>
            {todos.map((todo)=>
                <TodoComponent key={todo.id}
                               id={todo.id} userId={todo.userId}
                               completed={todo.completed}
                               title={todo.title}/>)}
        </>
    )
}

export default TodoComponents;