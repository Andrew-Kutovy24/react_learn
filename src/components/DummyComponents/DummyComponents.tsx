import {FC, useEffect, useState} from "react";
import {IDummy} from "../../models/TodoInterface.ts";
import {getDummys} from "../../services/todos.api.service.ts";
import {DummyComponent} from "./DummyComponent/DummyComponent.tsx";


export const DummyComponents:FC = () => {
    const [dummys, setDummys] = useState<IDummy[]>([])

    useEffect(() => {
        getDummys()
            .then(({todos}) => setDummys(todos))
    }, []);

    return (
        <>
            {dummys.map(dummy => <DummyComponent key={dummy.id} dummy={dummy} />)}
        </>
    );
};
