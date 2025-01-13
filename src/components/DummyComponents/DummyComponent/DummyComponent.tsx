import {FC} from "react";
import {IDummy} from "../../../models/TodoInterface.ts";

type MyPropsType = {
    dummy: IDummy
}

export const DummyComponent:FC<MyPropsType> = ({dummy}) => {
    return (
        <div>
            <p>userId: {dummy.userId} --- {dummy.completed}</p>
            <p>{dummy.todo}</p>
            <hr/>
        </div>
    );
};
