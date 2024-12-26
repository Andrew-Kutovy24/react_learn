import {FC} from 'react';
import {ITodos} from "../../models/ITodos.ts";


const TodoComponent:FC<ITodos> = ({id, userId, title}) => {

    return (
        <div>
            <p>id:{id}, userId:{userId}</p>
            <h4>{title}</h4>
            <hr/>
        </div>
    );
};

export default TodoComponent;