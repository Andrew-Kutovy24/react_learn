import {FC, useEffect, useState} from 'react';
import TodoComponent from "../TodoComponent/TodoComponent.tsx";
import ITodo from "../../models/ITodo.ts";

const TodosDummyComponent: FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([])
    useEffect(() => {
        fetch("https://dummyjson.com/todos")
            .then(data => data.json())
            .then(todos => setTodos(todos.todos))
    }, []);
    console.log(todos);
    return (
        <>
            <h1>Task3</h1>
            {todos.map(todo => <TodoComponent key={todo.id} userId={todo.userId} id={todo.id} title={todo.todo}
                                              completed={todo.completed}/>)}
        </>
    );
};

export default TodosDummyComponent;