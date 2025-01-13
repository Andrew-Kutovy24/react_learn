import {FC} from "react";
import {ITodo} from "../../../models/TodoInterface.ts";

type MyPropsType = {
    todo: ITodo
}

const TodoComponent:FC<MyPropsType> = ({todo}) => {

    return (
        <div>
            <p>userId: {todo.userId} --- {todo.completed}</p>
            <p>{todo.title}</p>
            <hr/>
        </div>
    );
};

export default TodoComponent;